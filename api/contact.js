const nodemailer = require('nodemailer');

// ─── Gmail SMTP Config ───────────────────────────────────────────
// Set these as Environment Variables in Vercel Dashboard:
// Settings → Environment Variables → Add:
//   GMAIL_USER = av6007616@gmail.com
//   GMAIL_APP_PASSWORD = your-16-char-app-password
// ─────────────────────────────────────────────────────────────────

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

module.exports = async (req, res) => {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { name, email, _subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: _subject || `Portfolio Contact from ${name}`,
        html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 25px; text-align: center;">
                    <h2 style="color: #ffffff; margin: 0; font-size: 22px;">📬 New Portfolio Message</h2>
                </div>
                <div style="padding: 25px; background: #fafafa;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 15px; font-weight: 600; color: #555; width: 100px; vertical-align: top;">Name</td>
                            <td style="padding: 12px 15px; color: #222;">${name}</td>
                        </tr>
                        <tr style="background: #f0f0f0; border-radius: 6px;">
                            <td style="padding: 12px 15px; font-weight: 600; color: #555; vertical-align: top;">Email</td>
                            <td style="padding: 12px 15px; color: #222;"><a href="mailto:${email}" style="color: #667eea;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; font-weight: 600; color: #555; vertical-align: top;">Subject</td>
                            <td style="padding: 12px 15px; color: #222;">${_subject || 'N/A'}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px; padding: 20px; background: #ffffff; border-left: 4px solid #667eea; border-radius: 6px;">
                        <p style="margin: 0 0 8px 0; font-weight: 600; color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                        <p style="margin: 0; color: #333; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
                <div style="padding: 15px 25px; background: #f5f5f5; text-align: center; font-size: 12px; color: #999;">
                    Sent from your portfolio at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
    }
};

const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Gmail SMTP Config ───────────────────────────────────────────
// You MUST generate a Google App Password for this to work.
// Steps: Google Account → Security → 2-Step Verification → App passwords
// Generate one for "Mail" and paste the 16-char password below.
const GMAIL_USER = 'av6007616@gmail.com';
const GMAIL_APP_PASSWORD = 'hwzivkjhlcjpuljg'; // Replace with your 16-char app password
// ─────────────────────────────────────────────────────────────────

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve resume PDF for download
app.get('/download-cv', (req, res) => {
    const resumePath = path.join(__dirname, 'AnkitVerma_Resume_Java.pdf');
    res.download(resumePath, 'AnkitVerma_Resume_Java.pdf', (err) => {
        if (err) {
            console.error('Error sending resume:', err);
            res.status(404).send('Resume file not found.');
        }
    });
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, _subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    const mailOptions = {
        from: `"Portfolio Contact" <${GMAIL_USER}>`,
        to: GMAIL_USER,
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
        console.log(`✅ Email sent from ${name} (${email})`);
        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('❌ Email error:', error);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
    }
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'));
});

app.listen(PORT, () => {
    console.log(`\n  ✨ Portfolio server running at: http://localhost:${PORT}\n`);
});

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import SpotlightCard from './reactbits/SpotlightCard';
import Magnet from './reactbits/Magnet';
import ShinyText from './reactbits/ShinyText';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    _subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        loading: false,
        success: false,
        message: 'Please fill in all required fields.',
      });
      return;
    }

    setStatus({ loading: true, success: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', _subject: '', message: '' });

        // Trigger celebratory confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#ec4899', '#8b5cf6', '#3b82f6'],
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || 'Failed to send message. Please try again or email directly.',
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: 'Network error. Please reach out directly to av6007616@gmail.com.',
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <ShinyText text="Let's Connect" color="#f472b6" shineColor="#ffffff" speed={2.5} className="text-xs font-semibold uppercase tracking-wider" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Have a project or opportunity? <span className="gradient-text">Let's talk</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            I am currently open to full-time software engineering roles and contract collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Email Card */}
              <SpotlightCard
                className="rounded-2xl p-5 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md"
                hsl="240 90% 70%"
                intensity={0.6}
                size={300}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email Address</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </SpotlightCard>

              {/* Phone Card */}
              <SpotlightCard
                className="rounded-2xl p-5 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md"
                hsl="280 90% 70%"
                intensity={0.6}
                size={300}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Direct Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </SpotlightCard>

              {/* Location Card */}
              <SpotlightCard
                className="rounded-2xl p-5 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md"
                hsl="320 90% 70%"
                intensity={0.6}
                size={300}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Quick Response Note */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-purple-950/20 border border-white/10">
              <h4 className="text-sm font-bold text-white mb-2">⚡ Quick Response Guarantee</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Messages sent through this form deliver straight to my Gmail inbox via server notification. Expect a response within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <SpotlightCard
              className="rounded-2xl p-8 bg-[#0f1322]/90 border border-white/10 backdrop-blur-xl"
              hsl="260 90% 70%"
              intensity={0.7}
              size={400}
              borderGlow={1.5}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#090c15] border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-gray-500 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Your Email <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#090c15] border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-gray-500 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="_subject" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Subject / Project Topic
                  </label>
                  <input
                    type="text"
                    id="_subject"
                    name="_subject"
                    value={formData._subject}
                    onChange={handleChange}
                    placeholder="Full Stack Opportunity / Web Architecture"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c15] border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-gray-500 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Message <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, project requirements, or idea..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#090c15] border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-gray-500 text-sm outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Status Message Banner */}
                {status.message && (
                  <div
                    className={`p-4 rounded-xl flex items-center gap-3 text-sm ${
                      status.success
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                    }`}
                  >
                    {status.success ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Button with Magnet */}
                <div className="pt-2">
                  <Magnet padding={40} activeIntensity={0.2}>
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-50 text-sm"
                    >
                      {status.loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </Magnet>
                </div>
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}

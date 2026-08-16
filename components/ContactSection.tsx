'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Github,
  Linkedin,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Invisible honeypot field for bot protection
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error state
    setErrorMessage('');

    // Client-side validation checks
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      setStatus('error');
      return;
    }

    if (!formData.email.trim() || !EMAIL_REGEX.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    if (!formData.subject.trim()) {
      setErrorMessage('Please enter a subject.');
      setStatus('error');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message.');
      setStatus('error');
      return;
    }

    if (formData.message.trim().length > 3000) {
      setErrorMessage('Message length must be under 3,000 characters.');
      setStatus('error');
      return;
    }

    // Set loading state & disable duplicate submissions
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          honeypot: formData.honeypot,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        // Clear the form fields upon success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(
          data.message || 'Unable to send your message right now. Please try again.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to send your message right now. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0A0E17] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
            CONNECT & COLLABORATE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let's build systems that <span className="gradient-text-sky">solve real problems.</span>
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            Positioned for Information Systems Management, Technology Project Management, IT Program Analyst, and Backend Engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Panel: Verified Details & Direct Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-slate-100 border-b border-slate-800 pb-3">
                Direct Contact Options
              </h3>

              <div className="space-y-4 text-sm">
                {/* Primary Direct Email Option */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/90 border border-sky-500/30 hover:border-sky-400 transition-all">
                  <div className="p-3 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono text-sky-400 uppercase font-bold">
                      Email me directly
                    </div>
                    <a
                      href="mailto:jossyyasub@gmail.com"
                      className="font-bold text-slate-100 hover:text-sky-300 transition-colors text-base block underline underline-offset-4 decoration-sky-500/50"
                    >
                      jossyyasub@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sky-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase font-bold">
                      Direct Phone
                    </div>
                    <div className="font-bold text-slate-100 text-base">{PERSONAL_INFO.phones[0]}</div>
                    <div className="text-slate-300 font-medium text-xs">{PERSONAL_INFO.phones[1]}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sky-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase font-bold">
                      Location
                    </div>
                    <div className="font-bold text-slate-100 text-base">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors shadow-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
                >
                  <Github className="w-4.5 h-4.5 text-sky-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors shadow-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
                >
                  <Linkedin className="w-4.5 h-4.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Strategic Guarantee Box */}
            <div className="p-6 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sm space-y-2">
              <div className="font-bold text-sky-300 flex items-center gap-2 text-base">
                <Sparkles className="w-5 h-5" /> Professional Guarantee
              </div>
              <p className="text-slate-200 leading-relaxed font-normal">
                Submissions are sent directly to <strong className="text-white">jossyyasub@gmail.com</strong> with automatic reply-to set to your email address.
              </p>
            </div>
          </div>

          {/* Right Panel: Executive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow p-6 sm:p-10 rounded-3xl border border-sky-500/40 shadow-2xl">
              {/* Success Notification UI */}
              {status === 'success' ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="text-center py-12 space-y-4 animate-in fade-in"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Message sent successfully.</h3>
                  <p className="text-base text-slate-200 max-w-md mx-auto font-normal">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 rounded-xl text-sm font-bold bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-sky-400 focus:outline-none"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-100">
                      Portfolio Contact Form
                    </h3>
                    <span className="text-xs font-mono text-slate-300 font-semibold">
                      Direct Delivery to Inbox
                    </span>
                  </div>

                  {/* Accessible Error Banner */}
                  {status === 'error' && errorMessage && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-sm flex items-center gap-3 animate-in fade-in"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot Input (Invisible to real humans, catches automated bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="honeypot">Do not fill this field</label>
                    <input
                      type="text"
                      id="honeypot"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs font-mono text-slate-200 font-bold block mb-1.5">
                        Your name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:outline-none transition-all disabled:opacity-50 font-normal"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-xs font-mono text-slate-200 font-bold block mb-1.5">
                        Your email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. s.jenkins@company.com"
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:outline-none transition-all disabled:opacity-50 font-normal"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="text-xs font-mono text-slate-200 font-bold block mb-1.5">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      maxLength={150}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Technology Project Discussion"
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:outline-none transition-all disabled:opacity-50 font-normal"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="message" className="text-xs font-mono text-slate-200 font-bold block">
                        Message *
                      </label>
                      <span className="text-xs font-mono text-slate-400">
                        {formData.message.length}/3000
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={3000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project requirements or system inquiry..."
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:outline-none transition-all disabled:opacity-50 resize-none font-normal"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl text-base font-bold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] disabled:opacity-60 disabled:pointer-events-none focus:ring-2 focus:ring-sky-400 focus:outline-none"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-white" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

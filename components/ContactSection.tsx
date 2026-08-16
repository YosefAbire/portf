'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Technology Leader / Hiring Manager',
    subject: 'Information Systems / Project Role Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-slate-100 border-b border-slate-800 pb-3">
                Verified Contact Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-sky-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase font-bold">
                      Direct Phone
                    </div>
                    <div className="font-bold text-slate-100 text-base">{PERSONAL_INFO.phones[0]}</div>
                    <div className="text-slate-300 font-medium">{PERSONAL_INFO.phones[1]}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase font-bold">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-bold text-sky-400 hover:underline text-base"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-sky-400 shrink-0">
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

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors shadow-sm"
                >
                  <Github className="w-4.5 h-4.5 text-sky-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors shadow-sm"
                >
                  <Linkedin className="w-4.5 h-4.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Strategic Note */}
            <div className="p-6 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sm space-y-2">
              <div className="font-bold text-sky-300 flex items-center gap-2 text-base">
                <Sparkles className="w-5 h-5" /> Professional Credibility Guarantee
              </div>
              <p className="text-slate-200 leading-relaxed font-normal">
                All claims on this website reflect Yosef Abire's actual B.Sc. Information Systems coursework, Revelo contract work, and Gamo Development Association internship experience.
              </p>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow p-6 sm:p-10 rounded-3xl border border-sky-500/40 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Message Received</h3>
                  <p className="text-base text-slate-200 max-w-md mx-auto font-normal">
                    Thank you for connecting with Yosef Abire. I will respond to your inquiry promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-100">
                      Direct Professional Inquiry
                    </h3>
                    <span className="text-xs font-mono text-slate-300 font-semibold">Response within 24h</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-200 font-bold block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-sky-500 font-normal"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-200 font-bold block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. s.jenkins@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-sky-500 font-normal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-200 font-bold block mb-1.5">
                        Your Organizational Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-sky-500 font-normal"
                      >
                        <option value="Hiring Manager / Director">Hiring Manager / Director</option>
                        <option value="CTO / Engineering Lead">CTO / Engineering Lead</option>
                        <option value="Recruiter / Talent Lead">Recruiter / Talent Lead</option>
                        <option value="Project Collaborator">Project Collaborator</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-200 font-bold block mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-sky-500 font-normal"
                      >
                        <option value="IS Manager / PM Opportunity">
                          IS Manager / PM Opportunity
                        </option>
                        <option value="Backend / Systems Role">Backend / Systems Engineering</option>
                        <option value="AI Evaluation / Data Role">AI Evaluation / Data Systems</option>
                        <option value="General Technical Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-200 font-bold block mb-1.5">
                      Project Details or Opportunity Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline the role requirements or system challenge..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-sky-500 resize-none font-normal"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-base font-bold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Executive Inquiry</span>
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

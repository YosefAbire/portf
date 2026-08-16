'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-extrabold text-white shadow-sm text-sm">
                YA
              </div>
              <span className="font-extrabold text-slate-100 text-lg tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-md font-normal leading-relaxed">
              {PERSONAL_INFO.heroSupportingText}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#case-studies"
              className="text-slate-200 hover:text-white font-semibold transition-colors"
            >
              Case Studies
            </a>
            <a href="#systems" className="text-slate-200 hover:text-white font-semibold transition-colors">
              Delivery Methodology
            </a>
            <a
              href="#architecture-lab"
              className="text-slate-200 hover:text-white font-semibold transition-colors"
            >
              Architecture Lab
            </a>
            <a href="#contact" className="text-slate-200 hover:text-white font-semibold transition-colors">
              Contact
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-700 transition-colors ml-2 shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
            <span>Strictly Verified Portfolio • Bahir Dar University B.Sc. IS</span>
          </div>

          <div>© {new Date().getFullYear()} Yosef Abire. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-sm text-xs">
                YA
              </div>
              <span className="font-bold text-slate-100 text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              {PERSONAL_INFO.heroSupportingText}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#case-studies"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Case Studies
            </a>
            <a href="#systems" className="text-slate-300 hover:text-white transition-colors">
              Delivery Methodology
            </a>
            <a
              href="#architecture-lab"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Architecture Lab
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strictly Verified CV Portfolio • Bahir Dar University B.Sc. IS</span>
          </div>

          <div>© {new Date().getFullYear()} Yosef Abire. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

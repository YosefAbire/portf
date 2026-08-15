'use client';

import React from 'react';
import { Server, Layout, Database, Cpu, Terminal, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export const TechEcosystemSection: React.FC = () => {
  const categories = [
    {
      title: 'Backend Engineering',
      icon: Server,
      skills: PERSONAL_INFO.techStack.backend,
      color: 'from-sky-500 to-blue-600',
      borderColor: 'border-sky-500/30',
    },
    {
      title: 'Frontend Architecture',
      icon: Layout,
      skills: PERSONAL_INFO.techStack.frontend,
      color: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-500/30',
    },
    {
      title: 'Data & Database Systems',
      icon: Database,
      skills: PERSONAL_INFO.techStack.data,
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500/30',
    },
    {
      title: 'AI Systems & LLM Evaluation',
      icon: Cpu,
      skills: PERSONAL_INFO.techStack.ai,
      color: 'from-cyan-500 to-sky-600',
      borderColor: 'border-cyan-500/30',
    },
    {
      title: 'Engineering & Infrastructure',
      icon: Terminal,
      skills: PERSONAL_INFO.techStack.engineering,
      color: 'from-purple-500 to-indigo-600',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'Geospatial & Spatial Analytics',
      icon: MapPin,
      skills: PERSONAL_INFO.techStack.geospatial,
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/30',
    },
  ];

  return (
    <section id="tech-stack" className="py-24 relative bg-slate-950/80 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            TECHNICAL CREDIBILITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technology Ecosystem & <span className="gradient-text-sky">Architectural Stack</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A balanced technical stack focused on system architecture, database design, backend services, and AI evaluation frameworks.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.title}
                className={`glass-panel p-6 rounded-2xl border ${cat.borderColor} hover:border-sky-500/50 transition-all duration-300 space-y-4 group`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-md`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs text-slate-300 flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/60"
                    >
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                        <span>{skill}</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        Verified
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

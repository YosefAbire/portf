'use client';

import React from 'react';
import { Network, Server, Cpu, Users, ArrowUpRight } from 'lucide-react';
import { CAPABILITY_CARDS } from '@/lib/data';

export const ExecutiveSummary: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Network: <Network className="w-6 h-6 text-sky-400" />,
    Server: <Server className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
    Users: <Users className="w-6 h-6 text-cyan-400" />,
  };

  const domainPillars = [
    'Business Requirements',
    'Information Systems',
    'Backend Architecture',
    'REST APIs',
    'Relational Databases',
    'AI Systems & LLMs',
    'Data Workflows',
    'Cross-functional Collaboration',
  ];

  return (
    <section id="summary" className="py-20 relative bg-slate-950/80 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            EXECUTIVE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            From Technical Systems to <span className="gradient-text-sky">Business Outcomes</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Bridging operational domain challenges with modern software architecture. Yosef works across the complete systems implementation spectrum to ensure technical outputs generate tangible organizational value.
          </p>

          {/* Domain Pills */}
          <div className="pt-2 flex flex-wrap gap-2">
            {domainPillars.map((pillar) => (
              <span
                key={pillar}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                {pillar}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITY_CARDS.map((card) => (
            <div
              key={card.number}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                    {iconMap[card.iconName]}
                  </div>
                  <span className="text-2xl font-mono font-extrabold text-slate-600 group-hover:text-sky-400 transition-colors">
                    {card.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-2 flex items-center justify-between">
                    {card.title}
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </h3>
                  <p className="text-xs font-semibold text-sky-400 mb-2">
                    {card.description}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Competency</span>
                <span className="text-emerald-400">Demonstrated</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

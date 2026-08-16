'use client';

import React from 'react';
import { Network, Server, Cpu, Users, ArrowUpRight } from 'lucide-react';
import { CAPABILITY_CARDS } from '@/lib/data';

export const ExecutiveSummary: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Network: <Network className="w-7 h-7 text-sky-400" />,
    Server: <Server className="w-7 h-7 text-indigo-400" />,
    Cpu: <Cpu className="w-7 h-7 text-emerald-400" />,
    Users: <Users className="w-7 h-7 text-cyan-400" />,
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
    <section id="summary" className="py-24 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
            EXECUTIVE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            From Technical Systems to <span className="gradient-text-sky">Business Outcomes</span>
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            Bridging operational domain challenges with modern software architecture. Yosef works across the complete systems implementation spectrum to ensure technical outputs generate tangible organizational value.
          </p>

          {/* Domain Pills */}
          <div className="pt-3 flex flex-wrap gap-2.5">
            {domainPillars.map((pillar) => (
              <span
                key={pillar}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-slate-200 border border-slate-700 flex items-center gap-2 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400" />
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
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-sky-500/40 transition-colors">
                    {iconMap[card.iconName]}
                  </div>
                  <span className="text-3xl font-mono font-extrabold text-slate-500 group-hover:text-sky-400 transition-colors">
                    {card.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-2 flex items-center justify-between">
                    {card.title}
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                  </h3>
                  <p className="text-sm font-bold text-sky-400 mb-2">
                    {card.description}
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {card.detail}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm font-mono text-slate-300 font-medium">
                <span>Verified Competency</span>
                <span className="text-emerald-400 font-bold">Demonstrated</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { GraduationCap, Briefcase, Code, Award, CheckCircle2, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

export const ExperienceTimeline: React.FC = () => {
  const items = [
    {
      period: '2026 (6 Months)',
      title: 'AI Data Specialist (LLM Training & Evaluation)',
      organization: 'Revelo — Remote Contract Role',
      type: 'Contract Role',
      icon: Briefcase,
      color: 'from-emerald-500 to-teal-600',
      highlights: [
        'Evaluated and refined Large Language Model (LLM) outputs to improve accuracy, reasoning, and alignment.',
        'Designed high-signal prompts and instruction datasets for model fine-tuning and benchmarking.',
        'Conducted systematic error analysis detecting hallucinations, bias, and instruction drift.',
        'Contributed to human-in-the-loop (HITL) feedback pipelines for continuous model optimization.',
      ],
    },
    {
      period: '2025–2026',
      title: 'HR Management System Developer',
      organization: 'Gamo Development Association',
      type: 'Internship',
      icon: Briefcase,
      color: 'from-sky-500 to-indigo-600',
      highlights: [
        'Collaborated with administrative stakeholders to gather operational requirements and model HR workflows.',
        'Developed core backend services for employee records, attendance tracking, and automated reporting.',
        'Designed normalized relational database schemas ensuring fast data storage and retrieval.',
      ],
    },
    {
      period: '2025–2026',
      title: 'Marketplace AI Agent & E-commerce Architect',
      organization: 'Bahir Dar University',
      type: 'Personal Projects',
      icon: Code,
      color: 'from-indigo-500 to-purple-600',
      highlights: [
        'Built an AI-powered marketplace assistant for automated product discovery, recommendations, and filtering.',
        'Designed REST API microservices and normalized database schemas for e-commerce transactions.',
        'Integrated multi-source data processing pipelines connecting marketplace components.',
      ],
    },
    {
      period: '2023–2026',
      title: 'AgroGebeya Lead Developer (Final Year Project)',
      organization: 'Bahir Dar University',
      type: 'Academic Project',
      icon: Code,
      color: 'from-amber-500 to-orange-600',
      highlights: [
        'Built a farmer-to-market digital marketplace enabling direct trade and reducing dependency on intermediaries.',
        'Developed real-time price tracking backend engine to improve regional market transparency.',
        'Designed inventory and order management APIs using Python and PostgreSQL database systems.',
      ],
    },
    {
      period: '2023–2026',
      title: 'Bachelor of Science in Information Systems',
      organization: 'Bahir Dar University',
      type: 'Education',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-600',
      highlights: [
        'Core focus on Information Systems Architecture, Database Management, System Analysis, and Software Engineering.',
        'Graduating B.Sc. degree in Information Systems (2026).',
        'Practical emphasis on enterprise workflow digitization, system modeling, and data pipelines.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
            VERIFIED EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Professional Experience & <span className="gradient-text-sky">Education</span>
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            Strictly documented trajectory grounded in facts from Yosef Abire's academic background and technical contract history.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[20px] top-2 w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md border-2 border-[#0A0E17] group-hover:scale-110 transition-transform`}
                >
                  <IconComp className="w-4.5 h-4.5" />
                </div>

                {/* Card Container */}
                <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-all duration-300 space-y-3.5 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3.5">
                    <div>
                      <span className="text-xs font-mono uppercase font-extrabold text-sky-400">
                        {item.type}
                      </span>
                      <h3 className="text-xl font-bold text-slate-100 mt-0.5">{item.title}</h3>
                      <div className="text-sm text-slate-200 font-semibold mt-0.5">{item.organization}</div>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-slate-900 text-slate-200 border border-slate-700 shrink-0 self-start sm:self-auto shadow-sm">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-sm sm:text-base text-slate-200 flex items-start gap-2.5 font-normal">
                        <CheckCircle2 className="w-4.5 h-4.5 text-sky-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

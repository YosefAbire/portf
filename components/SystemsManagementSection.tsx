'use client';

import React, { useState } from 'react';
import {
  FileCheck,
  Calendar,
  Layers,
  ShieldAlert,
  MessageSquare,
  Rocket,
  ChevronRight,
  HelpCircle,
  FolderCheck,
  Sparkles,
  Users,
  AlertOctagon,
  ArrowRight,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import {
  LIFECYCLE_STAGES,
  RISK_CATEGORIES,
  STAKEHOLDER_GROUPS,
  LifecycleStage,
  RiskCategory,
  StakeholderGroup,
} from '@/lib/data';

export const SystemsManagementSection: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>(LIFECYCLE_STAGES[0].id);
  const [selectedRiskCategory, setSelectedRiskCategory] = useState<string>(RISK_CATEGORIES[0].id);
  const [selectedStakeholderId, setSelectedStakeholderId] = useState<string>(STAKEHOLDER_GROUPS[0].id);

  const activeStage = LIFECYCLE_STAGES.find((s) => s.id === selectedStageId) || LIFECYCLE_STAGES[0];
  const activeRisk = RISK_CATEGORIES.find((r) => r.id === selectedRiskCategory) || RISK_CATEGORIES[0];
  const activeStakeholder =
    STAKEHOLDER_GROUPS.find((sg) => sg.id === selectedStakeholderId) || STAKEHOLDER_GROUPS[0];

  const corePillars = [
    {
      num: '01',
      title: 'Requirements',
      desc: 'Understand the business problem before designing the technology.',
      detail:
        'Engage directly with administrative and operational leads to model true workflow bottlenecks before committing code.',
      icon: FileCheck,
      color: 'from-sky-500 to-cyan-500',
    },
    {
      num: '02',
      title: 'Planning',
      desc: 'Break complex initiatives into manageable components and dependencies.',
      detail:
        'Structure work breakdown structures (WBS) with clear critical paths, dependency constraints, and incremental milestones.',
      icon: Calendar,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      num: '03',
      title: 'Architecture',
      desc: 'Design systems around scalability, maintainability, and security.',
      detail:
        'Enforce decoupled REST services, 3NF database normalization, and explicit contract boundaries between frontend and backend.',
      icon: Layers,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      num: '04',
      title: 'Risk',
      desc: 'Identify technical, operational, data, and dependency risks early.',
      detail:
        'Maintain a continuous risk matrix capturing latency bottlenecks, connectivity constraints, and data integrity vulnerabilities.',
      icon: ShieldAlert,
      color: 'from-rose-500 to-amber-500',
    },
    {
      num: '05',
      title: 'Communication',
      desc: 'Translate technical complexity into clear stakeholder language.',
      detail:
        'Adapt messaging across executive summaries, business process maps, and engineering API specifications.',
      icon: MessageSquare,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      num: '06',
      title: 'Delivery',
      desc: 'Focus on measurable outcomes rather than simply completing tasks.',
      detail:
        'Track post-deployment telemetry, user adoption rates, and operational time savings as true indicators of project success.',
      icon: Rocket,
      color: 'from-emerald-400 to-green-500',
    },
  ];

  return (
    <section id="systems" className="py-24 relative bg-slate-950/90 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
            METHODOLOGY & ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            How I Approach <span className="gradient-text-sky">Technology Delivery</span>
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            A structured Information Systems delivery methodology combining business discovery, rigorous architecture, proactive risk management, and stakeholder alignment.
          </p>
        </div>

        {/* Part A: 6 Core Delivery Pillars */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-sky-400" /> Six Core Areas of Technology Management
            </h3>
            <span className="text-xs sm:text-sm font-mono text-slate-300 font-semibold">Professional Methodology</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.num}
                  className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-all duration-300 space-y-4 group shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold shadow-md`}
                    >
                      <IconComp className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-2xl font-mono font-extrabold text-slate-500 group-hover:text-sky-400 transition-colors">
                      {p.num}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-1.5">
                      {p.title}
                    </h4>
                    <p className="text-sm font-bold text-sky-400 mb-2">{p.desc}</p>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">{p.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part B: Interactive 10-Stage Project Lifecycle Explorer */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs sm:text-sm font-mono font-bold text-sky-400 uppercase tracking-wider mb-1">
                INTERACTIVE SYSTEMS LIFECYCLE
              </div>
              <h3 className="text-2xl font-extrabold text-slate-100">
                10-Stage Project Execution Model
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-mono text-slate-300 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-700 font-semibold">
              Click any stage below to inspect execution details
            </span>
          </div>

          {/* Stepper Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar">
            {LIFECYCLE_STAGES.map((s) => {
              const isActive = s.id === selectedStageId;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedStageId(s.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all whitespace-nowrap flex items-center gap-2 border ${
                    isActive
                      ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/25'
                      : 'bg-slate-900 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span className="opacity-80">{s.step}</span>
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspector Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-sky-500/40 shadow-xl">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-md text-xs sm:text-sm font-mono font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  STAGE {activeStage.step}
                </span>
                <h4 className="text-xl font-bold text-slate-100">{activeStage.name}</h4>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {activeStage.objective}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm space-y-1.5">
                <span className="text-xs font-mono text-sky-400 uppercase font-bold block">
                  Demonstrated Experience Context
                </span>
                <p className="text-slate-200 italic font-medium">{activeStage.experienceContext}</p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <h5 className="text-xs sm:text-sm font-mono font-bold text-amber-400 uppercase flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5" /> Key Discovery Questions
              </h5>
              <ul className="space-y-2.5">
                {activeStage.questions.map((q, idx) => (
                  <li key={idx} className="text-sm text-slate-200 flex items-start gap-2 font-normal">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-3 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <h5 className="text-xs sm:text-sm font-mono font-bold text-emerald-400 uppercase flex items-center gap-2">
                <FolderCheck className="w-4.5 h-4.5" /> Typical Phase Outputs
              </h5>
              <ul className="space-y-2.5">
                {activeStage.outputs.map((out, idx) => (
                  <li key={idx} className="text-sm text-slate-200 flex items-start gap-2 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Part C: Risk Management Framework Matrix */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs sm:text-sm font-mono font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <AlertOctagon className="w-4.5 h-4.5" /> GOVERNANCE & CONTROL
              </div>
              <h3 className="text-2xl font-extrabold text-slate-100">
                My Risk Management Framework
              </h3>
            </div>

            {/* Workflow Flow pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950 p-2.5 rounded-xl border border-slate-700 font-semibold">
              <span className="text-rose-400 font-bold">Identify</span>
              <span>→</span>
              <span className="text-amber-400 font-bold">Assess</span>
              <span>→</span>
              <span className="text-sky-400 font-bold">Prioritize</span>
              <span>→</span>
              <span className="text-indigo-400 font-bold">Mitigate</span>
              <span>→</span>
              <span className="text-emerald-400 font-bold">Monitor</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Category Selector Side Menu */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-mono text-slate-400 uppercase font-bold block mb-1">
                Select Risk Category
              </span>
              {RISK_CATEGORIES.map((r) => {
                const isActive = r.id === selectedRiskCategory;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRiskCategory(r.id)}
                    className={`w-full p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 border-rose-500/80 text-white font-bold shadow-md'
                        : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{r.category}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-rose-400' : 'text-slate-500'}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Risk Detail Inspector */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-rose-400" />
                  {activeRisk.category}
                </h4>
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-rose-500/15 text-rose-400 border border-rose-500/30 font-bold">
                  Proactive Control
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {activeRisk.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                  <div className="text-xs sm:text-sm font-mono font-bold text-rose-400 uppercase">
                    Typical Operational Risks
                  </div>
                  <ul className="space-y-2">
                    {activeRisk.typicalRisks.map((tr, idx) => (
                      <li key={idx} className="text-sm text-slate-200 flex items-start gap-2 font-normal">
                        <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                        <span>{tr}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-emerald-400 uppercase mb-1">
                      Mitigation Strategy
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed font-normal">
                      {activeRisk.mitigationStrategy}
                    </p>
                  </div>
                  <div className="pt-2.5 border-t border-slate-800">
                    <div className="text-xs font-mono text-slate-400 uppercase font-bold mb-1">
                      Monitoring & Telemetry
                    </div>
                    <p className="text-sm text-slate-200 font-medium">{activeRisk.monitoringApproach}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part D: Stakeholder Management & Communication Matrix */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs sm:text-sm font-mono font-bold text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Users className="w-4.5 h-4.5" /> CROSS-FUNCTIONAL ALIGNMENT
              </div>
              <h3 className="text-2xl font-extrabold text-slate-100">
                Stakeholder Communication Map
              </h3>
            </div>
            <p className="text-sm text-slate-300 max-w-md font-medium">
              Demonstrating managerial mindset by adapting technical detail level according to stakeholder role and responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Stakeholder Selector Tabs */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {STAKEHOLDER_GROUPS.map((sg) => {
                const isActive = sg.id === selectedStakeholderId;
                return (
                  <button
                    key={sg.id}
                    onClick={() => setSelectedStakeholderId(sg.id)}
                    className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 border-sky-500/80 text-white font-bold shadow-md'
                        : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{sg.role}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-500'}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Stakeholder View */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Users className="w-5 h-5 text-sky-400" />
                  {activeStakeholder.role}
                </h4>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-sky-500/15 text-sky-400 border border-sky-500/30 font-bold">
                  {activeStakeholder.keyDeliverable}
                </span>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 uppercase font-bold mb-1">
                  Primary Focus & Priorities
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {activeStakeholder.focusArea}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="text-xs sm:text-sm font-mono font-bold text-amber-400 uppercase">
                    Questions They Ask
                  </div>
                  <ul className="space-y-2">
                    {activeStakeholder.primaryQuestions.map((pq, idx) => (
                      <li key={idx} className="text-sm text-slate-200 flex items-start gap-2 font-normal">
                        <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                        <span>{pq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="text-xs sm:text-sm font-mono font-bold text-sky-400 uppercase">
                    Tailored Communication Strategy
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {activeStakeholder.communicationStrategy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

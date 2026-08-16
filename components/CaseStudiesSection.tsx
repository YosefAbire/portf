'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileCode,
  Users,
  Database,
  Cpu,
  Route,
  Layout,
  Workflow,
  BarChart,
  Server,
  UserCheck,
  FileText,
  Monitor,
  Globe,
  ShoppingBag,
  MessageSquare,
  Bot,
  Sliders,
  GitBranch,
  CheckSquare,
  Files,
  Terminal,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '@/lib/data';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [expandedDetail, setExpandedDetail] = useState<boolean>(true);

  const activeCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  const getIcon = (name: string) => {
    const map: Record<string, React.ReactNode> = {
      Users: <Users className="w-4 h-4 text-sky-400" />,
      Layout: <Layout className="w-4 h-4 text-cyan-400" />,
      Route: <Route className="w-4 h-4 text-indigo-400" />,
      Cpu: <Cpu className="w-4 h-4 text-emerald-400" />,
      Database: <Database className="w-4 h-4 text-purple-400" />,
      CheckCircle: <CheckCircle2 className="w-4 h-4 text-green-400" />,
      UserCheck: <UserCheck className="w-4 h-4 text-sky-400" />,
      FileText: <FileText className="w-4 h-4 text-amber-400" />,
      Workflow: <Workflow className="w-4 h-4 text-indigo-400" />,
      Server: <Server className="w-4 h-4 text-emerald-400" />,
      BarChart: <BarChart className="w-4 h-4 text-cyan-400" />,
      Monitor: <Monitor className="w-4 h-4 text-sky-400" />,
      Globe: <Globe className="w-4 h-4 text-indigo-400" />,
      ShoppingBag: <ShoppingBag className="w-4 h-4 text-purple-400" />,
      MessageSquare: <MessageSquare className="w-4 h-4 text-amber-400" />,
      Bot: <Bot className="w-4 h-4 text-sky-400" />,
      Sliders: <Sliders className="w-4 h-4 text-emerald-400" />,
      GitBranch: <GitBranch className="w-4 h-4 text-cyan-400" />,
      CheckSquare: <CheckSquare className="w-4 h-4 text-green-400" />,
      Files: <Files className="w-4 h-4 text-sky-400" />,
      Terminal: <Terminal className="w-4 h-4 text-indigo-400" />,
      RefreshCw: <RefreshCw className="w-4 h-4 text-emerald-400" />,
    };
    return map[name] || <Layers className="w-4 h-4 text-sky-400" />;
  };

  return (
    <section id="case-studies" className="py-24 relative bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
              SYSTEMS CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Architectural & <span className="gradient-text-sky">Project Case Studies</span>
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              In-depth analysis of information systems, backend microservices, digital marketplaces, and AI evaluation frameworks built by Yosef Abire.
            </p>
          </div>

          <span className="text-xs sm:text-sm font-mono font-bold text-slate-200 bg-slate-900 px-4 py-2 rounded-xl border border-slate-700 self-start md:self-auto shadow-sm">
            Showing {CASE_STUDIES.length} Verified Case Studies
          </span>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {CASE_STUDIES.map((item) => {
            const isActive = item.id === selectedCaseId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCaseId(item.id);
                  setExpandedDetail(true);
                }}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-sky-500 shadow-lg shadow-sky-500/15 scale-[1.02]'
                    : 'bg-slate-950/80 border-slate-800 hover:bg-slate-900/90 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1.5 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-400 block font-bold">
                    {item.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-100 line-clamp-2">{item.title}</h3>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300 font-mono pt-2.5 border-t border-slate-800 font-medium">
                  <span>{item.period}</span>
                  <span className={isActive ? 'text-sky-400 font-bold' : 'text-slate-400'}>
                    {isActive ? 'Active View' : 'Select'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Display */}
        <div className="glass-panel-glow p-6 sm:p-10 rounded-3xl border border-sky-500/40 space-y-8 shadow-2xl">
          {/* Top Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
                  {activeCase.tag}
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono bg-slate-900 text-slate-200 border border-slate-700 font-medium">
                  {activeCase.institution} • {activeCase.period}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight">
                {activeCase.title}
              </h3>
              <p className="text-base sm:text-lg text-sky-300 font-bold">{activeCase.subtitle}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-sm space-y-1 shrink-0 lg:w-80 shadow-md">
              <div className="text-xs font-mono text-slate-400 uppercase font-bold">
                Project Role
              </div>
              <div className="font-bold text-slate-100 text-base">{activeCase.role}</div>
            </div>
          </div>

          {/* Core Problem vs Business Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-3">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-rose-400 uppercase">
                <AlertTriangle className="w-5 h-5" /> Operational Problem & Context
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {activeCase.problem}
              </p>
              <div className="pt-3 border-t border-rose-500/20 text-xs sm:text-sm text-slate-300 font-medium">
                <strong className="text-slate-100">Context:</strong> {activeCase.context}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-emerald-400 uppercase">
                <CheckCircle2 className="w-5 h-5" /> Business Objective & Target Stakeholders
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {activeCase.businessObjective}
              </p>
              <div className="pt-3 border-t border-emerald-500/20 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                <strong className="text-slate-100 mr-1">Primary Users:</strong>
                {activeCase.users.map((u) => (
                  <span
                    key={u}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 text-xs font-semibold border border-slate-700"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* System Requirements & Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 space-y-4 p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <h4 className="text-sm font-mono font-bold text-sky-400 uppercase tracking-wide flex items-center gap-2">
                <FileCode className="w-5 h-5" /> Key System Requirements
              </h4>
              <ul className="space-y-2.5">
                {activeCase.requirements.map((req, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-slate-200 flex items-start gap-2.5 font-normal">
                    <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-4 p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <h4 className="text-sm font-mono font-bold text-indigo-400 uppercase tracking-wide flex items-center gap-2">
                <Workflow className="w-5 h-5" /> Architectural System Approach
              </h4>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {activeCase.systemApproach}
              </p>
              <div className="pt-3">
                <div className="text-xs font-mono text-slate-400 mb-2 font-bold uppercase">Technology Stack</div>
                <div className="flex flex-wrap gap-2">
                  {activeCase.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs sm:text-sm font-bold bg-slate-900 text-sky-300 border border-sky-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* System Architecture Flow Diagram */}
          <div className="p-6 rounded-2xl bg-slate-950/95 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-sky-400" />
                <h4 className="text-sm font-mono font-bold text-slate-200 uppercase">
                  Architecture Flow Diagram
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400 font-medium">
                End-to-End System Node Topology
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {activeCase.architectureNodes.map((node, idx) => (
                <div
                  key={node.name}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 transition-colors flex flex-col justify-between space-y-2 relative group shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-sky-400 font-extrabold">0{idx + 1}</span>
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-700">
                      {getIcon(node.iconName)}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-100 mb-1">{node.name}</h5>
                    <p className="text-xs text-slate-300 line-clamp-2 font-normal">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decisions, Risks, Implementation & Outcome Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Decisions */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <h4 className="text-sm font-mono font-bold text-amber-400 uppercase flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> Engineering & Architectural Decisions
              </h4>
              <ul className="space-y-2.5">
                {activeCase.keyDecisions.map((dec, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-slate-200 flex items-start gap-2.5 font-normal">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Constraints & Risks */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <h4 className="text-sm font-mono font-bold text-rose-400 uppercase flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Risks & Operational Constraints
              </h4>
              <ul className="space-y-2.5">
                {activeCase.risksConstraints.map((r, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-slate-200 flex items-start gap-2.5 font-normal">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcome & Lessons Learned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
              <h4 className="text-sm font-mono font-bold text-emerald-400 uppercase flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> System Outcome & Business Value
              </h4>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
                {activeCase.outcome}
              </p>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-2">
              <h4 className="text-sm font-mono font-bold text-indigo-400 uppercase flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Key Architectural Lesson Learned
              </h4>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed italic font-normal">
                "{activeCase.lessonsLearned}"
              </p>
            </div>
          </div>

          {/* Special Management / AI Perspective Panels */}
          {activeCase.managementPerspective && (
            <div className="p-6 rounded-2xl bg-slate-900 border border-sky-500/40 space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-sky-400" />
                <h4 className="text-base font-bold text-sky-300 uppercase tracking-wide">
                  {activeCase.managementPerspective.title}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCase.managementPerspective.points.map((pt) => (
                  <div key={pt.label} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="text-sm font-bold text-sky-400">{pt.label}</div>
                    <p className="text-sm text-slate-200 leading-relaxed font-normal">{pt.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCase.aiPerspective && (
            <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/40 space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-6 h-6 text-emerald-400" />
                <h4 className="text-base font-bold text-emerald-300 uppercase tracking-wide">
                  {activeCase.aiPerspective.title}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCase.aiPerspective.points.map((pt) => (
                  <div key={pt.label} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="text-sm font-bold text-emerald-400">{pt.label}</div>
                    <p className="text-sm text-slate-200 leading-relaxed font-normal">{pt.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCase.whyItMattersMgmt && (
            <div className="p-6 rounded-2xl bg-slate-900 border border-indigo-500/40 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-400" />
                <h4 className="text-base font-bold text-indigo-300 uppercase tracking-wide">
                  {activeCase.whyItMattersMgmt.title}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCase.whyItMattersMgmt.points.map((pt) => (
                  <div key={pt.label} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="text-sm font-bold text-indigo-400">{pt.label}</div>
                    <p className="text-sm text-slate-200 leading-relaxed font-normal">{pt.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

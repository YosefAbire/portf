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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              SYSTEMS CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Architectural & <span className="gradient-text-sky">Project Case Studies</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              In-depth analysis of information systems, backend microservices, digital marketplaces, and AI evaluation frameworks built by Yosef Abire.
            </p>
          </div>

          <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start md:self-auto">
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
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-sky-500/70 shadow-lg shadow-sky-500/10 scale-[1.02]'
                    : 'bg-slate-950/60 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1 mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 block font-semibold">
                    {item.tag}
                  </span>
                  <h3 className="text-xs font-bold text-slate-100 line-clamp-2">{item.title}</h3>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-2 border-t border-slate-800/60">
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
        <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-sky-500/30 space-y-8">
          {/* Top Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  {activeCase.tag}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                  {activeCase.institution} • {activeCase.period}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                {activeCase.title}
              </h3>
              <p className="text-sm text-sky-300 font-medium">{activeCase.subtitle}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs space-y-1 shrink-0 lg:w-72">
              <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                Project Role
              </div>
              <div className="font-bold text-slate-100">{activeCase.role}</div>
            </div>
          </div>

          {/* Core Problem vs Business Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 uppercase">
                <AlertTriangle className="w-4 h-4" /> Operational Problem & Context
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCase.problem}
              </p>
              <div className="pt-2 border-t border-rose-500/10 text-xs text-slate-400">
                <strong className="text-slate-300">Context:</strong> {activeCase.context}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                <CheckCircle2 className="w-4 h-4" /> Business Objective & Target Stakeholders
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCase.businessObjective}
              </p>
              <div className="pt-2 border-t border-emerald-500/10 flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                <strong className="text-slate-300 mr-1">Primary Users:</strong>
                {activeCase.users.map((u) => (
                  <span
                    key={u}
                    className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px] border border-slate-800"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* System Requirements & Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 space-y-4 p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wide flex items-center gap-2">
                <FileCode className="w-4 h-4" /> Key System Requirements
              </h4>
              <ul className="space-y-2">
                {activeCase.requirements.map((req, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-4 p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wide flex items-center gap-2">
                <Workflow className="w-4 h-4" /> Architectural System Approach
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCase.systemApproach}
              </p>
              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 mb-2">Technology Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeCase.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-sky-300 border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* System Architecture Flow Diagram */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <h4 className="text-xs font-mono font-bold text-slate-200 uppercase">
                  Architecture Flow Diagram
                </h4>
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                End-to-End System Node Topology
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {activeCase.architectureNodes.map((node, idx) => (
                <div
                  key={node.name}
                  className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-colors flex flex-col justify-between space-y-2 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-sky-400 font-bold">0{idx + 1}</span>
                    <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                      {getIcon(node.iconName)}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-100 mb-1">{node.name}</h5>
                    <p className="text-[10px] text-slate-400 line-clamp-2">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decisions, Risks, Implementation & Outcome Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Decisions */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Engineering & Architectural Decisions
              </h4>
              <ul className="space-y-2">
                {activeCase.keyDecisions.map((dec, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Constraints & Risks */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono font-bold text-rose-400 uppercase flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Risks & Operational Constraints
              </h4>
              <ul className="space-y-2">
                {activeCase.risksConstraints.map((r, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcome & Lessons Learned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> System Outcome & Business Value
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {activeCase.outcome}
              </p>
            </div>

            <div className="lg:col-span-6 p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-2">
              <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Key Architectural Lesson Learned
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                "{activeCase.lessonsLearned}"
              </p>
            </div>
          </div>

          {/* Special Management / AI Perspective Panels */}
          {activeCase.managementPerspective && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-sky-500/40 space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sky-400" />
                <h4 className="text-sm font-bold text-sky-300 uppercase tracking-wide">
                  {activeCase.managementPerspective.title}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCase.managementPerspective.points.map((pt) => (
                  <div key={pt.label} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-sky-400">{pt.label}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{pt.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCase.aiPerspective && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-emerald-500/40 space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wide">
                  {activeCase.aiPerspective.title}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCase.aiPerspective.points.map((pt) => (
                  <div key={pt.label} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-emerald-400">{pt.label}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{pt.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCase.whyItMattersMgmt && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-indigo-500/40 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wide">
                  {activeCase.whyItMattersMgmt.title}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCase.whyItMattersMgmt.points.map((pt) => (
                  <div key={pt.label} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-indigo-400">{pt.label}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{pt.detail}</p>
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

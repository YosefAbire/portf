'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  FileText,
  Briefcase,
  Layers,
  Database,
  Cpu,
  Users,
  CheckCircle2,
  Workflow,
  Sparkles,
  Server,
  Activity,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [selectedNode, setSelectedNode] = useState<number>(2); // Default selected node

  const systemsFlow = [
    {
      step: '01',
      title: 'Business',
      icon: Briefcase,
      desc: 'Market gaps, operational goals, & business objectives',
      details:
        'Identifying structural challenges, economic incentives, and operational inefficiencies across enterprise and marketplace domains.',
      color: 'from-amber-500 to-orange-500',
      badge: 'Strategy & Objectives',
    },
    {
      step: '02',
      title: 'Requirements',
      icon: Workflow,
      desc: 'Process mapping, use cases, & stakeholder needs',
      details:
        'Translating complex business processes and user expectations into rigorous functional specifications and data governance boundaries.',
      color: 'from-sky-500 to-cyan-500',
      badge: 'Requirements Eng.',
    },
    {
      step: '03',
      title: 'Information Systems',
      icon: Layers,
      desc: 'System logic, workflow engines, & RBAC rules',
      details:
        'Structuring information flows, role-based access controllers, and transaction state machines for seamless operational integrity.',
      color: 'from-indigo-500 to-blue-500',
      badge: 'Systems Architecture',
    },
    {
      step: '04',
      title: 'Architecture',
      icon: Server,
      desc: 'Decoupled services, API endpoints, & database models',
      details:
        'Designing 3NF relational schemas, scalable Python/Node REST microservices, and reliable integration contracts.',
      color: 'from-purple-500 to-indigo-600',
      badge: 'Backend & Data',
    },
    {
      step: '05',
      title: 'Data + APIs + AI',
      icon: Cpu,
      desc: 'LLM evaluation, AI agents, & data pipelines',
      details:
        'Integrating AI discovery agents, prompt-completion benchmarks, hallucination detection, and spatial database pipelines.',
      color: 'from-emerald-500 to-teal-500',
      badge: 'AI & Data Integration',
    },
    {
      step: '06',
      title: 'Users / Operations',
      icon: Users,
      desc: 'Farmer marketplace, HR portals, & mobile adoption',
      details:
        'Deploying intuitive web interfaces that lower training barriers for domain users, HR administrators, and retailers.',
      color: 'from-cyan-500 to-blue-600',
      badge: 'Operational Adoption',
    },
    {
      step: '07',
      title: 'Business Outcomes',
      icon: CheckCircle2,
      desc: 'Market transparency, digitized records, & efficiency',
      details:
        'Delivering measurable results: price transparency for farmers, automated administrative HR logs, and high-accuracy AI reasoning.',
      color: 'from-emerald-400 to-green-500',
      badge: 'Impact & ROI',
    },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Subtle Executive Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Executive Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow & Status */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30 tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-sky-400" />
                {PERSONAL_INFO.eyebrow}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                Open for Systems & Tech Roles
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
              Building technology systems that connect{' '}
              <span className="gradient-text-sky">business, people, data,</span> and{' '}
              <span className="gradient-text-emerald">decisions.</span>
            </h1>

            {/* Position Badge & Subtitle */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm space-y-2.5 shadow-lg">
              <div className="text-xs sm:text-sm font-mono font-bold text-sky-400 uppercase tracking-wider">
                Professional Positioning
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-100">
                {PERSONAL_INFO.positioningTitle}
              </div>
              <p className="text-base text-slate-200 leading-relaxed font-normal">
                {PERSONAL_INFO.heroSupportingText}
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm sm:text-base font-semibold text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span>Information Systems Architecture</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span>Backend API & DB Engineering</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span>AI Agent & LLM Evaluation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span>Stakeholder Requirement Bridge</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#case-studies"
                className="px-6 py-3.5 rounded-xl text-base font-bold bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl text-base font-bold bg-slate-900 hover:bg-slate-800 text-sky-400 border border-sky-500/40 hover:border-sky-400 transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-5 h-5 text-sky-400" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Right Side: Sophisticated Systems Architecture Flow Visualizer */}
          <div className="lg:col-span-6 relative">
            <div className="glass-panel-glow p-6 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs sm:text-sm font-mono text-slate-300 font-bold">
                    SYSTEMS_THINKING_ARCHITECTURE.sys
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-500/15 text-sky-400 border border-sky-500/30 flex items-center gap-1.5 font-bold">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> Dynamic Pipeline
                </span>
              </div>

              {/* Node Flow Visualizer */}
              <div className="space-y-3 relative">
                {systemsFlow.map((node, index) => {
                  const IconComponent = node.icon;
                  const isSelected = selectedNode === index;
                  return (
                    <div
                      key={node.step}
                      onClick={() => setSelectedNode(index)}
                      className={`group cursor-pointer transition-all duration-200 p-3.5 rounded-xl border relative ${
                        isSelected
                          ? 'bg-slate-800/90 border-sky-500/80 shadow-md shadow-sky-500/20 scale-[1.01]'
                          : 'bg-slate-900/80 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                      }`}
                    >
                      {/* Connection Line */}
                      {index < systemsFlow.length - 1 && (
                        <div className="absolute left-7 top-10 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/40 to-slate-800 z-0 pointer-events-none" />
                      )}

                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white shadow-sm shrink-0 font-bold text-sm`}
                          >
                            <IconComponent className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono text-sky-400 font-extrabold">
                                {node.step}
                              </span>
                              <h4 className="text-sm sm:text-base font-bold text-slate-100">{node.title}</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 font-medium">{node.desc}</p>
                          </div>
                        </div>

                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-200 border border-slate-700 group-hover:border-sky-500/40 font-semibold hidden sm:inline-block">
                          {node.badge}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Node Details Drawer */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950/95 border border-sky-500/40 transition-all">
                <div className="flex items-center justify-between text-sm font-bold text-sky-400 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Layer {systemsFlow[selectedNode].step}: {systemsFlow[selectedNode].title} Deep-Dive
                  </span>
                  <span className="text-xs font-mono text-slate-400">Click any stage above</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  {systemsFlow[selectedNode].details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

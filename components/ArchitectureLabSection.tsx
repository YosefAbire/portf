'use client';

import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  Database,
  Globe,
  Server,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import { ARCHITECTURE_MODELS, ArchitectureModel } from '@/lib/data';

export const ArchitectureLabSection: React.FC = () => {
  const [selectedModelId, setSelectedModelId] = useState<string>(ARCHITECTURE_MODELS[0].id);
  const [selectedNodeId, setSelectedNodeId] = useState<string>(ARCHITECTURE_MODELS[0].nodes[0].id);

  const activeModel =
    ARCHITECTURE_MODELS.find((m) => m.id === selectedModelId) || ARCHITECTURE_MODELS[0];
  const activeNode =
    activeModel.nodes.find((n) => n.id === selectedNodeId) || activeModel.nodes[0];

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'client':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'api':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'logic':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'data':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'ai':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="architecture-lab" className="py-24 relative bg-[#0A0E17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              INTERACTIVE ARCHITECTURE LAB
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Systems Architecture <span className="gradient-text-sky">Playground</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Explore multi-tier Information System architectures, backend API gateways, database normalization layers, and AI pipeline topographies designed by Yosef Abire.
            </p>
          </div>

          <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start md:self-auto">
            Click any node below to inspect technical specifications
          </span>
        </div>

        {/* Model Tabs */}
        <div className="flex flex-wrap gap-2.5 border-b border-slate-800 pb-4">
          {ARCHITECTURE_MODELS.map((m) => {
            const isActive = m.id === selectedModelId;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedModelId(m.id);
                  setSelectedNodeId(m.nodes[0].id);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>{m.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Lab Workspace */}
        <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-sky-500/30 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-1">{activeModel.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300">{activeModel.description}</p>
          </div>

          {/* Node Topology Canvas */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
                <Share2 className="w-4 h-4" /> System Topology & Inter-Node Connections
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                {activeModel.nodes.length} Component Nodes
              </span>
            </div>

            {/* Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {activeModel.nodes.map((node) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-slate-900 border-sky-400 shadow-lg shadow-sky-500/20 scale-[1.02]'
                        : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border ${getNodeColor(
                          node.type
                        )}`}
                      >
                        {node.type}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />}
                    </div>
                    <h4 className="text-xs font-bold text-slate-100 mb-1">{node.label}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{node.summary}</p>
                  </div>
                );
              })}
            </div>

            {/* Connection Data Flow Summary */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">
                Inter-Service Data Flow Routes
              </div>
              <div className="flex flex-wrap gap-2">
                {activeModel.connections.map((c, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 text-[11px] border border-slate-800 flex items-center gap-1.5 font-mono"
                  >
                    <span className="text-sky-400">{c.from}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                    <span className="text-emerald-400">{c.to}</span>
                    <span className="text-slate-500 text-[10px]">({c.label})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Node Technical Inspector Drawer */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-sky-500/40 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-sky-400" />
                <h4 className="text-sm font-bold text-sky-300">
                  Node Inspector: {activeNode.label}
                </h4>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded text-xs font-mono uppercase font-bold border ${getNodeColor(
                  activeNode.type
                )}`}
              >
                {activeNode.type} layer
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-200">{activeNode.summary}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{activeNode.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

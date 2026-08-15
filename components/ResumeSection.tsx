'use client';

import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, Globe, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';

interface ResumeSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Top Header Actions */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-400" />
            <h2 className="text-sm font-bold text-slate-100 uppercase tracking-wide">
              Official Executive Resume — Yosef Abire
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 print:bg-white print:text-black print:p-0 print:overflow-visible">
          {/* Header Block */}
          <div className="border-b border-slate-800 print:border-gray-300 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
                YOSEF ABIRE
              </h1>
              <div className="text-sm font-semibold text-sky-400 print:text-sky-700 mt-1">
                {PERSONAL_INFO.positioningTitle}
              </div>
              <p className="text-xs text-slate-400 print:text-gray-600 max-w-xl mt-2 leading-relaxed">
                Backend-heavy Full-Stack Engineer and Information Systems professional focused on digital marketplaces, enterprise HR systems, AI-driven platforms, and data-intensive solutions.
              </p>
            </div>

            <div className="text-xs text-slate-300 print:text-gray-700 space-y-1 font-mono shrink-0">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-400 print:text-black" />
                <span>+251 984 909 329 / +251 957 425 458</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 print:text-black" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400 print:text-black" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Section: Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-sky-400 print:text-sky-800 uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2 rounded bg-slate-900 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                Information Systems Architecture
              </div>
              <div className="p-2 rounded bg-slate-900 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                Relational Database Design (3NF)
              </div>
              <div className="p-2 rounded bg-slate-900 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                RESTful API Microservices
              </div>
              <div className="p-2 rounded bg-slate-900 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                LLM Training & Evaluation
              </div>
              <div className="p-2 rounded bg-slate-900 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                Stakeholder Requirements Eng.
              </div>
              <div className="p-2 rounded bg-slate-900 print:bg-gray-100 border border-slate-800 print:border-gray-300">
                Data Pipeline Engineering
              </div>
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-sky-400 print:text-sky-800 uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-slate-200 print:text-black font-semibold">Languages, Frontend & Backend:</strong>{' '}
                Python, Java, C++, React, Next.js, TypeScript, JavaScript, Node.js, Nest.js, REST APIs
              </div>
              <div>
                <strong className="text-slate-200 print:text-black font-semibold">Data & Databases:</strong>{' '}
                PostgreSQL, Relational DB Design, Vector DB (Vector Databases), PostGIS, QGIS
              </div>
              <div>
                <strong className="text-slate-200 print:text-black font-semibold">AI & Machine Learning:</strong>{' '}
                Machine Learning Basics, LangChain Framework, LLM Output Evaluation, Prompt Curation, Dataset Design
              </div>
              <div>
                <strong className="text-slate-200 print:text-black font-semibold">Tools & Infrastructure:</strong>{' '}
                Docker Containerization, Git, GitHub, Linux, System Architecture
              </div>
            </div>
          </div>

          {/* Section: Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold text-sky-400 print:text-sky-800 uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1">
              Professional Experience
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-100 print:text-black">
                  <span>AI Data Specialist (LLM Training & Evaluation) — Remote Contract Role (Revelo)</span>
                  <span className="font-mono text-slate-400 print:text-gray-600">2026 (6 Months)</span>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-gray-700 mt-1 space-y-1">
                  <li>Evaluated and refined Large Language Model outputs for reasoning and instruction alignment.</li>
                  <li>Designed instruction datasets and prompt benchmarks for fine-tuning.</li>
                  <li>Conducted error analysis to detect hallucinations, bias, and inconsistency.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-100 print:text-black">
                  <span>HR Management System Intern — Gamo Development Association</span>
                  <span className="font-mono text-slate-400 print:text-gray-600">2025–2026</span>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-gray-700 mt-1 space-y-1">
                  <li>Gathered requirements from non-technical stakeholders to digitize HR operations.</li>
                  <li>Built backend services for employee profiles, attendance tracking, and automated reporting.</li>
                  <li>Designed normalized relational database schemas.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-sky-400 print:text-sky-800 uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1">
              Key Projects
            </h3>
            <div className="space-y-2 text-xs">
              <div>
                <strong className="text-slate-200 print:text-black">AgroGebeya — Digital Agricultural Marketplace:</strong>{' '}
                Built direct farmer-to-retailer commerce platform with real-time price tracking, inventory, and order APIs.
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">Marketplace AI Agent:</strong>{' '}
                Engineered AI decision support assistant for product discovery, filtering, and comparative specs.
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">E-commerce Platform:</strong>{' '}
                Designed backend microservices and database schemas for transactional e-commerce workflows.
              </div>
            </div>
          </div>

          {/* Section: Education & Certification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div className="space-y-2">
              <h3 className="font-mono font-bold text-sky-400 print:text-sky-800 uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1">
                Education
              </h3>
              <div className="font-bold text-slate-100 print:text-black">
                Bachelor of Science in Information Systems
              </div>
              <div className="text-slate-400 print:text-gray-600 font-mono">
                Bahir Dar University (2023–2026)
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-mono font-bold text-sky-400 print:text-sky-800 uppercase tracking-wider border-b border-slate-800 print:border-gray-300 pb-1">
                Certification & Languages
              </h3>
              <div>
                <strong className="text-slate-200 print:text-black">Certification:</strong> CCNA: Introduction to Networks
              </div>
              <div>
                <strong className="text-slate-200 print:text-black">Languages:</strong> English (Advanced), Amharic (Fluent), Gamogna (Fluent)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

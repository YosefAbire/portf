'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ExecutiveSummary } from '@/components/ExecutiveSummary';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { SystemsManagementSection } from '@/components/SystemsManagementSection';
import { ArchitectureLabSection } from '@/components/ArchitectureLabSection';
import { TechEcosystemSection } from '@/components/TechEcosystemSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ResumeSection } from '@/components/ResumeSection';

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0E17] text-slate-100 relative">
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />

      <ExecutiveSummary />

      <CaseStudiesSection />

      <SystemsManagementSection />

      <ArchitectureLabSection />

      <TechEcosystemSection />

      <ExperienceTimeline />

      <ContactSection />

      <Footer />

      <ResumeSection
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}

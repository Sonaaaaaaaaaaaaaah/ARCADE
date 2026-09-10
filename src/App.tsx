import React, { useState } from 'react';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { SkipLink } from './components/accessibility/SkipLink';
import { AccessibilityPanel } from './components/accessibility/AccessibilityPanel';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { PathwayFinder } from './components/pathway/PathwayFinder';
import { GlanceSection } from './components/stats/GlanceSection';
import { IdeaToImpact } from './components/innovation/IdeaToImpact';
import { InnovationTimeline } from './components/innovation/InnovationTimeline';
import { AESSection } from './components/aes/AESSection';
import { ProgrammeExplorer } from './components/academics/ProgrammeExplorer';
import { CampusExperience } from './components/campus/CampusExperience';
import { StudentLifeCarousel } from './components/campus/StudentLifeCarousel';
import { ResearchGlobal } from './components/research/ResearchGlobal';
import { CampusPulse } from './components/pulse/CampusPulse';
import { AdmissionsCTA } from './components/admissions/AdmissionsCTA';
import { ApplicationModal } from './components/admissions/ApplicationModal';
import { Footer } from './components/common/Footer';

export const AppContent: React.FC = () => {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProgrammeForApply, setSelectedProgrammeForApply] = useState('B.Tech Computer Science & Engineering');

  const handleOpenApply = (progName?: string) => {
    if (progName) {
      setSelectedProgrammeForApply(progName);
    }
    setApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* 11. Accessible Skip to Content Landmark */}
      <SkipLink />

      {/* Header Navigation */}
      <Navbar onOpenApply={() => handleOpenApply()} />

      {/* Semantic Main Landmark */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 1. Hero Section with Interactive Hotspots */}
        <HeroSection onOpenApply={() => handleOpenApply()} />

        {/* 2. "Find Your AJCE" Interactive Pathway Finder */}
        <PathwayFinder />

        {/* 3. AJCE at a Glance Data Visualization */}
        <GlanceSection />

        {/* 4. "From Idea to Impact" 6-Stage Journey */}
        <IdeaToImpact />

        {/* 5. 25 Years of Innovation Timeline */}
        <InnovationTimeline />

        {/* 6. AES: "Built Here. Used Here." Technology Section */}
        <AESSection />

        {/* 7. Academic Programmes Explorer */}
        <ProgrammeExplorer onApplyProgramme={(name) => handleOpenApply(name)} />

        {/* 8. Campus Experience: "One Campus. Many Worlds." */}
        <CampusExperience />

        {/* 9. Student Life & Guilds Carousel */}
        <StudentLifeCarousel />

        {/* 10. Research & Global Alliances */}
        <ResearchGlobal />

        {/* 12. Dynamic Campus Pulse Feed */}
        <CampusPulse />

        {/* 13. Admissions CTA & Pathway Selection */}
        <AdmissionsCTA onOpenApply={(prog) => handleOpenApply(prog)} />
      </main>

      {/* 14. Structured Institutional Footer */}
      <Footer />

      {/* 11. Floating Accessibility Assistant ("AJCE ACCESS") */}
      <AccessibilityPanel />

      {/* Admissions Enquiry & Prospectus Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        initialProgramme={selectedProgrammeForApply}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <AppContent />
    </AccessibilityProvider>
  );
};

export default App;

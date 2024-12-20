"use client";
import { navItems } from "./utils/Constants/NavItem";
import { FloatingNav } from "./components/ui/floating-navbar";
import { HeroSection } from "./Home/HeroSection";
import { TransformingSection } from "./Home/TransformingSection/TransformingSection";
import ExpertiseSection from "./Home/OurExpertiseHome/OurExpertise";
import EnterpriseFeatures from "./Home/EnterprisesFeature";
import TeamSection from "./Home/AboutTeamSectionHomePage";
import WhatNewAtNeuralHQ from "./Home/WhatNewAtNeuralHQ";
import Footer from "./Footer";
import { TextRevealByWordDiv } from "./components/ui/text-reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <div className="relative">
        <TextRevealByWordDiv />
        <div className="relative z-20">
          <TransformingSection />
        </div>
      </div>
      <ExpertiseSection />
      <EnterpriseFeatures />
      <TeamSection />
      <WhatNewAtNeuralHQ />
      <Footer />
    </main>
  );
}

{
}

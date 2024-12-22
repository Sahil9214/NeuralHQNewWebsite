/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useLocomotiveScroll } from "./context/LocomotiveScrollContext";
import OurSolution from "./Home/OurSolutions/OurSolution";
export default function Home() {
  const { scroll } = useLocomotiveScroll();
  return (
    <main className="min-h-screen" data-scroll-container>
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <OurSolution />
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

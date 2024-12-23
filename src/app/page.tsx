/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { navItems } from "./utils/Constants/NavItem";
import { FloatingNav } from "./components/ui/floating-navbar";
import { HeroSection } from "./Home/HeroSection";
import { TransformingSection } from "./Home/TransformingSection/TransformingSection";
import EnterpriseFeatures from "./Home/EnterprisesFeature";
import TeamSection from "./Home/AboutTeamSectionHomePage";
import WhatNewAtNeuralHQ from "./Home/WhatNewAtNeuralHQ";
import Footer from "./Footer";
import { TextRevealByWordDiv } from "./components/ui/text-reveal";
import { useLocomotiveScroll } from "./context/LocomotiveScrollContext";
import OurSolution from "./Home/OurSolutions/OurSolution";
import OurExpertise from "./Home/OurExpertiseHome/OurExpertise";
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
      <OurExpertise />
      <EnterpriseFeatures />
      <TeamSection />
      <WhatNewAtNeuralHQ />
      <Footer />
    </main>
  );
}

{
}

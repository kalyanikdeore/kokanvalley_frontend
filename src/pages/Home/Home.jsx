import React from "react";
import HeroSection from "./HeroSec";
import CountSection from "./CountSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "./TestimonialsSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <CountSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;

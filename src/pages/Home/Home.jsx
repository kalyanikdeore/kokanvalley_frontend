import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSec";
import CountSection from "./CountSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "./TestimonialsSection";
// import PopupForm from "../components/PopupForm"; 
import PopupForm from "../../components/PopUp/PopupForm";
function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <HeroSection />
      {/* <CountSection /> */}
      <AboutSection />
      {/* <Product /> */}
      <ProjectsSection />
      <TestimonialsSection />
      {/* Popup Form */}
      <PopupForm isOpen={showPopup} setIsOpen={setShowPopup} />
    </div>
  );
}

export default Home;
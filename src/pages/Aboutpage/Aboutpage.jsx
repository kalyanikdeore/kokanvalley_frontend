import React from "react";
import AboutSection from "../Home/AboutSection";
import Aboutsection from "./Aboutsection";
// import Contactform from "./Contactform";
import MissionVision from "./MissionVision";
import TeamSection from "./TeamSection";
import WhyChoose from "./WhyChoose";
function Aboutpage() {
  return (
    <div>
      <Aboutsection />
      <MissionVision />
      {/* <TeamSection/> */}
      <WhyChoose />

    </div>
  );
}

export default Aboutpage;

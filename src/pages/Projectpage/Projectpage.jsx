import React from "react";
import Projectsection from "./Projectsection";
import Map from "./Map";
import Projecttestimonial from "./Projecttestimonial";
import Aboutproject from "./Aboutproject";
// import WhyChooseUs from "./WhyChooseUs";

function Project() {
  return (
    <main className="project-page">
      <Aboutproject />
      <Projectsection />
      <Map />
      {/* <WhyChooseUs /> */}
      <Projecttestimonial />
    </main> 
  );
}

export default Project; 
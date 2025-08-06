import React from "react";
import Projectsection from "./Projectsection";
import Map from "./Map";
import Projecttestimonial from "./Projecttestimonial";
import Aboutproject from "./Aboutproject";
import WhyChooseUs from "./WhyChooseUs";
import Video from "./Video";
import Gallery from "./Gallery"
function Project() {
  return (
    <main className="project-page">
      <Aboutproject />
     
      <Map />
      <Gallery />
      <Video />
       <Projectsection /> 
      <WhyChooseUs />
      {/* {/* <Projecttestimonial /> */}
    </main> 
  );
}

export default Project; 
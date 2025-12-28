import React from "react";
import AboutWinshine from "./AboutWinshine";
import AboutFaq from "./AboutFaq";
import VisionSlider2 from "./VisionSlider2";
import AboutTeam from "./AboutTeam";
import WinshineGallery from "./WinshineGallery";
import AboutInsta from "./AboutInsta";
import AboutValues from "./AboutValues";

const AboutMaster = () => {
  return (
    <div className='max-w-screen overflow-hidden'>
      <AboutWinshine />
      <VisionSlider2 />
      {/* <AboutTeam /> */}
      <AboutValues />
      {/* <WinshineGallery/> */}
      {/* <VisionSlider slides={propertySlides} /> */}
      {/* |<AboutInsta /> */}
      <AboutFaq />
    </div>
  );
};

export default AboutMaster;

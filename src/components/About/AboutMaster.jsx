import React from "react";
import AboutWinshine from "./AboutWinshine";
import AboutFaq from "./AboutFaq";
import VisionSlider2 from "./VisionSlider2";
import AboutValues from "./AboutValues";

const AboutMaster = () => {
  return (
    <div className='max-w-screen overflow-hidden'>
      <AboutWinshine />
      <VisionSlider2 />
      <AboutValues />
      <AboutFaq />
    </div>
  );
};

export default AboutMaster;

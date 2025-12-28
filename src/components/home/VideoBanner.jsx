import React from "react";
import "./VideoBanner.css";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
const VideoBanner = () => {
  return (
    <div className=' pt-0 relative overflow-hidden min-w-full h-auto -z-9 bg-white'>
      <h1 className='sr-only'>Trusted Legal Services in Mumbai Since 1997</h1>

      <div className='w-full absolute z-10 bottom-4 md:bottom-20 px-4'>
        <div aria-hidden='true'>
          <SkewFadeInWords
            text='Trusted Legal Services in Mumbai <br /> Since 1997'
            className='text-white text-center text-xl md:text-5xl font-bold'
          />
        </div>
      </div>
      <div className='video-wrapper'>
        {/* desktop */}
        <video
          loop
          muted
          autoPlay
          playsInline
          controls={false}
          preload='metadata'
          className='hidden md:block'
        >
          <source src='/video/wandavideo.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {/* mobile view */}
        <video
          loop
          muted
          autoPlay
          playsInline
          controls={false}
          preload='metadata'
          className='md:hidden'
        >
          <source
            src='/video/wanda.mp4'
            type='video/mp4'
            className='md:hidden'
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoBanner;

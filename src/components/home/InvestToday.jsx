import React from "react";
import CardStacking from "./CardStacking";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
import CardStackingMobile from "./CardStackingMobile";

const InvestToday = () => {
  return (
    <div className='bg-[#f775890f]'>
      <div className='s_wrapper'>
        <div className='mb-8'>
          <h2 className='sr-only'>Our Leadership Team</h2>
          <div className='mb-4 text-2xl mx-auto text-center md:text-4xl font-medium text-[#040404]'>
            <SkewFadeInWords text='Our Leadership Team' />
          </div>
          <p className='mt-2 max-w-2xl mx-auto text-center text-sm text-gray-600'>
            Experience, expertise, and commitment guiding every matter
          </p>
        </div>

        <div className='hidden md:block'>
          <CardStacking />
        </div>
        <div className='md:hidden'>
          <CardStackingMobile />
        </div>
      </div>
    </div>
  );
};

export default InvestToday;

import React from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";

const AboutValues = () => {
  return (
    <div className='my-10'>
      <div className='mb-10'>
        <h2 className='mb-4 text-2xl md:text-4xl mx-auto text-center font-medium text-[#040404]'>
          <SkewFadeInWords text='Our Core Values' />
        </h2>
      </div>
      <div className='grid md:grid-cols-2 text-black    '>
        {/* ===========================================================  */}
        <div className='flex flex-col lg:!gap-y-28 md:!gap-y-28 !gap-y-10 lg:max-w-[60%] md:max-w-[60%] max-w-[85%]  mx-auto justify-center'>
          <div className='corevalues-card group'>
            <img
              src='/images/icons/integrity.png'
              alt='integrity'
              className='h-18 mb-2 transform transition-transform duration-500 group-hover:scale-x-[-1]'
            />
            <h3 className='md:text-[32px]'>
              Integrity
              {/* <span className='font-light'>Design</span> */}
            </h3>
            <div className='border-b border-b-[#000] my-4 w-[90%]'></div>
            <div>
              We practice law with uncompromising honesty, ethics, and
              accountability—earning trust that stands the test of time.
            </div>
          </div>

          <div className='flex flex-col items-end md:!items-start corevalues-card group'>
            <img
              src='/images/icons/centric.png'
              alt='Client-Centric Approach'
              className='h-18 mb-2 transform transition-transform duration-500 group-hover:scale-x-[-1]'
            />
            <h3 className='md:text-[32px]'>
              Client-Centric Approach
              {/* <span className='font-light'>Design</span> */}
            </h3>
            <div className='border-b border-b-[#000] my-4 w-[90%]'></div>
            <div className='text-end md:text-start'>
              Your concerns are our priority. We provide thoughtful,
              personalized legal solutions focused on your goals and well-being.
            </div>
          </div>
        </div>
        {/* ==================================================== */}
        <div className='flex flex-col lg:!gap-y-28 md:!gap-y-28 !gap-y-10 lg:!max-w-[60%] md:max-w-[60%] max-w-[85%] mx-auto'>
          <div className='lg:pt-0 pt-10 corevalues-card group'>
            <img
              src='/images/icons/excellence.png'
              alt='Legal Excellence'
              className='h-20 mb-2 transform transition-transform duration-500 group-hover:scale-x-[-1]'
            />
            <h3 className='md:text-[32px]'>
              Legal Excellence
              {/* <span className='font-light'>Design</span> */}
            </h3>
            <div className='border-b border-b-[#000] my-4 w-[90%]'></div>
            <div>
              Decades of expertise combined with rigorous attention to detail
              help us deliver strategic, outcome-driven counsel across practice
              areas.
            </div>
          </div>

          <div className='flex flex-col items-end md:!items-start corevalues-card group'>
            <img
              src='/images/icons/transparency.png'
              alt='Transparency'
              className='h-18 mb-2 transform transition-transform duration-500 group-hover:scale-x-[-1]'
            />
            <h3 className='md:text-[32px]'>
              Transparency
              {/* <span className='font-light'>Design</span> */}
            </h3>
            <div className='border-b border-b-[#000] my-4 w-[90%]'></div>
            <div className='text-end md:!text-start'>
              We maintain open and clear communication at every step, ensuring
              clients are always informed, empowered, and confident.
            </div>
          </div>

          <div className='corevalues-card group'>
            <img
              src='/images/icons/confidential.png'
              alt='Confidentiality'
              className='h-18 mb-2 transform transition-transform duration-500 group-hover:scale-x-[-1]'
            />
            <h3 className='md:text-[32px]'>
              Confidentiality
              {/* <span className='font-light'>Design</span> */}
            </h3>
            <div className='border-b border-b-[#000] my-4 w-[90%]'></div>
            <div>
              Your privacy is paramount. We handle every case with the highest
              level of discretion and professional responsibility.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;

"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const HomeAbout = () => {
  const stats = [
    {
      value: 25,
      suffix: "+",
      label: "Years of Experience",
      icon: "/images/home/Industryexperience.png",
    },
    {
      value: 2000,
      suffix: "+",
      label: "Satisfied Clients",
      icon: "/images/home/Clientele.png",
    },
    {
      value: 150,
      suffix: "+",
      label: "Successful Cases",
      icon: "/images/home/SuccessfulCases.png",
    },
    {
      value: 300,
      suffix: "+",
      label: "Expert Consultations",
      icon: "/images/home/ExpertConsultations.png",
    },
  ];

  return (
    <section className='bg-white mb-10 lg:mb-16'>
      <div className='s_wrapperr'>
        {/* Headline Section */}
        <div className='bg-[#f775890f] text-[#101435] py-10 sm:py-12 md:py-16 text-center px-4 sm:px-8 md:px-16 lg:px-32'>
          <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight'>
            <span className='text-[#b53d53] underline'>
              <Typewriter
                words={["Trust", "Legacy", "Clarity", "Commitment"]}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>{" "}
            is not just <br className='md:hidden' />
            what we promise. <br />
            It’s what we prove.
          </h2>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 text-center md:max-w-[90%] mx-auto mt-10 lg:mt-16 relative max-w-7xl px-4 sm:px-6 lg:px-8'>
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({ triggerOnce: true });
            return (
              <div
                key={index}
                ref={ref}
                className={`flex flex-col items-center w-[90%] mx-auto md:w-full h-[100px] justify-center aspect-square mt-6 md:mt-0 ${
                  index !== stats.length - 1
                    ? "md:border-r md:border-gray-300"
                    : ""
                }`}
              >
                <div className='md:text-3xl text-2xl font-semibold text-[#101435] lg:text-[44px]'>
                  {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                  <span className='md:text-3xl text-2xl text-gray-800'>
                    {stat.suffix}
                  </span>
                </div>
                <div className='text-[#b53d53] font-semibold mt-2 text-xs md:text-sm lg:text-lg'>
                  {stat.label}
                </div>
              </div>
            );
          })}

          {/* Divider for small screens */}
          <div className='absolute h-[calc(100%-40px)] w-[0.5px] bg-gray-500 left-[50%] top-[50%] translate-[-50%] md:hidden'></div>
          <div className='absolute w-[calc(100%-40px)] h-[0.5px] bg-gray-500 left-[50%] top-[50%] translate-[-50%] md:hidden'></div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

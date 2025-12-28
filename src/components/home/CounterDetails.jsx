"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 600, suffix: " cr+", label: "Assets" },
  { value: 30, suffix: " yrs+", label: "Industry experience" },
  { value: 2300, suffix: "+", label: "Clientele" },
  { value: 200, suffix: "+", label: "Insured lives" },
];

const CounterDetails = () => {
  return (
    <div className="">
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 text-center py-6 lg:py-10 max-w-[90%] lg:w-[1024px] mx-auto my-10 mb-16 -top-[40px] z-[22] bg-white rounded-2xl shadow-2xl">
        {stats.map((stat, index) => {
           const { ref, inView } = useInView({ triggerOnce: false });
          return (
            <div
              key={index}
              ref={ref}
              className={`flex flex-col items-center w-[90%]  mx-auto md:w-[100%] h-[100px] justify-center ${
                index !== stats.length - 1
                  ? "md:border-r md:border-gray-300"
                  : ""
              }`}
            >
              <div className="text-3xl font-semibold text-black lg:text-[44px]">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                <span className="text-3xl text-gray-800">{stat.suffix}</span>
              </div>
              <div className="text-[#931F1D] font-semibold mt-1 text-xs md:text-sm lg:text-lg">
                {stat.label}
              </div>
            </div>
          );
        })}
        <div className="absolute h-[calc(100%-40px)] w-[0.5px] bg-gray-500 left-[50%] top-[50%] translate-[-50%] md:hidden"></div>
        <div className="absolute w-[calc(100%-40px)] h-[0.5px] bg-gray-500 left-[50%] top-[50%] translate-[-50%] md:hidden"></div>
      </div>
    </div>
  );
};

export default CounterDetails;

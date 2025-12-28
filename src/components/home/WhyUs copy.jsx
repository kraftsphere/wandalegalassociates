"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";

const WhyUs = () => {
  const items = [
    {
      icon: "/images/home/innovation.png",
      label: "One Stop Investment Solutions",
    },
    {
      icon: "/images/home/cogwheel.png",
      label: "Quick Query Resolution",
    },
    {
      icon: "/images/home/balanced.png",
      label: "Ethics & Professionalism",
    },
    {
      icon: "/images/home/transparency2.png",
      label: "Transparency",
    },
    {
      icon: "/images/home/responsible.png",
      label: "Value Added Services",
    },
    {
      icon: "/images/home/money2.png",
      label: "Complete Control",
    },
  ];
  return (
    <div className="bg-white">
      <div className="s_wrapper overflow-x-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          {/* Centered Header Section */}
          <div className="text-center mb-12 max-w-[90%] mx-auto md:w-[300px] md:min-w-[300px] md:text-start md:my-auto">
            <h2 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-medium lg:mb-4 text-[#040404]">
              <SkewFadeInWords text="Why Us?" />
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              We’re bringing clarity and control back to your wealth
            </p>
          </div>

          {/* Marquee */}
          <div className=" py-6 md:flex-1 max-w-full">
            <Marquee pauseOnHover speed={80} gradient={false} loop={10}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center mx-4 md:mx-4 min-w-[200px]"
                >
                  <div className="border-2 border-[#101435] aspect-square w-[140px] rounded-full flex justify-center items-center mb-4 md:mb-6 bg-[#fff]">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={100}
                      height={100}
                      className="max-w-[60%]"
                    />
                  </div>
                  <p className="text-[#000] text-sm md:text-base">
                    {item.label}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

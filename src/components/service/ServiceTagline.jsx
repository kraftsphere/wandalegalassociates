import React from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
import "./ServiceTagline.css"
const ServiceTagline = () => {
  return (
    <div className="bg-white">
      <div className="s_wrapper relative !pt-0">
        <div className="absolute bottom-4 right-4">
          <img src="/images/arrow-pattern.svg" alt="At Winshine, We Are Dedicated" className="opacity-10 -rotate-90 animate-floating" />
        </div>
        <div className="max-w-2xl border-t border-gray-200 mx-auto text-black text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium lg:mb-4 mt-8">
            <SkewFadeInWords text="At Winshine, We Are Dedicated" />
          </h2>

          <p className="lg:mb-4 mb-2 text-[#333]">
            To providing a comprehensive suite of services with a personal
            touch, making your financial journey seamless and informed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceTagline;

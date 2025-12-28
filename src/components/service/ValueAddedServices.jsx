"use client";

import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TradingFingertips.css";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    icon: "/images/services/QuickresolutionQueries.png",
    title: "Quick resolution of queries and issues",
  },
  {
    id: 2,
    icon: "/images/services/MarketResearch.png",
    title: "Company/Market research outlook",
  },
  {
    id: 3,
    icon: "/images/services/OperationalEfficiency.png",
    title: "Operational Efficiency",
  },
  {
    id: 4,
    icon: "/images/services/Periodicreminder.png",
    title: "Periodic reminders of outstanding debt",
  },
  {
    id: 5,
    icon: "/images/services/AccessWinshine.png",
    title: "Access to Winshine Community",
  },
  {
    id: 6,
    icon: "/images/services/Executionoftrades.png",
    title: "Execution of trades on your behalf",
  },
 
];

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-10 cursor-pointer"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft className="w-8 h-8 p-1.5 bg-white rounded-full shadow-md text-gray-700 hover:text-gray-900" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-10 cursor-pointer"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight className="w-8 h-8 p-1.5 bg-white rounded-full shadow-md text-gray-700 hover:text-gray-900" />
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ValueAddedServices = () => {
  return (
    <div className="bg-[#f9f3f1]">
      <div className="s_wrapper">
        <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-8 gap-4 xl:gap-[4%]">
        
          {/* Centered Header Section */}
          <div className="text-start md:w-[30%] md:min-w-[30%] xl:min-w-[26%]">
            <h2 className="mb-2 text-2xl md:text-4xl lg:text-5xl font-medium text-[#040404]">
              <SkewFadeInWords text="Value Added Services" />
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Beyond the basics, discover value-added services designed to
              enhance your investment journey and drive financial growth.
            </p>
          </div>

          {/* Slider */}
          <div className="relative md:flex-1 md:max-w-[70%] xl:max-w-[70%] bg-white rounded-2xl px-8">
            <Slider {...settings}>
              {reviews.map((el) => (
                <div key={el.id} className="p-2">
                  <div className="p-6 h-full text-center sm:text-start">
                    <Image src={el.icon} alt={el.title} width={100} height={100}  className="mx-auto sm:ml-0"/>
                    <h3 className="text-gray-800 font-semibold mt-6">
                      {el.title}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueAddedServices;

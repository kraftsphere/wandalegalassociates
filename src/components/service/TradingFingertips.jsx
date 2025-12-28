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
    icon: "/images/services/PortfolioReports.png",
    title: "Portfolio Reports",
    description:
      "View individual stock-wise portfolios with cost, market value, and gain/loss",
  },
  {
    id: 2,
    icon: "/images/services/NetOutstandingPosition.png",
    title: "Net Outstanding Position",
    description: "Keep track of equity and derivatives segment positions",
  },
  {
    id: 3,
    icon: "/images/services/TradeData.png",
    title: "Trade Data",
    description: "Access comprehensive trade information",
  },
  {
    id: 4,
    icon: "/images/services/delivery-time.png",
    title: "Ledger of Last 3 Months",
    description: "Review your financial history",
  },
  {
    id: 5,
    icon: "/images/services/ScripFundamentalData.png",
    title: "Script Fundamental Data",
    description: "Understand the fundamentals of your chosen script",
  },
  {
    id: 6,
    icon: "/images/services/TechnicalCharts.png",
    title: "Technical Charts",
    description: "Analyze market trends visually",
  },
  {
    id: 7,
    icon: "/images/services/OtherTechnicalData.png",
    title: "Other Technical Data",
    description: "Access additional technical insights",
  },
  {
    id: 8,
    icon: "/images/services/FundPay-inFacility.png",
    title: "Fund Pay-in Facility",
    description: "Facilitate seamless fund transactions",
  },
  {
    id: 9,
    icon: "/images/services/JMReports.png",
    title: "JM Reports",
    description: "Stay updated with reports from JM Financial Services Ltd",
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

const TradingFingertips = () => {
  return (
    <div className="bg-[#f9f3f1]">
      <div className="s_wrapper">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4 xl:gap-[3%]">
          {/* Centered Header Section  */}
          <div className="text-start md:w-[30%] md:min-w-[30%] xl:min-w-[27%]">
            {/* <p className="text-gray-700 max-w-2xl mx-auto">
            Testimonials
          </p> */}
            <h2 className="mb-2 text-2xl md:text-4xl lg:text-5xl font-medium text-[#040404]">
              <SkewFadeInWords text="Trading At Your Fingertips" />
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Trade seamlessly with our mobile and desktop online trading apps.
              Execute transactions anytime, anywhere during market hours, with
              features tailored to optimize your trading. The features include :
            </p>
          </div>

          {/* Slider */}
          <div className="relative md:flex-1 md:max-w-[70%] xl:min-w-[70%] bg-white rounded-2xl px-8">
            <Slider {...settings}>
              {reviews.map((el) => (
                <div key={el.id} className="p-2">
                  <div className="p-6 h-full  text-center sm:text-start">
                    <Image src={el.icon} alt={el.title} width={90} height={90} className="mx-auto sm:ml-0"/>
                    <h3 className="text-gray-800 font-semibold mt-4">
                      {el.title}
                    </h3>
                    <p className="text-gray-700 mt-2">{el.description}</p>
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

export default TradingFingertips;

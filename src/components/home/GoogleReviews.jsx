"use client";

import React from "react";
import Slider from "react-slick";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GoogleReviews.css";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";

const reviews = [
  {
    id: 1,
    name: "deep soni",
    date: "2024-11-13",
    rating: 5,
    text: "Winshine has transformed how I manage my finances. The expert guidance and seamless app experience make investing incredibly easy and efficient.",
    avatar: null,
    verified: true,
    initial: "d",
  },
  {
    id: 2,
    name: "Ramesh Jawale",
    date: "2024-10-04",
    rating: 4,
    text: "Professional support, timely insights, and great tools. Their margin trading facility is a real game-changer for active investors.",
    avatar: null,
    verified: true,
    initial: "R",
  },
  {
    id: 3,
    name: "Sriram R",
    date: "2024-09-30",
    rating: 5,
    text: "I appreciate the one-on-one sessions with financial experts. They've helped me understand the market and make smarter investment decisions.",
    avatar: null,
    verified: true,
    initial: "S",
  },
  {
    id: 4,
    name: "John Doe",
    date: "2024-09-15",
    rating: 5,
    text: "Reliable, user-friendly, and informative. The real-time trading calls keep me ahead in the market.",
    avatar: null,
    verified: true,
    initial: "J",
  },
  {
    id: 5,
    name: "Jane Smith",
    date: "2024-08-22",
    rating: 4,
    text: "Winshine’s financial literacy programs are fantastic. They’ve really helped me gain confidence in managing my investments independently.",
    avatar: null,
    verified: true,
    initial: "J",
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
  slidesToShow: 2,
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

// Avatar colors for initials
const avatarColors = {
  d: "bg-gray-600",
  R: "bg-purple-600",
  S: "bg-green-600",
  J: "bg-blue-600",
};

const GoogleReviews = () => {
  return (
    <div className="bg-white">
      <div className="s_wrapper">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Centered Header Section */}
          <div className="text-start md:w-[30%] md:min-w-[30%]">
            {/* <p className="text-gray-700 max-w-2xl mx-auto">
            Testimonials
          </p> */}
            <h2 className="mb-2 text-2xl md:text-4xl lg:text-5xl font-medium text-[#040404]">
              <SkewFadeInWords text="Our Customer Reviews" />
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover the Experiences That Make Us Stand Out
            </p>
          </div>

          {/* Slider */}
          <div className="relative px-10 md:flex-1 md:max-w-[70%]">
            <Slider {...settings}>
              {reviews.map((review) => (
                <div key={review.id} className="p-2">
                  <div className="border-2 rounded-xl p-6 h-full bg-[#f0f0f2] flex flex-col justify-between gap-8">
                    <p className="text-gray-800 text-sm">{review.text}</p>
                    <div className="mt-2 flex justify-between items-start">
                      <div className="flex gap-2">
                        {/* Avatar */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-base ${
                            avatarColors[review.initial] || "bg-gray-500"
                          }`}
                        >
                          {review.initial.toUpperCase()}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 flex items-center gap-1 capitalize">
                            {review.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {new Date(review.date).toDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
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

export default GoogleReviews;

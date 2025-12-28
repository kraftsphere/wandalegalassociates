"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    text: "Winshine has transformed how I manage my finances. The expert guidance and seamless app experience make investing incredibly easy and efficient.",
    author: "Aparna Nair",
  },
  {
    id: 2,
    text: "Professional support, timely insights, and great tools. Their margin trading facility is a real game-changer for active investors.",
    author: "Naveen Kumar",
  },
  {
    id: 3,
    text: "I appreciate the one-on-one sessions with financial experts. They've helped me understand the market and make smarter investment decisions.",
    author: "Sneha Raj",
  },
  {
    id: 4,
    text: "Reliable, user-friendly, and informative. The real-time trading calls keep me ahead in the market.",
    author: "Manish Sharma",
  },
  {
    id: 5,
    text: "Winshine’s financial literacy programs are fantastic. They’ve really helped me gain confidence in managing my investments independently.",
    author: "Manish Sharma",
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="reviews"
      className="relative w-full  flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-9 bg-black/30"></div>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Image
          src="/images/home/testimonial-bg.jpg"
          alt="."
          fill
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      {/* <div
      id="reviews"
      className="relative w-full  flex items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/home/testimonial-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    > */}
      <div className="relative w-full s_wrapper mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-medium lg:mb-4 text-[#ffffff]">
            <SkewFadeInWords text="What Our Client Says" />
          </h2>
        </div>

        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <button
              onClick={handlePrevious}
              className="bg-white/20 cursor-pointer backdrop-blur-sm hover:bg-white/30 transition-colors p-2 rounded-full shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft className="text-[#fc663485] md:text-white h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/20 cursor-pointer backdrop-blur-sm hover:bg-white/30 transition-colors p-2 rounded-full shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight className="text-[#fc663485] md:text-white h-6 w-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              className="transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div
                      className="bg-white/80 rounded-xl p-8 shadow-lg max-w-3xl mx-auto relative flex flex-col justify-center"
                      style={{ minHeight: "300px" }}
                    >
                      {/* Left quote mark */}
                      <div className="absolute left-6 top-6 text-[#fc6634] text-8xl font-serif">
                        &#8220;
                      </div>

                      <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <p className="text-center text-gray-800 text-sm md:text-xl leading-relaxed px-6 mb-6">
                          {review.text}
                        </p>
                        <div className="text-center">
                          <p className="text-gray-700 font-medium">
                            {review.author}
                          </p>
                          {review.company && (
                            <p className="text-gray-500 text-sm">
                              {review.company}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Right quote mark */}
                      <div className="absolute right-6 bottom-6 text-[#fc6634] text-8xl font-serif">
                        &#8221;
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;

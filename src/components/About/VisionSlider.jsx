"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VisionSlider = ({
  slides = [],
  autoPlay = true,
  autoPlayInterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  };

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevSlide);
  };

  useEffect(() => {
  if (autoPlay) {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, autoPlayInterval);
  }

  return () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };
}, [autoPlay, autoPlayInterval, slides.length]);

  return (
    <section className="bg-[#fff]">
      <div className="s_wrapper">
        <div className="relative w-full overflow-hidden lg:max-w-[1024px] lg:mx-auto rounded-4xl">
          <div className="relative h-[280px] md:h-[340px] lg:h-[440px] w-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                  <div className="max-w-4xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 tracking-wider uppercase">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-white mb-8 tracking-wide">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar and navigation arrows at bottom */}
          <div className="absolute bottom-8 left-0 right-0 z-20 px-8 md:px-12">
            <div className="flex justify-between items-center">
              {/* Progress bar */}
              <div className="flex-1 mx-auto max-w-md">
                <div className="h-[2px] bg-white/30 relative">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 h-full bg-white transition-all duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        width: `${(100 / slides.length) * (index + 1)}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex space-x-2 ml-8">
                <button
                  onClick={goToPrevSlide}
                  className="p-2 text-white hover:text-gray-200 transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={goToNextSlide}
                  className="p-2 text-white hover:text-gray-200 transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSlider;

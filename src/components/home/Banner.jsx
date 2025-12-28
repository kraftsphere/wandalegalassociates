"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/28682358/pexels-photo-28682358/free-photo-of-stock-market-trading-app-displaying-financial-data.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Chase dreams, not debts",
    description:
      "Escape financial struggles! Achieve early retirement and debt - free living.",
    buttonText: "Contact Now",
    buttonLink: "#contact",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/18285261/pexels-photo-18285261/free-photo-of-smartphone-on-a-stand-with-stock-market-data-on-the-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Financial wizards at play",
    description:
      "From traditional avenues to global opportunities, we simplify your financial choices.",
    buttonText: "Contact Now",
    buttonLink: "#contact",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/7412102/pexels-photo-7412102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "We do money differently",
    description:
      "Experience 30 years of prosperity, ethics, and unparalleled service.",
    buttonText: "Contact Now",
    buttonLink: "#contact",
  },
];

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Set up automatic slide rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 z-20 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <div>
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === currentSlide}
              />
              <div className="w-full h-full absolute bg-black/40 z-10"></div>
            </div>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute z-20 inset-0 flex flex-col items-center left-[5%] justify-center">
              <div className="flex flex-col justify-center items-center">
                <h1 className="mb-2 text-start max-w-4xl text-2xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-[72px] font-bold text-white capitalize">
                  {slide.title}
                </h1>
                <p className="mb-8 text-lg lg:text-xl">{slide.description}</p>
                <Link
                  href={slide.buttonLink}
                  className="mx-auto gradient-button text-start text-[#ffffff] transition duration-300 ease-in-out px-4 py-2 rounded-xl font-semibold"
                >
                  {slide.buttonText}
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="absolute bottom-10 left-[5%] flex z-[25] gap-6">
        <button
          onClick={prevSlide}
          className=" left-4 z-[21] top-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className=" right-4 z-[21] top-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div> */}

      <div className="absolute top-[50%] z-[21]  translate-y-[-50%] flex right-0 space-x-2 rotate-90">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* <div className="absolute bottom-8 right-8 rounded-full bg-green-500 p-3 text-white">
        <Phone className="h-6 w-6" />
      </div> */}
    </div>
  );
}

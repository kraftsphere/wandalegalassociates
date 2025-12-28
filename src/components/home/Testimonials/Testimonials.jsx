"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import SkewFadeInWords from "@/components/ui/animation/SkewFadeInWords";

const testimonials = [
  {
    message:
      "Winshine has transformed how I manage my finances. The expert guidance and seamless app experience make investing incredibly easy and efficient.",
    name: "Aparna Nair",
  },
  {
    message:
      "Professional support, timely insights, and great tools. Their margin trading facility is a real game-changer for active investors.",
    name: "Naveen Kumar",
  },
  {
    message:
      "I appreciate the one-on-one sessions with financial experts. They've helped me understand the market and make smarter investment decisions.",
    name: "Sneha Raj",
  },
  {
    message:
      "Reliable, user-friendly, and informative. The real-time trading calls keep me ahead in the market.",
    name: "Manish Sharma",
  },
  {
    message:
      "Winshine’s financial literacy programs are fantastic. They’ve really helped me gain confidence in managing my investments independently.",
    name: "Manish Sharma",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className='flex items-center justify-center mt-6 space-x-8 max-w-fit'>
        <CustomPrevArrow />
        <ul className='flex items-center justify-center space-x-2'>{dots}</ul>
        <CustomNextArrow />
      </div>
    ),
    customPaging: () => (
      <div className='w-2 h-2 bg-[#101435] rounded-full opacity-50'></div>
    ),
  };

  // Custom Arrow Components
  const CustomPrevArrow = () => (
    <button
      className='z-10 mb-2.5 rounded-full cursor-pointer md:hidden'
      onClick={() => sliderRef.current?.slickPrev()}
    >
      <IoIosArrowBack
        size={30}
        className='text-[#101435c2] sm:w-8 sm:h-8 sm:min-w-8 sm:min-h-8'
      />
    </button>
  );

  const CustomNextArrow = () => (
    <button
      className='z-10 mb-2.5 rounded-full cursor-pointer md:hidden'
      onClick={() => sliderRef.current?.slickNext()}
    >
      <IoIosArrowForward
        size={30}
        className='text-[#101435c2] sm:w-8 sm:h-8 sm:min-w-8 sm:min-h-8'
      />
    </button>
  );

  return (
    <section
      className='bg-[#fff] md:pb-16 pb-0 relative overflow-hidden'
      id='testimonials'
    >
      <div className='max-w-[1400px] flex mx-auto flex-col lg:flex-row'>
        <div className='items-center justify-center w-full px-4 pt-16 lg:w-1/2 hidden md:flex'>
          <img
            src='/images/home/testimonials.webp'
            alt='testimonials'
            className='max-h-[400px] rounded-2xl rounded-tr-[100px]'
          />
        </div>
        <div className='flex flex-col items-center justify-center w-full px-4 py-8 mx-auto md:py-16 lg:w-1/2'>
          <h2 className='mb-4 text-2xl md:text-4xl lg:text-5xl font-medium lg:mb-4 text-[#040404]'>
            <SkewFadeInWords text='What Our Client Says' />
          </h2>

          <div className='relative max-w-full md:mt-8'>
            <div className='absolute -top-8 left-0'>
              <img src='/images/quotes.png' alt="'" className='opacity-5' />
            </div>
            <div className='absolute -bottom-0 right-8'>
              <img
                src='/images/quotes.png'
                alt="'"
                className='opacity-5 rotate-180'
              />
            </div>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className='flex flex-col items-center justify-center max-w-full px-6 py-4 mx-auto text-center md:py-8'
                >
                  <div className='max-w-full mx-auto'>
                    <p className='mb-6 leading-relaxed text-[#333]'>
                      {item.message}
                    </p>
                    <div>
                      <h4 className='font-medium uppercase text-black'>
                        {item.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

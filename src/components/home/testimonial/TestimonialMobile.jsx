"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "./Testimonial.scss";
import SkewFadeInWords from "../../ui/animation/SkewFadeInWords";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider settings (mobile focused)
const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  adaptiveHeight: true,
};

const TestimonialMobile = () => {
  const sliderRef = useRef(null);

  return (
    <section className='lg:hidden py-10 overflow-x-hidden'>
      {/* Heading */}
      <div className='px-4 mb-6'>
        <h2 className='mb-3 text-2xl font-medium text-[#040404]'>
          <SkewFadeInWords text='What Our Client Says' />
        </h2>
        <p className='text-sm text-black'>
          Hear what our clients say about the trust, results and service that
          define W and A Legal Associates.
        </p>
      </div>

      {/* Slider */}
      <div className='-mx-4'>
        <Slider ref={sliderRef} {...settings}>
          {[
            {
              name: "Rohit Mehra",
              reviews: "12 reviews",
              text: "I was overwhelmed with legal paperwork until I found this firm. Their professionalism and clear communication made all the difference.",
              bg: "#bf360c",
              initial: "R",
            },
            {
              name: "Ananya Deshpande",
              reviews: "4 reviews",
              text: "Their team helped me resolve a long-standing family property dispute with minimal stress.",
              bg: "#024939",
              initial: "A",
            },
            {
              name: "Kunal Verma",
              reviews: "1 review",
              text: "As a startup founder, I needed expert advice on contracts and compliance. Extremely valuable.",
              bg: "#0058a0",
              initial: "K",
            },
            {
              name: "Priya Nair",
              reviews: "4 reviews",
              text: "Their support during my divorce proceedings was compassionate and strategic.",
              bg: "#034939",
              initial: "P",
            },
          ].map((item, index) => (
            <div key={index} className='px-4'>
              <div className='team-member px-5 py-6 rounded-[16px] border bg-white'>
                <div className='flex items-center space-x-4 mb-3'>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold'
                    style={{ background: item.bg }}
                  >
                    {item.initial}
                  </div>
                  <div>
                    <div className='font-medium text-gray-700'>{item.name}</div>
                    <div className='text-gray-400 text-xs'>{item.reviews}</div>
                  </div>
                </div>

                <div className='flex items-center gap-0.5 mb-1'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-3 h-3 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <span className='ml-2 text-gray-400 text-xs'>
                    8 months ago
                  </span>
                </div>

                <p className='text-sm text-justify mt-2'>{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Navigation */}
      <div className='flex justify-center gap-4 mt-6'>
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className='w-10 h-10 rounded-full border flex items-center justify-center text-gray-700 hover:bg-gray-100 transition'
          aria-label='Previous testimonial'
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className='w-10 h-10 rounded-full border flex items-center justify-center text-gray-700 hover:bg-gray-100 transition'
          aria-label='Next testimonial'
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialMobile;

"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VisionSlider2.css";

const VisionSlider2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // References to the sliders
  const textSliderRef = useRef(null);
  const imageSliderRef = useRef(null);

  // Data for text and images
  const textSlides = [
    {
      iconimage: "",
      title: "MISSION",
      text: "Our mission is to deliver ethical, clear, and result-oriented legal solutions with integrity and professionalism. We focus on client-centric guidance, transparent communication, confidentiality, and practical legal strategies to protect our clients’ rights and interests.",
      img: "/images/about/wamission.jpg",
    },
    {
      iconimage: "",
      title: "VISION",
      text: "Our vision is to be a trusted legal firm known for ethical practice, long-term client relationships, and effective legal solutions. We aim to build on our legacy by combining experience with a modern, multidisciplinary legal approach.",
      img: "/images/about/wavision.png",
    },
    // {
    //   iconimage: "",
    //   title: "GOAL",
    //   text: "To consistently provide strategic legal solutions that not only resolve today’s challenges but also anticipate tomorrow’s needs. We strive to build long-term relationships grounded in trust, transparency, and lasting value.",
    //   img: "/images/about/goal.webp",
    // },
  ];

  const textSliderSettings = {
    infinite: true,
    // speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    appendDots: (dots) => (
      <div>
        <ul className='flex gap-2 mt-20 justify-start'>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='w-2.5 h-2.5 rounded-full bg-[#101435] opacity-50'></div>
    ),
    beforeChange: (current, next) => syncSliders(next),
  };

  const mobileSliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    appendDots: (dots) => (
      <div>
        <ul className='flex gap-2 mt-4 justify-center'>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='w-2.5 h-2.5 rounded-full bg-[#101435] opacity-50'></div>
    ),
  };

  const imageSliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: false,
    beforeChange: (current, next) => syncSliders(next),
  };

  // Sync function to handle both sliders at once
  const syncSliders = (next) => {
    setActiveSlide(next);
    if (textSliderRef.current && imageSliderRef.current) {
      textSliderRef.current.slickGoTo(next);
      imageSliderRef.current.slickGoTo(next);
    }
  };

  // Auto-scroll both sliders
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = (activeSlide + 1) % textSlides.length;
      syncSliders(nextSlide);
    }, 50000000); // Increased to 5 seconds for better user experience

    return () => clearInterval(intervalId);
  }, [activeSlide, textSlides.length]);

  return (
    <div className='bg-[#f775890f]'>
      <div className='s_wrapper'>
        <section className='flex flex-col justify-center items-center md:px-6'>
          <div
            className='flex flex-col w-full gap-4 pb-12 md:pb-0 xl:gap-10 md:flex-row max-w-7xl mx-auto'
            id='temples'
          >
            {/* Desktop Slider Container */}
            {/* Left Side - Text Slider */}
            <div className='flex-col w-full md:w-[40%] lg:w-[40%] hidden md:flex'>
              <div className='mt-4 lg:mt-8'>
                <Slider ref={textSliderRef} {...textSliderSettings}>
                  {textSlides.map((text, index) => (
                    <div key={index} className='outline-none'>
                      <h3 className='mb-4 text-2xl md:text-4xl font-medium text-[#040404]'>
                        {text.title}
                      </h3>
                      <p className='lg:text-base text-sm text-[#333] my-2 lg:mt-6 '>
                        {text.text}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Right Side - Image Slider */}
            <div className='w-full md:w-[60%] lg:w-[50%] hidden md:block md:ml-auto'>
              <Slider ref={imageSliderRef} {...imageSliderSettings}>
                {textSlides.map((slide, index) => (
                  <div key={index} className='outline-none px-1 lg:px-2'>
                    <img
                      src={slide.img || "/placeholder.svg"}
                      alt={slide.title}
                      className='h-[220px] lg:h-[380px] w-full object-cover rounded-lg rounded-tl-[50px]  shadow-md'
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Mobile Slider Container */}
            <div className='md:hidden w-full'>
              <div className='mt-4'>
                <Slider {...mobileSliderSettings}>
                  {textSlides.map((el, index) => (
                    <div
                      key={index}
                      className='outline-none px-2 flex flex-col justify-between'
                    >
                      <div>
                        <h3 className='mb-4 text-2xl md:text-4xl font-medium text-[#040404]'>
                          {el.title}
                        </h3>
                        <p className='text-[#333] mt-2 text-sm '>{el.text}</p>
                      </div>
                      <div className='mt-4 flex-1'>
                        <img
                          src={el.img || "/placeholder.svg"}
                          alt={el.title}
                          className='h-[220px] w-full object-cover rounded-2xl shadow-md'
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionSlider2;

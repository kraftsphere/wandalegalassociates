import React from "react";
import Testimonial from "./Testimonial";
import TestimonialMobile from "./TestimonialMobile";

const HomeTestimonial = () => {
  return (
    <section className='bg-white'>
      <div className='s_wrapper'>
        <div className='hidden md:block lg:mb-[0px] md:mb-[80px] mb-[50px] lg:pt-[150px] md:pt-[100px]'>
          <Testimonial />
        </div>
        <div className='md:hidden'>
          <TestimonialMobile />
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;

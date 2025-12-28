"use client";
import React from "react";
import {
  Briefcase,
  Users,
  ShieldCheck,
  BookOpenCheck,
  Clock,
  Scale,
} from "lucide-react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
import Link from "next/link";

const WhyUs = () => {
  const items = [
    {
      icon: <Briefcase className='w-8 h-8 text-[#b53d53]' />,
      label: "25+ Years of Experience",
    },
    {
      icon: <Users className='w-8 h-8 text-[#b53d53]' />,
      label: "Client-Centric Approach",
    },
    {
      icon: <ShieldCheck className='w-8 h-8 text-[#b53d53]' />,
      label: "Integrity & Ethics",
    },
    {
      icon: <BookOpenCheck className='w-8 h-8 text-[#b53d53]' />,
      label: "Clear Legal Guidance",
    },
    {
      icon: <Clock className='w-8 h-8 text-[#b53d53]' />,
      label: "Prompt Legal Support",
    },
    {
      icon: <Scale className='w-8 h-8 text-[#b53d53]' />,
      label: "Tailored Legal Solutions",
    },
  ];

  return (
    <div className='bg-white'>
      <div className='s_wrapper overflow-x-hidden relative'>
        <div className='absolute -top-4 right-4'>
          <img src='/images/dot-pattern.svg' alt='.' className='opacity-10' />
        </div>
        <div className='text-center mb-12'>
          {/* <h2
            className='mb-4 text-2xl md:text-4xl lg:text-5xl font
          -medium lg:mb-4 text-[#040404] '
          > */}
          <h2 className='sr-only'>Why Choose Us?</h2>
          <div className='mb-4 text-2xl md:text-4xl font-medium text-[#040404]'>
            <SkewFadeInWords text='Why Choose Us?' />
          </div>
          <p className='text-gray-700 max-w-2xl mx-auto mb-6'>
            Trusted legal expertise grounded in clarity, ethics, and results.
          </p>
        </div>

        <div className='flex flex-col-reverse lg:flex-row lg:items-start xl:items-center md:gap-6'>
          {/* Features Section */}
          <div className='w-full lg:w-1/2'>
            <div className='grid xl:grid-cols-3 xl:gap-0 sm:grid-cols-3 lg:grid-cols-2 grid-cols-2'>
              {items.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center text-center md:mx-4 lg:min-w-[200px] xl:min-w-[180px] xl:aspect-square p-2 md:p-0'
                >
                  <div className='flex flex-col items-center justify-start w-full h-full'>
                    <div className='bg-[#cfd0d750] aspect-square lg:w-[80px] rounded-full flex justify-center items-center mb-4 md:mb-6 mt-8'>
                      {item.icon}
                    </div>
                    <p className='text-[#000] text-sm md:text-base'>
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className='w-full'>
              <Link href='/contact'>
                <button className='gradient-button text-[#ffffff] px-4 py-2 rounded-xl !mx-auto !mt-4 font-semibold'>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className='w-full lg:w-1/2 rounded-2xl lg:rounded-tr-[100px] rounded-tr-[50px] lg:mt-10 xl:mt-0 overflow-hidden'>
            <img
              src='https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
              alt='Why Us'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

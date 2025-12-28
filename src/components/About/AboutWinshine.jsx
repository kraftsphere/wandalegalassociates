import React from "react";
import SkewFadeInWords from "../ui/animation/SkewFadeInWords";
// Replace with your actual image path

const AboutWinshine = () => {
  return (
    <section className='bg-white'>
      <div className='s_wrapper relative'>
        <div className='absolute w-auto  h-full top-0 right-0'>
          <img
            src='/images/Modern-pattern.svg'
            alt='About Winshine Financial Services'
            className='md:opacity-40 opacity-0 w-full -z-1 h-full'
          />
        </div>
        <div className='absolute w-auto  h-full top-0 left-0'>
          <img
            src='/images/Modern-pattern.svg'
            alt='About Winshine Financial Services'
            className='md:opacity-40 opacity-0 w-full -z-1 h-full rotate-180'
          />
        </div>
        <h1 className='sr-only'>About W and A Legal Associates</h1>
        <div className='mb-4 text-2xl md:text-4xl font-medium text-[#040404] text-center relative z-20'>
          <SkewFadeInWords text='About W and A Legal Associates' />
        </div>
        <div className='mx-auto gap-4 flex flex-col text-[#040404] text-center max-w-4xl relative z-20'>
          <p className='text-justify md:text-start text-[15px] leading-relaxed'>
            W & A Legal Associates is a Mumbai-based full-service law firm
            established in 1997, built on a strong foundation of integrity,
            social responsibility, and client-focused advocacy. The firm traces
            its origins to the early legal and social service initiatives of
            Advocate Waseem Ahmed Siddiqui, who actively assisted individuals
            from underprivileged backgrounds even before his formal enrolment as
            an Advocate. Following his enrolment in 1998, the firm was formally
            established as Waseem Siddiqui & Associates, with a clear vision to
            deliver ethical, practical, and effective legal solutions.
          </p>
          <p className='text-justify md:text-start text-[15px] leading-relaxed'>
            With the induction of the second generation into the legal
            profession—Advocate Asim Waseem Siddiqui, enrolled in 2018—the firm
            evolved into W & A Legal Associates, reflecting continuity, growth,
            and a modern multidisciplinary approach to law. Today, the firm
            primarily operates across Mumbai, Thane, and Navi Mumbai, supported
            by a strong nationwide professional network. Guided by principles of
            transparency, confidentiality, and accountability, we adopt a
            hands-on approach to ensure personalized attention, clear legal
            guidance, and long-term legal security for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWinshine;

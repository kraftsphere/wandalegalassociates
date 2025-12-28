"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "./Testimonial.scss";
import SkewFadeInWords from "../../../components/ui/animation/SkewFadeInWords";
import { Star } from "lucide-react";

// Slick Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <div className='arrows-btn'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='#b53d53'
        viewBox='0 0 448 512'
      >
        <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
      </svg>
    </div>
  ),
  nextArrow: (
    <div className='arrows-btn'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='#b53d53'
        viewBox='0 0 448 512'
      >
        <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
      </svg>
    </div>
  ),
};

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // const section = sectionRef.current;
    // const leftSide = leftRef.current;
    // const rightSide = rightRef.current;

    // Clean up previous animations when component unmounts to avoid conflicts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className='lg:h-max h-[auto]'>
      <div className='grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-20'>
        {/* Left side content */}
        <div ref={leftRef} className='left-content lg:col-span-4'>
          <div className='sticky-content'>
            <div className='lg:h-[30vh] h-max flex justify-between items-center lg:w-[90%] w-[100%] mx-auto ml-0'>
              <div className='flex flex-col items-start justify-between w-full '>
                <h2 className='mb-4 text-2xl md:text-4xl font-medium text-[#040404]'>
                  <SkewFadeInWords text='What Our Client Says' />
                </h2>
                <p className='mt-2 text-black'>
                  Hear what our clients and industry leaders say about the
                  trust, results and service that define W and A Legal
                  Associates
                </p>
                {/* <Link
                  href='https://www.google.com/search?sca_esv=46de8ce3f677badb&sxsrf=AE3TifPWU9yXeHp472SqjCvIWoBBOltEOg:1748499212215&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1_PbEbidRPExaiMU_y3JMVoJwcfKM4PV3n_QlEHcs56YXsj4g520oW4eqdtmI7p6KwjTSoc2awFa4mPJSjIuMiS6JyRWoX0bGRJP3vP0aQVYFQQPg%3D%3D&q=Winshine+Financial+Services+Reviews&sa=X&ved=2ahUKEwjApLyTg8iNAxWvsFYBHf56F40Q0bkNegQIJRAE&biw=1366&bih=641&dpr=1#lrd=0x3be7c62e9d7d6357:0xd943e730b640cdd3,3,,,,'
                  target='_blank'
                  className='text-blue-600 hover:text-blue-800 hover:underline mt-2'
                >
                  Write a Review
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Right side content */}

        <div className='hidden lg:block lg:col-span-8'>
          <div ref={rightRef} className='grid grid-cols-2 gap-x-10'>
            {/* Column 1 */}
            <div className='space-y-10'>
              {/* Testimonial 1 */}
              <div className='team-member h-max px-6 py-8 rounded-[16px] overflow-y-hidden'>
                <div className='flex items-center space-x-4 mb-3'>
                  <div className='bg-[#bf360c] w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold text-white'>
                    R
                  </div>
                  <div>
                    <div className='font-medium leading-tight text-gray-700'>
                      Rohit Mehra
                    </div>
                    <div className='text-gray-400 text-xs'>12 reviews</div>
                  </div>
                </div>
                <div className='flex items-center gap-0.5 mb-1'>
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className='w-3 h-3 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <span className='ml-2 text-gray-400 text-xs'>
                    8 months ago
                  </span>
                </div>
                <p className='text-justify text-sm'>
                  I was overwhelmed with legal paperwork until I found this
                  firm. Their professionalism and clear communication made all
                  the difference. Highly recommended!
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className='team-member h-max px-6 py-8 rounded-[16px] overflow-y-hidden'>
                <div className='flex items-center space-x-4 mb-3'>
                  <div className='bg-[#0058a0] w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold text-white'>
                    K
                  </div>
                  <div>
                    <div className='font-medium leading-tight text-gray-700'>
                      Kunal Verma
                    </div>
                    <div className='text-gray-400 text-xs'>1 review</div>
                  </div>
                </div>
                <div className='flex items-center gap-0.5 mb-1'>
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className='w-3 h-3 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <span className='ml-2 text-gray-400 text-xs'>
                    8 months ago
                  </span>
                </div>
                <p className='text-justify text-sm'>
                  As a startup founder, I needed expert advice on contracts and
                  compliance. Their corporate legal services were sharp, timely,
                  and extremely valuable.
                </p>
              </div>

              {/* Testimonial 5 */}
              <div className='team-member h-max px-6 py-8 rounded-[16px] overflow-y-hidden'>
                <div className='flex items-center space-x-4 mb-3'>
                  <div className='bg-[#f5511e] w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold text-white'>
                    A
                  </div>
                  <div>
                    <div className='font-medium leading-tight text-gray-700'>
                      Amit Joshi
                    </div>
                    <div className='text-gray-400 text-xs'>3 reviews</div>
                  </div>
                </div>
                <div className='flex items-center gap-0.5 mb-1'>
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className='w-3 h-3 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <span className='ml-2 text-gray-400 text-xs'>a year ago</span>
                </div>
                <p className='text-justify text-sm'>
                  What impressed me most was their prompt response and practical
                  approach. They don't just quote laws – they offer real
                  solutions.
                </p>
              </div>
            </div>

            {/* Column 2 with negative top margin */}
            <div className='space-y-10 -mt-12'>
              {/* Testimonial 2 */}
              <div className='team-member h-max px-6 py-8 rounded-[16px] overflow-y-hidden'>
                <div className='flex items-center space-x-4 mb-3'>
                  <div className='bg-[#024939] w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold text-white'>
                    A
                  </div>
                  <div>
                    <div className='font-medium leading-tight text-gray-700'>
                      Ananya Deshpande
                    </div>
                    <div className='text-gray-400 text-xs'>4 reviews</div>
                  </div>
                </div>
                <div className='flex items-center gap-0.5 mb-1'>
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className='w-3 h-3 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <span className='ml-2 text-gray-400 text-xs'>
                    8 months ago
                  </span>
                </div>
                <p className='text-justify text-sm'>
                  Their team helped me resolve a long-standing family property
                  dispute with minimal stress. I appreciated their transparency
                  and integrity throughout the process.
                </p>
              </div>

              {/* Testimonial 4 */}
              <div className='team-member h-max px-6 py-8 rounded-[16px] overflow-y-hidden'>
                <div className='flex items-center space-x-4 mb-3'>
                  <div className='bg-[#024939] w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold text-white'>
                    P
                  </div>
                  <div>
                    <div className='font-medium leading-tight text-gray-700'>
                      Priya Nair
                    </div>
                    <div className='text-gray-400 text-xs'>4 reviews</div>
                  </div>
                </div>
                <div className='flex items-center gap-0.5 mb-1'>
                  {[...Array(4)].map((_, index) => (
                    <Star
                      key={index}
                      className='w-3 h-3 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <Star className='w-3 h-3 fill-gray-300 text-gray-300' />
                  <span className='ml-2 text-gray-400 text-xs'>a year ago</span>
                </div>
                <p className='text-justify text-sm'>
                  Their support during my divorce proceedings was both
                  compassionate and strategic. I felt heard, protected, and
                  empowered.
                </p>
              </div>

              {/* Testimonial 6 */}
              <div className='team-member h-max px-6 py-8 rounded-[16px] overflow-y-hidden'>
                <div className='flex items-center space-x-4 mb-3'>
                  <div className='bg-[#034939] w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold text-white'>
                    S
                  </div>
                  <div>
                    <div className='font-medium leading-tight text-gray-700'>
                      Sudha Joshi
                    </div>
                    <div className='text-gray-400 text-xs'>1 review</div>
                  </div>
                </div>
                <div className='flex items-center gap-0.5 mb-1'>
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className='w-3 h-3 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                  <span className='ml-2 text-gray-400 text-xs'>a year ago</span>
                </div>
                <p className='text-justify text-sm'>Service is good</p>
              </div>

              {/* (Optional) Invisible testimonial to balance layout */}
              <div className='team-member h-max px-6 py-8 rounded-[16px] overflow-y-hidden invisible'>
                <div className='flex items-center space-x-4 mb-3'>
                  <div className='bg-[#689f39] w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold text-white'>
                    N
                  </div>
                  <div>
                    <div className='font-medium leading-tight text-gray-700'>
                      Nidhi Solanki
                    </div>
                    <div className='text-gray-400 text-xs'>5 reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

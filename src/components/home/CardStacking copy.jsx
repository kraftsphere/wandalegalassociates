"use client";

import "./CardStacking.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CardStacking = () => {
  const PanelRef = useRef([]);
  const endTrigger = useRef(null);

  useEffect(() => {
    const pinnedPanels = PanelRef.current;
    const totalCards = pinnedPanels.length;

    pinnedPanels.forEach((panel, i) => {
      const isLastCard = i === totalCards - 1;

      gsap.fromTo(
        panel,
        { scale: 1, y: i * -5 },
        {
          scale: isLastCard ? 1 : 0.9,
          y: isLastCard ? (totalCards * 5) / 1 : i * -5,
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            endTrigger: endTrigger.current,
            end: "center bottom",
            pin: false,
            pinSpacing: false,
            scrub: 1,
          },
        }
      );
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: endTrigger.current,
        start: "top top",
        end: "center center",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='CardStack_main_legacy_services flex flex-col justify-center items-center lg:py-0 bg-inherit'>
      <div className='s_wrapper !pb-0 !pt-0'>
        {/* CARD 1: Legacy */}
        <div
          className="card__div one lg:mb-20 mb-10 grid grid-cols-3 gap-6 px-6 py-6 relative bg-cover bg-left bg-[url('/images/legal/legacy.jpg')] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#ffffffe0] before:to-transparent before:z-10 overflow-hidden"
          ref={(el) => (PanelRef.current[0] = el)}
        >
          {/* Text Content */}
          <div className='col-span-2 flex flex-col justify-center md:pl-10 h-[350px] z-20 text-black'>
            <h2 className='text-xl mb-4 md:text-3xl font-medium'>
              Wasim Siddiqui
            </h2>
            <p className='text-justify md:text-start'>
              With over 30 years of experience in litigation and advisory roles,
              Wasim Khan is a veteran of the legal profession. From handling
              high-profile civil disputes to offering strategic criminal
              defense, his career has been built on trust, ethical clarity, and
              excellence.
              <br />
              Known for his calm presence and deep domain knowledge, he has
              mentored many in the legal field while continually advocating for
              fairness in every case he takes on. His legacy is the foundation
              upon which the firm's reputation stands today.
            </p>
          </div>

          {/* Image on Right */}
          <div className='col-span-1 flex justify-center items-center z-20'>
            <img
              src='https://sps.widyatama.ac.id/wp-content/uploads/2020/08/dummy-profile-pic-male1.jpg'
              alt='Wasim Khan'
              className='h-[300px] w-auto object-cover rounded-xl shadow-md'
            />
          </div>
        </div>

        {/* CARD 2: Client-Centered Advocacy */}
        <div
          className="card__div two grid grid-cols-3 gap-6 px-6 py-6 relative bg-cover md:bg-center bg-[url('/images/legal/client-centric.jpg')] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-l before:from-[#ffffffe0] before:to-transparent before:z-10 overflow-hidden lg:mb-20 mb-10"
          ref={(el) => (PanelRef.current[1] = el)}
        >
          {/* Image on Right */}
          <div className='col-span-1 flex justify-center items-center z-20'>
            <img
              src='https://sps.widyatama.ac.id/wp-content/uploads/2020/08/dummy-profile-pic-male1.jpg'
              alt='Wasim Khan'
              className='h-[300px] w-auto object-cover rounded-xl shadow-md'
            />
          </div>
          {/* Text Content */}
          <div className='col-span-2 flex flex-col justify-center md:pl-10 h-[350px] z-20 text-black'>
            <h2 className='text-xl mb-4 md:text-3xl font-medium'>
              Asim Siddiqui
            </h2>
            <p className='text-justify md:text-start'>
              With over 30 years of experience in litigation and advisory roles,
              Wasim Khan is a veteran of the legal profession. From handling
              high-profile civil disputes to offering strategic criminal
              defense, his career has been built on trust, ethical clarity, and
              excellence.
              <br />
              Known for his calm presence and deep domain knowledge, he has
              mentored many in the legal field while continually advocating for
              fairness in every case he takes on. His legacy is the foundation
              upon which the firm's reputation stands today.
            </p>
          </div>
        </div>

        {/* CARD 3: Expertise */}
        <div
          className="card__div three grid grid-cols-3 gap-6 px-6 py-6 relative bg-cover bg-left bg-[url('/images/legal/expertise.jpg')] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#ffffffe0] before:to-transparent before:z-10 overflow-hidden"
          ref={(el) => (PanelRef.current[2] = el)}
        >
          {/* Text Content */}
          <div className='col-span-2 flex flex-col justify-center md:pl-10 h-[350px] z-20 text-black'>
            <h2 className='text-xl mb-4 md:text-xl font-medium'>
              Anas Siddiqui
            </h2>
            <p className='text-justify md:text-start'>
              With over 30 years of experience in litigation and advisory roles,
              Wasim Khan is a veteran of the legal profession. From handling
              high-profile civil disputes to offering strategic criminal
              defense, his career has been built on trust, ethical clarity, and
              excellence.
              <br />
              Known for his calm presence and deep domain knowledge, he has
              mentored many in the legal field while continually advocating for
              fairness in every case he takes on. His legacy is the foundation
              upon which the firm's reputation stands today.
            </p>
          </div>

          {/* Image on Right */}
          <div className='col-span-1 flex justify-center items-center z-20'>
            <img
              src='https://sps.widyatama.ac.id/wp-content/uploads/2020/08/dummy-profile-pic-male1.jpg'
              alt='Wasim Khan'
              className='h-[300px] w-auto object-cover rounded-xl shadow-md'
            />
          </div>
        </div>

        {/* END DUMMY CARD FOR STACK EFFECT */}
        <div
          className='card__div dummy'
          style={{ visibility: "hidden", height: "0vh" }}
          ref={(el) => (PanelRef.current[3] = el)}
        >
          Hidden Spacer
        </div>

        <div className='end-pin' ref={endTrigger}></div>
      </div>
    </div>
  );
};

export default CardStacking;

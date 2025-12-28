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
      const isSecondLastCard = i === totalCards - 2;

      gsap.fromTo(
        panel,
        {
          scale: 1, // Initial scale (no shrink)
          y: i * -5, // Initial position
        },
        {
          scale: isLastCard ? 1 : 0.9, // Final scale (shrink for non-last cards)
          y: isLastCard
            ? (totalCards * 5) / 1 // Overlap effect for the last card
            : i * -5, // Normal stacking for other cards
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            endTrigger: endTrigger.current,
            end: "center bottom",
            pin: false, // Pin all cards
            pinSpacing: false,
            scrub: 1, // Smooth scroll effect
            id: i + 1,
            markers: false, // Optional: Add markers to see scroll positions
            // onUpdate: (self) => {
            //   if (self.progress === 1) {
            //     gsap.to(panel, { scale: 1 }); // Reset scale when all cards are stacked
            //   }
            // },
          },
        }
      );
    });

    // Handle the removal of pinning once the last card is fully in view
    gsap.timeline({
      scrollTrigger: {
        trigger: endTrigger.current,
        start: "top top",
        end: "center center",
        pin: true,
        pinSpacing: false,
        scrub: 1,
        // onLeave: () => {
        //   // Remove pinning once the last card is fully in view
        //   gsap.set(endTrigger.current, { pin: false });
        // },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='CardStack_main_legacy_services flex flex-col justify-center items-center lg:py-0 bg-inherit'>
      {/* =================================================================================================  */}
      <div className='!pb-0 !pt-0'>
        {/* CARD ONE - Left to Right Gradient */}

        <div
          className="card__div one lg:mb-20 mb-10 md:grid grid-cols-3 gap-6 px-6 py-6 relative bg-cover bg-left bg-[url('/images/home/w-bg.jpg')] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#18293ce0] before:to-[#000000be]  before:z-10 overflow-hidden w-full "
          ref={(el) => (PanelRef.current[0] = el)}
        >
          {/* Text Content */}
          <div className='col-span-2 flex flex-col md:justify-center md:pl-10 h-[350px] z-20 text-white'>
            <h2 className='text-xl my-1 md:mb-4 md:text-3xl font-medium'>
              Adv. Waseem Ahmed Siddiqui
            </h2>
            <span className='text-base md:mb-4 md:text-xl font-medium'>
              Founder & Principal Advocate
            </span>
            <p className='text-justify md:text-start'>
              Advocate Waseem Ahmed Siddiqui is the Founder and guiding force
              behind W & A Legal Associates, with over 25+ years of extensive
              legal experience. He built the firm on the principles of
              discipline, ethical legal practice, and service to society,
              beginning his professional journey with social legal work for
              underrepresented individuals and later establishing a respected
              full-service legal practice.
            </p>
          </div>
        </div>

        {/* CARD TWO - Right to Left Gradient */}

        <div
          className="card__div two md:grid lg:mb-20 mb-10 grid-cols-3 gap-6 px-6 py-6 relative bg-cover md:bg-center bg-[url('/images/home/as-bg.jpg')] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-l before:from-[#862a35cf]  before:to-[#000000a9]  before:z-10 overflow-hidden before:rotate-180 md:before:rotate-0 flex flex-col"
          ref={(el) => (PanelRef.current[1] = el)}
        >
          {/* Image on Right */}
          <div className='col-span-1 flex justify-center items-center z-20 invisible'>
            <img
              src='https://sps.widyatama.ac.id/wp-content/uploads/2020/08/dummy-profile-pic-male1.jpg'
              alt='Asim Waseem Siddiqui'
              className='h-[250px] md:h-[300px] w-auto object-cover rounded-xl shadow-md'
            />
          </div>
          {/* Text Content */}
          <div className='col-span-2 flex flex-col md:justify-center md:pl-10 h-[350px] z-20 text-white'>
            <h2 className='text-xl my-1 md:mb-4 md:text-3xl font-medium'>
              Adv. Asim Waseem Siddiqui
            </h2>
            <span className='text-base md:mb-4 md:text-xl font-medium'>
              Partner & Advocate
            </span>
            <p className='text-justify md:text-start'>
              Advocate Asim Waseem Siddiqui represents the second generation of
              leadership at W & A Legal Associates, playing a key role in
              strengthening legal operations, drafting, litigation strategy, and
              client advisory with a modern and structured approach to legal
              practice.
            </p>
          </div>
        </div>
        {/* CARD Three - Left to Right Gradient */}

        <div
          className="card__div one lg:mb-20 mb-10 md:grid grid-cols-3 gap-6 px-6 py-6 relative bg-cover bg-left bg-[url('/images/home/an-bg.jpeg')] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#18293cee] before:to-[#000000b6]  before:z-10 overflow-hidden flex flex-col-reverse"
          ref={(el) => (PanelRef.current[2] = el)}
        >
          {/* Text Content */}
          <div className='col-span-2 flex flex-col md:justify-center md:pl-10 h-[350px] z-20 text-white'>
            <h2 className='text-xl my-1 md:mb-4 md:text-3xl font-medium'>
              Mohammed Anas Rahil Qamar Siddiqui
            </h2>
            <span className='text-base md:mb-4 md:text-xl font-medium'>
              Operations & Client Relations Head
            </span>
            <p className='text-justify md:text-start'>
              Mohammed Anas Rahil Qamar Siddiqui manages the operational and
              client-facing functions of W & A Legal Associates, ensuring smooth
              coordination, transparent communication, and efficient handling of
              matters from consultation through resolution.
            </p>
          </div>

          {/* Image on Right */}
          <div className='col-span-1 flex justify-center items-center z-20 invisible'>
            <img
              src='https://sps.widyatama.ac.id/wp-content/uploads/2020/08/dummy-profile-pic-male1.jpg'
              alt='Anas Rahil Qamar Siddiqui'
              className='h-[250px] md:h-[300px] w-auto object-cover rounded-xl shadow-md'
            />
          </div>
        </div>
        {/* ===============================================================================================================  */}

        {/* ===============================================================================================================  */}
        <div
          className='card__div six'
          style={{ visibility: "hidden", height: "0vh" }}
          ref={(el) => (PanelRef.current[2] = el)}
        >
          Card 7
        </div>
        <div className='end-pin' ref={endTrigger}></div>
      </div>
    </div>
  );
};

export default CardStacking;

"use client";

import "./CardStacking.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardStackingMobile = () => {
  const PanelRef = useRef([]);
  const endTrigger = useRef(null);

  useEffect(() => {
    const pinnedPanels = PanelRef.current;
    const totalCards = pinnedPanels.length;

    pinnedPanels.forEach((panel, i) => {
      if (!panel) return;

      const isLastCard = i === totalCards - 1;

      gsap.fromTo(
        panel,
        {
          scale: 1,
          y: i * -5,
        },
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
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className='CardStack_main_legacy_services flex flex-col items-center bg-inherit'>
      <div className='w-full'>
        {/* ================= CARD 1 ================= */}
        <div
          ref={(el) => (PanelRef.current[0] = el)}
          className="card__div one mb-10 lg:mb-20 md:grid grid-cols-3 gap-6 px-6 py-6 relative bg-cover bg-left
          bg-[url('https://t3.ftcdn.net/jpg/04/45/40/12/360_F_445401212_PEDNESWvENUbesA25i8E42auVqffefxY.jpg')]
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#18293ce0] before:to-[#000000be]
          before:z-10 overflow-hidden"
        >
          <div className='col-span-2 flex flex-col items-center md:items-start md:justify-center md:pl-10 relative z-20 text-white h-max py-8 '>
            <h2 className='text-xl md:text-3xl font-medium text-center md:text-left mb-1 md:mb-4'>
              Adv. Waseem Ahmed Siddiqui
            </h2>

            <span className='text-base md:text-xl font-medium text-center md:text-left mb-3 md:mb-4'>
              Founder & Principal Advocate
            </span>

            <p className='text-center md:text-left'>
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

        {/* ================= CARD 2 ================= */}
        <div
          ref={(el) => (PanelRef.current[1] = el)}
          className="card__div two mb-10 lg:mb-20 md:grid grid-cols-3 gap-6 px-6 py-6 relative bg-cover bg-center
          bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6ZG3jaV2OrB-jn_jDWuou0rLf-ExBmVya1lE1r93eOppKV4xJXc3nE-WDoPwgP4ESLo&usqp=CAU')]
          before:absolute before:inset-0 before:bg-gradient-to-l before:from-[#862a35cf] before:to-[#000000a9]
          before:z-10 overflow-hidden"
        >
          <div className='col-span-2 flex flex-col items-center md:items-start md:justify-center md:pl-10 h-max py-8 relative z-20 text-white'>
            <h2 className='text-xl md:text-3xl font-medium text-center md:text-left mb-1 md:mb-4'>
              Adv. Asim Waseem Siddiqui
            </h2>

            <span className='text-base md:text-xl font-medium text-center md:text-left mb-3 md:mb-4'>
              Partner & Advocate
            </span>

            <p className='text-center md:text-left'>
              Advocate Asim Waseem Siddiqui represents the second generation of
              leadership at W & A Legal Associates, with focused experience in
              modern legal practice since joining the profession in 2018. He
              contributes to the firm through structured legal drafting,
              litigation support, and client advisory, strengthening operations
              while delivering practical, precise, and enforceable legal
              solutions.
            </p>
          </div>
        </div>

        {/* ================= CARD 3 ================= */}
        <div
          ref={(el) => (PanelRef.current[2] = el)}
          className="card__div one mb-10 lg:mb-20 md:grid grid-cols-3 gap-6 px-6 py-6 relative bg-cover bg-left
          bg-[url('https://images.pexels.com/photos/6077297/pexels-photo-6077297.jpeg')]
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#18293cee] before:to-[#000000b6]
          before:z-10 overflow-hidden"
        >
          <div className='col-span-2 flex flex-col items-center md:items-start md:justify-center md:pl-10 h-max py-8 relative z-20 text-white'>
            <h2 className='text-xl md:text-3xl font-medium text-center md:text-left mb-1 md:mb-4'>
              Mohammed Anas Rahil Qamar Siddiqui
            </h2>

            <span className='text-base md:text-xl font-medium text-center md:text-left mb-3 md:mb-4'>
              Operations & Client Relations Head
            </span>

            <p className='text-center md:text-left'>
              Mohammed Anas Rahil Qamar Siddiqui manages the operational and
              client-facing functions of W & A Legal Associates, ensuring smooth
              coordination and effective execution across matters. Associated
              with the firm since 2020, he plays a key role in administration,
              client communication, and workflow management, supporting timely
              and transparent legal service delivery.
            </p>
          </div>
        </div>

        {/* END PIN */}
        <div ref={endTrigger} className='end-pin h-[1px]' />
      </div>
    </div>
  );
};

export default CardStackingMobile;

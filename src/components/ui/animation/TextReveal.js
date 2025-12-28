"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ htmlText = "", className = "" }) => {
  const containerRef = useRef(null);

  // Function to split text into lines manually
  const splitTextIntoLines = () => {
    const container = containerRef.current;
    if (!container) return;

    // Clean previous content
    container.innerHTML = "";

    // Wrap each line in a div (split manually by <br>)
    const lines = htmlText.split("<br>").map((line, index) => {
      const div = document.createElement("div");
      div.className = "text-line bg-clip-text text-transparent";
      div.innerHTML = line;
      div.setAttribute("data-line", index);
      container.appendChild(div);
      return div;
    });

    return lines;
  };

  const setupAnimation = () => {
    const lines = splitTextIntoLines();

    // Kill existing triggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Animate each line
    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { backgroundPositionX: "100%" },
        {
          backgroundPositionX: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "bottom center",
            scrub: true,
            markers: false, // change to true for debug
          },
        }
      );
    });
  };

  useEffect(() => {
    setupAnimation();

    // Re-apply animation on resize
    const handleResize = () => {
      setupAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [htmlText]);

  return (
    <>
    
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
    />
    <style>
{`.text-line {
  background: linear-gradient(to right, #fff 50%, rgba(255, 255, 255, 0.2) 50%);
  background-size: 200% 100%;
  background-position-x: 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  line-height: 1.2;
  display: block;
  `}
    </style>
    </>
  );
};

export default TextReveal;

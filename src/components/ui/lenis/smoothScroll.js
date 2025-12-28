"use client"; // Ensure it's a client component

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Adjust the scroll speed (higher = slower)
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth easing function
      smoothWheel: true, // Enables smooth mouse scrolling
      smoothTouch: true, // Enables smooth touch scrolling
      infinite: false, // Set to true for continuous scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return null; // No UI, just functionality
};

export default SmoothScroll;

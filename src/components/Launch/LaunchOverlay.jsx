"use client";

import { useEffect, useState } from "react";
import "./LaunchOverlay.css";

export default function LaunchOverlay() {
  const launchTime = new Date("2026-01-01T00:00:00+05:30").getTime();

  const [visible, setVisible] = useState(Date.now() < launchTime);
  const [fadeOut, setFadeOut] = useState(false);
  const [timeLeft, setTimeLeft] = useState(launchTime - Date.now());

  // 🔒 Scroll lock (already working)
  useEffect(() => {
    if (visible) {
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || "0", 10));
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = launchTime - now;

      if (diff <= 0) {
        setFadeOut(true);
        clearInterval(interval);
        setTimeout(() => setVisible(false), 1200);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [visible, launchTime]);

  if (!visible) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className={`launchOverlay ${fadeOut ? "fadeOut" : ""}`}>
      <div className=''>
        {/* LOGO */}
        <img
          src='/images/logo/wandablack.jpeg'
          alt='W & A Legal Associates'
          className='launchLogo h-full max-h-18 md:max-h-32 w-auto mx-auto mb-8'
        />

        <p className='launchTitle'>Website Launching In</p>

        {/* TIMER */}
        <div className='grid grid-cols-2 md:grid-cols-4 justify-center mb-8 launchTimer'>
          <div className='timeBlock'>
            <span>{String(days).padStart(2, "0")}</span>
            <small>Days</small>
          </div>
          <div className='timeBlock'>
            <span>{String(hours).padStart(2, "0")}</span>
            <small>Hours</small>
          </div>
          <div className='timeBlock'>
            <span>{String(minutes).padStart(2, "0")}</span>
            <small>Minutes</small>
          </div>
          <div className='timeBlock'>
            <span>{String(seconds).padStart(2, "0")}</span>
            <small>Seconds</small>
          </div>
        </div>

        {/* <p className='max-w-sm mx-auto text-sm md:text-base opacity-75 leading-relaxed'>
          Delivering trusted legal expertise with integrity and professionalism.
        </p> */}
      </div>
    </div>
  );
}

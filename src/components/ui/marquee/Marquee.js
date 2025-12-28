// components/Marquee.js
"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const horizontalLoop = (items, config = {}) => {
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  return tl;
};

const Marquee = () => {
  const containerRef = useRef();
  const headingRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = horizontalLoop(headingRefs.current, {
        repeat: -1,
      });

      let speedTween;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "top top",
        onUpdate: (self) => {
          speedTween && speedTween.kill();
          speedTween = gsap.timeline()
            .to(tl, {
              timeScale: 3 * self.direction,
              duration: 0.25,
            })
            .to(
              tl,
              {
                timeScale: 1 * self.direction,
                duration: 1.5,
              },
              "+=0.5"
            );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-[20px] bg-black overflow-hidden flex items-center"
    >
      <div className="flex rail">
      {new Array(10).fill("Lorem Ipsum Sit Dolor").map((text, i) => (
  <h4
    key={i}
    ref={(el) => (headingRefs.current[i] = el)}
    className="text-white text-[12px] font-black whitespace-nowrap mx-8"
  >
    {text}
  </h4>
))}

      </div>
    </section>
  );
};

export default Marquee;

"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    skewY: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SkewFadeInWords = ({ text, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView,controls]);

  // Split lines by <br> or <br/>
  const lines = text.split(/<br\s*\/?>/i).filter(Boolean);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={`overflow-hidden flex flex-col gap-y-2 ${className}`}
    >
      {lines.map((line, lineIndex) => {
        const words = line.trim().split(" ");
        return (
          <div key={lineIndex} className="">
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                variants={wordVariants}
                className="inline-block mr-2 whitespace-nowrap pb-2"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </div>
        );
      })}
    </motion.div>
  );
};

export default SkewFadeInWords;

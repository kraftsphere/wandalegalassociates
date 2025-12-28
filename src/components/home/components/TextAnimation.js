"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const animationVariants = {
  fadeIn: {
    container: {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: i * 0.3 },
      }),
    },
    child: {
      visible: {
        opacity: 1,
        y: [0, -10, 0],
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: { opacity: 0, y: 10 },
    },
  },
  fadeInUp: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    },
    child: {
      visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      hidden: { opacity: 0, y: 20 },
    },
  },
  popIn: {
    container: {
      hidden: { scale: 0 },
      visible: {
        scale: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
      },
    },
    child: {
      visible: {
        opacity: 1,
        scale: 1.1,
        transition: { type: "spring", damping: 15, stiffness: 400 },
      },
      hidden: { opacity: 0, scale: 0 },
    },
  },
  calmInUp: {
    container: {
      hidden: {},
      visible: (i = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
      },
      visible: {
        y: 0,
        transition: {
          ease: [0.125, 0.92, 0.69, 0.975],
          duration: 1,
        },
      },
    },
  },
  shiftInUp: {
    container: {
      hidden: {},
      visible: (i = 1) => ({
        transition: { staggerChildren: 0.01, delayChildren: 0.2 * i },
      }),
    },
    child: {
      hidden: {
        y: "100%",
        transition: {
          ease: [0.75, 0, 0.25, 1],
          duration: 0.6,
        },
      },
      visible: {
        y: 0,
        transition: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  },
  whipInUp: {
    container: {
      hidden: {},
      visible: (i = 1) => ({
        transition: { staggerChildren: 0.02, delayChildren: 0.15 * i },
      }),
    },
    child: {
      hidden: {
        y: "150%",
        rotate: -10,
        opacity: 0,
        transition: {
          ease: [0.455, 0.03, 0.515, 0.955],
          duration: 0.65,
        },
      },
      visible: {
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
          ease: [0.22, 1, 0.36, 1],
          duration: 1,
        },
      },
    },
  },
};

const TextAnimation = ({ text, type = "fadeInUp", className }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView,controls]);

  const words = text.split(" ");
  const { container, child } = animationVariants[type];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      custom={1} // required for those using dynamic delayChildren (like fadeIn or calmInUp)
      className="overflow-hidden flex flex-wrap"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className={`inline-block mr-2 whitespace-nowrap ${className}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextAnimation;

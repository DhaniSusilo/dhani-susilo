/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { useEffect } from "react";
import logo from "../assets/logo.svg";

export const B = ({ children }) => {
  return <span className="font-bold opacity-100">{children}</span>;
};

export const TextShadow = ({ children }) => {
  return (
    <span style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
      {children}
    </span>
  );
};

export const LogoBg = ({ color, width, height }) => {
  return (
    <div
      style={{
        maskImage: `url(${logo})`,
        WebkitMaskImage: `url(${logo})`,
        backgroundColor: color,
        width: width,
        height: height,
        position: "absolute",
      }}
    />
  );
};

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const controls = useAnimation();
  const slide = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      slide.start("visible");
    } else {
      controls.start("hidden");
      slide.start("hidden");
    }
  }, [isInView]);

  return (
    <div className="relative w-fit h-fit overflow-hidden p-2" ref={ref}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: "110%",
          },
        }}
        initial="hidden"
        animate={slide}
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        style={{
          position: "absolute",
          background: "black",
          width: "100%",
          height: "100%",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          z: 10,
        }}
      />
    </div>
  );
};

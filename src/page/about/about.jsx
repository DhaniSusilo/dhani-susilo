/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { useEffect } from "react";

import { B, Reveal, TextShadow } from "../../minicomp/stylecomp";
import react from "../../assets/react.svg";
import c from "../../assets/c.png";
import figma from "../../assets/figma.png";
import nodejs from "../../assets/nodejs.png";
import unity from "../../assets/unity.png";
import postgresql from "../../assets/postgresql.png";

const About = () => {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center text-center p-5 font-jost relative overflow-hidden space-y-2 md:space-y-5 text-white"
      id="about"
    >
      <div className="text-3xl md:text-6xl">
        <Reveal>
          <TextShadow>
            <B>About Me</B>
          </TextShadow>
        </Reveal>
      </div>
      <div className="text-sm w-full md:text-lg md:w-3/4">
        <Reveal>
          <p>
            Hi!, my name is{" "}
            <TextShadow>
              <B>Dhani Susilo</B>
            </TextShadow>
            , I’m a passionate software developer and game enthusiast who loves
            turning ideas into reality with modern technologies! With expertise
            in{" "}
            <TextShadow>
              <B>React.js</B>
            </TextShadow>{" "}
            for crafting dynamic frontends,{" "}
            <TextShadow>
              <B>Node.js</B>
            </TextShadow>{" "}
            for robust backends, and
            <TextShadow>
              <B> PostgreSQL</B>
            </TextShadow>{" "}
            for reliable databases, I enjoy building applications that are both
            functional and delightful to use.
          </p>
        </Reveal>
        <Reveal>
          <p>
            In addition to web development, I have experience in game
            development using{" "}
            <TextShadow>
              <B>Unity</B>
            </TextShadow>{" "}
            and{" "}
            <TextShadow>
              <B>C#</B>
            </TextShadow>
            , where I bring immersive and interactive experiences to life.
            Whether it’s analyzing complex systems, integrating the latest
            technologies, or creating engaging games, I’m dedicated to
            delivering innovative, scalable, and user-focused solutions. Let’s
            build something amazing together! 🎮🚀
          </p>
        </Reveal>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="text-lg md:text-xl flex justify-center">
          <Reveal>
            <TextShadow>
              <B>My tech stacks</B>
            </TextShadow>
          </Reveal>
        </div>
        <div className="flex flex-wrap justify-center">
          <TechStack src={react} title={"ReactJs"} nth={0} />
          <TechStack src={nodejs} title={"NodeJs"} nth={1} />
          <TechStack src={postgresql} title={"PostgreSQL"} nth={2} />
          <TechStack src={unity} title={"Unity Game Engine"} nth={3} />
          <TechStack src={c} title={"C#"} nth={4} />
          <TechStack src={figma} title={"Figma"} nth={5} />
        </div>
      </div>
    </div>
  );
};

const TechStack = ({ src, title, nth }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);
  return (
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
      transition={{ duration: 0.2, delay: 0.1 * nth, ease: "easeInOut" }}
    >
      <div
        className="bg-white rounded-2xl m-2 p-2 w-[80px] md:w-[110px] hover:scale-125 transition-transform duration-300 shadow-black 
    shadow-lg flex"
        ref={ref}
      >
        <img src={src} alt="" className="w-full" title={title} />
      </div>
    </motion.div>
  );
};

export default About;

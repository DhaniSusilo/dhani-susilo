/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { useEffect } from "react";

import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { B, Reveal, TextShadow } from "../../minicomp/stylecomp";

const Contact = () => {
  // const style = { width: "100%", height: "auto" };
  return (
    <div className="w-full h-fit flex justify-center text-white" id="contact">
      <div className="w-full md:w-3/4 flex flex-col justify-center p-5 space-y-10">
        <div className="text-3xl w-full md:text-6xl flex justify-center">
          <Reveal>
            <TextShadow>
              <B>Contact Me</B>
            </TextShadow>
          </Reveal>
        </div>
        <div className="text-center flex justify-center">
          <Reveal>
            jika terdapat hal yang ingin disampaikan silahkan menghubungi saya
            melalui
          </Reveal>
        </div>
        <div className="w-full flex justify-center space-x-5 ">
          <SocialLink
            href="https://www.instagram.com/dhani.susilo/"
            IconComponent={Instagram}
            nth={0}
          />
          <SocialLink
            href="https://www.linkedin.com/in/dhani-susilo-781133236/"
            IconComponent={LinkedIn}
            nth={1}
          />
          <SocialLink
            href="https://github.com/DhaniSusilo"
            IconComponent={GitHub}
            nth={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

const SocialLink = ({ href, IconComponent, nth }) => {
  const style = { width: "100%", height: "auto" };

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
      className="w-1/6 sm:w-1/12"
      // whileHover={{ scale: 1.25 }}
      // transition={{ duration: 0.3 }}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
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
      <a
        href={href}
        className="block w-full h-full hover:scale-125 transition"
        ref={ref}
      >
        <IconComponent style={style} />
      </a>
    </motion.div>
  );
};

// const SocialLink = ({ href, IconComponent }) => {
//   const style = { width: "100%", height: "auto" };

//   return (
//     // <motion.div}>
//     <a
//       className="hover:scale-125 transition w-1/6 sm:w-1/12"
//       href={href}
//       // ref={ref}
//     >
//       <IconComponent style={style} />
//     </a>
//     // </motion.div>
//   );
// };

// const SocialLink = ({ href, IconComponent }) => {
//   const style = { width: "100%", height: "auto" };

//   return (
//     <motion.div
//       className="w-1/6 sm:w-1/12"
//       whileHover={{ scale: 1.25 }} // Adds hover scaling animation
//       transition={{ duration: 0.3 }}
//     >
//       <a
//         href={href}
//         className="block w-full h-full" // Ensures proper sizing
//       >
//         <IconComponent style={style} />
//       </a>
//     </motion.div>
//   );
// };

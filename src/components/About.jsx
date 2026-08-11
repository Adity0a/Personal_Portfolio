import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-[45%] flex-grow sm:flex-grow-0">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-5 sm:px-12 min-h-[200px] sm:min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        />

        <h3 className="text-white text-[16px] sm:text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const overviewText = `I'm a Full Stack Software App & Web Developer Student at Mumbai University with 2+ years of experience building enterprise-scale web applications, microservices, and cloud-native solutions. Proven success in reducing checkout abandonment by 15%, cutting debugging time by 50%, and delivering platforms with 99.9% uptime. Skilled in React Native, React, Node.js, AWS, PostgreSQL, and Redis, with hands-on experience across the software development lifecycle (SDLC), agile practices, and scalable architecture. Published researcher with a strong record of ML-based system design, secure payment integrations, and high-performance application development. Seeking opportunities to leverage full-stack and cloud expertise to build impactful, user-centric software solutions. Let's work together to bring your ideas to life!`;

  const truncatedText = overviewText.slice(0, 200) + "...";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="relative">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]"
        >
          {/* On mobile, show truncated text unless 'showFullText' is true */}
          <span className="sm:inline hidden">{overviewText}</span>
          <span className="sm:hidden inline">
            {showFullText ? overviewText : truncatedText}
          </span>
        </motion.p>

        {/* See More Button for Mobile */}
        <button
          onClick={() => setShowFullText(!showFullText)}
          className="sm:hidden mt-2 text-[#915EFF] font-bold py-1 px-2 rounded-lg bg-[#915EFF]/10 hover:bg-[#915EFF]/20 transition-all border border-[#915EFF]/30 text-[14px]"
        >
          {showFullText ? "See Less" : "See More"}
        </button>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-4 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import React, { useState, useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useScroll, useSpring } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [showMore, setShowMore] = useState(false);
  const isTruncated = experience.points.length > 2;
  const displayedPoints = showMore
    ? experience.points
    : experience.points.slice(0, 2);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 10px 40px -10px rgba(145,94,255,0.2)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {displayedPoints.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="relative mt-5 min-h-[20px] flex items-center justify-between sm:hidden">
        <p className="text-secondary text-[12px] font-medium">
          {experience.date}
        </p>
        {isTruncated && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#915EFF] font-bold text-[14px] hover:underline"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      {/* Custom Scrolling Timeline Line */}
      {!isMobile && (
        <motion.div
          style={{ scaleY }}
          className="absolute left-[50%] top-[150px] w-[4px] h-[80%] bg-gradient-to-b from-transparent via-[#915EFF] to-transparent origin-top z-[-1] hidden lg:block shadow-[0_0_15px_rgba(145,94,255,0.5)] -translate-x-[50%]"
        />
      )}

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={!isMobile}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");

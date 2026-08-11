import React, { useState, useRef, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { github, link } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectDetails from "./ProjectDetails";

const ProjectCard = React.forwardRef(({
  index,
  name,
  description,
  tags,
  image,
  video,
  source_code_link,
  demo_link,
  onClick,
  ...props
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(err => console.error("Video play failed:", err));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  const handleDescToggle = (e) => {
    e.stopPropagation();
    setShowFullDesc(!showFullDesc);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <Tilt
        options={{ max: 25, scale: 1.05, speed: 450 }}
        className="bg-tertiary p-4 rounded-2xl sm:w-[360px] w-full flex flex-col shadow-card hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm cursor-pointer group h-full"
      >
        <div
          className="relative w-full h-[180px] sm:h-[230px]"
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full h-full relative overflow-hidden rounded-2xl">
            {video ? (
              <>
                <video
                  ref={videoRef}
                  src={video}
                  muted
                  loop
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img
                  src={image}
                  alt={name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                />
              </>
            ) : (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl transition-opacity duration-300"
              />
            )}
          </div>

          <div className="absolute inset-0 flex justify-end m-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {demo_link && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(demo_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
                title="Live Demo"
              >
                <img
                  src={link}
                  alt="link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              title="Source Code"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <p className="text-white text-sm font-semibold">View Details</p>
             </div>
          </div>
        </div>

        <div className="mt-4 flex-1" onClick={onClick}>
          <h3 className="text-white font-bold text-[20px] sm:text-[24px] leading-[26px] sm:leading-[30px]">{name}</h3>
          <p className={`mt-2 text-secondary text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] ${!showFullDesc ? "line-clamp-2 sm:line-clamp-4" : ""}`}>
            {description}
          </p>
          <button
            onClick={handleDescToggle}
            className="text-[#915EFF] text-[12px] font-bold mt-1 hover:underline sm:hidden"
          >
            {showFullDesc ? "See Less" : "See More"}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" onClick={onClick}>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] font-medium ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
});

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const initialProjectCount = isMobile ? 3 : 6;
  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialProjectCount);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. Click on any project to see more details.
        </motion.p>
      </div>

      <motion.div
        layout
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
      >
        <AnimatePresence mode='popLayout'>
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length > initialProjectCount && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl border border-white/10 hover:bg-[#915EFF] transition-all duration-300"
          >
            {showAllProjects ? "See Less Projects" : "See All Projects"}
          </button>
        </div>
      )}

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");


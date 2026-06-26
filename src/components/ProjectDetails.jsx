import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { github, link, close } from "../assets";

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-tertiary w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-colors border border-white/10"
          >
            <img src={close} alt="close" className="w-6 h-6 object-contain" />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Project Media */}
            <div className="lg:w-1/2 relative h-[300px] lg:h-auto min-h-[300px] bg-black/20">
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-contain lg:object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-transparent lg:hidden pointer-events-none" />
            </div>

            {/* Project Info */}
            <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto max-h-[60vh] lg:max-h-[85vh]">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-white font-bold text-[32px] sm:text-[40px] leading-tight">
                  {project.name}
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`text-[14px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color}`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-white font-semibold text-[20px]">About the Project</h3>
                  <p className="mt-4 text-secondary text-[16px] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features or Tech Stack could be added here if available in data */}

                <div className="mt-12 flex flex-wrap gap-4">
                  {project.demo_link && (
                    <button
                      onClick={() => window.open(project.demo_link, "_blank")}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#915EFF] to-[#703fd1] rounded-xl text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-[#915EFF]/20"
                    >
                      <img src={link} alt="link" className="w-5 h-5 object-contain" />
                      Live Demo
                    </button>
                  )}
                  <button
                    onClick={() => window.open(project.source_code_link, "_blank")}
                    className="flex items-center gap-2 px-6 py-3 bg-[#0a0e17] border border-white/10 rounded-xl text-white font-bold hover:scale-105 transition-transform hover:bg-black/50"
                  >
                    <img src={github} alt="github" className="w-5 h-5 object-contain" />
                    Source Code
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetails;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { github, link, close } from "../assets";

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-hidden"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-tertiary w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col lg:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-[1010] p-1.5 bg-black/60 hover:bg-black/90 rounded-full transition-all border border-white/20 shadow-lg group"
          >
            <img
              src={close}
              alt="close"
              className="w-4 h-4 object-contain group-hover:rotate-90 transition-transform duration-300"
            />
          </button>

          {/* Project Media */}
          <div className="lg:w-1/2 relative h-[200px] sm:h-[250px] lg:h-auto bg-black/20 overflow-hidden">
            {project.video ? (
              <video
                src={project.video}
                controls
                autoPlay
                loop
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-contain bg-black"
              />
            )}
          </div>

          {/* Project Info */}
          <div className="lg:w-1/2 p-5 sm:p-8 flex flex-col overflow-hidden">
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-white font-bold text-[24px] sm:text-[30px] leading-tight pr-8">
                  {project.name}
                </h2>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 ${tag.color}`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="text-white font-semibold text-[16px]">About</h3>
                  <p className="mt-2 text-secondary text-[14px] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 mb-2 flex flex-wrap gap-3">
                  {project.demo_link && (
                    <button
                      onClick={() => window.open(project.demo_link, "_blank")}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#915EFF] to-[#703fd1] rounded-lg text-white font-bold text-[13px] hover:scale-105 transition-transform shadow-lg shadow-[#915EFF]/20"
                    >
                      <img src={link} alt="link" className="w-3.5 h-3.5 object-contain" />
                      Live Demo
                    </button>
                  )}
                  <button
                    onClick={() => window.open(project.source_code_link, "_blank")}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0a0e17] border border-white/10 rounded-lg text-white font-bold text-[13px] hover:scale-105 transition-transform hover:bg-black/50"
                  >
                    <img src={github} alt="github" className="w-3.5 h-3.5 object-contain" />
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

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { github, link, close } from "../assets";

const ProjectDetails = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      // Prevent scrolling on body
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      // Handle Escape key
      const handleEsc = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleEsc);

      return () => {
        // Restore scrolling on body
        document.body.style.overflow = originalStyle;
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  // Helper function to handle Google Drive and other video links
  const renderVideo = (url) => {
    if (!url) return null;

    if (url.includes("drive.google.com")) {
      // Convert standard sharing link to embed link
      const embedUrl = url.replace("/view?usp=sharing", "/preview").replace("/view", "/preview");
      return (
        <div className="w-full h-full bg-[#050816] flex items-center justify-center">
          <iframe
            src={embedUrl}
            className="w-full h-full border-none"
            allow="autoplay; fullscreen"
            title="Project Video"
            style={{ colorScheme: 'light' }}
          />
        </div>
      );
    }

    return (
      <video
        src={url}
        controls
        autoPlay
        loop
        playsInline
        className="w-full h-full object-contain bg-black"
      />
    );
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-[#000000]/90 overflow-hidden"
        onClick={onClose}
      >
        {/* Close Button - Enhanced visibility with brand color */}
        <button
          onClick={onClose}
          className="fixed top-5 right-5 z-[1050] p-2.5 bg-[#915EFF] hover:bg-[#703fd1] rounded-full transition-all border-2 border-white/40 shadow-[0_0_15px_rgba(145,94,255,0.5)] group"
        >
          <img
            src={close}
            alt="close"
            className="w-5 h-5 lg:w-4 lg:h-4 object-contain group-hover:rotate-90 transition-transform duration-300"
          />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-tertiary w-full max-w-4xl max-h-[90vh] lg:max-h-[85vh] rounded-2xl overflow-y-auto lg:overflow-hidden shadow-2xl border border-white/10 flex flex-col lg:flex-row custom-scrollbar z-[1000]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Project Media */}
          <div className="lg:w-1/2 relative w-full aspect-video lg:aspect-auto lg:min-h-[400px] bg-primary overflow-hidden flex-shrink-0 flex items-center justify-center">
            {project.video ? (
              renderVideo(project.video)
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

                {/* Secondary Close Button */}
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                  <button
                    onClick={onClose}
                    className="text-secondary hover:text-white text-[14px] font-medium transition-colors flex items-center gap-2"
                  >
                    <span>Close Details</span>
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

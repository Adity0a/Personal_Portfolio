import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import profile from "../assets/Aditya.jpeg";

const roles = ["Software Developer", "Web Developer", "Content Creator"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing effect logic
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 2000);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-hero-pattern bg-cover bg-no-repeat bg-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#915EFF"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Blobs for Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#915EFF] opacity-20 blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#1CD8D2] opacity-10 blur-[120px] animate-pulse delay-1000" />
      </div>

      <div
        className={`relative z-10 h-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-8 pt-[120px]`}
      >
        {/* Vertical Progress/Indicator Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_15px_rgba(145,94,255,0.7)]"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "24rem" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-1 violet-gradient origin-top"
          />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Typing Role Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-2"
            >
              <h3 className="text-white font-semibold text-[20px] sm:text-[24px] md:text-[28px] tracking-[4px] uppercase opacity-90">
                {roles[index].substring(0, subIndex)}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[3px] ml-1 bg-[#915EFF] align-baseline"
                  style={{ height: "0.9em" }}
                />
              </h3>
            </motion.div>

            {/* Main Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
                Hi, I'm <br className="sm:block hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] via-[#b694ff] to-[#1CD8D2] drop-shadow-sm">
                  Aditya Mishra
                </span>
              </h1>
            </motion.div>

            {/* Subtext Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-4 text-[#dfd9ff] font-medium lg:text-[22px] sm:text-[18px] xs:text-[14px] text-[12px] leading-relaxed max-w-lg"
            >
              I build scalable architectures and pixel-perfect interfaces,{" "}
              <br className="hidden md:block" />
              turning complex problems into elegant software solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(145,94,255,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-10 py-4 rounded-2xl text-lg font-bold text-white bg-gradient-to-br from-[#915EFF] to-[#703fd1] transition-all"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(145,94,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                href="/public/Aaditya_Resume.PDF"
                download
                className="px-10 py-4 rounded-2xl text-lg font-bold text-white border-2 border-[#915EFF] transition-all"
              >
                Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-full w-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#1CD8D2] rounded-full blur-3xl opacity-20 animate-pulse" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-[#915EFF]/50 p-2 overflow-hidden shadow-[0_0_50px_rgba(145,94,255,0.3)] bg-[#050816]">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/500?text=Aditya+Mishra";
                  }}
                />
              </div>

              {/* Rotating Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-[#915EFF]/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-50 hover:opacity-100 transition-all duration-300">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

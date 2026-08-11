import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import profile from "../assets/Aditya.jpeg";
import { stats, socialLinks } from "../constants";

const roles = ["Software Developer", "Web Developer", "Full-Stack Developer"];

const TypingRole = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <h3 className="text-white font-semibold text-[16px] sm:text-[22px] md:text-[26px] tracking-[2px] sm:tracking-[4px] uppercase opacity-90 inline-flex items-center min-h-[1.5em] whitespace-nowrap">
      {roles[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] sm:w-[3px] ml-1 bg-[#915EFF] align-baseline"
        style={{ height: "0.9em" }}
      />
    </h3>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-center">
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
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#915EFF] opacity-20 blur-[100px] animate-pulse will-change-transform transform-gpu" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#1CD8D2] opacity-10 blur-[120px] animate-pulse delay-1000 will-change-transform transform-gpu" />
      </div>

      <div
        className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4 sm:gap-8 pt-[100px] pb-5 sm:pb-20`}
      >
        {/* Vertical Progress/Indicator Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF] shadow-[0_0_15px_rgba(145,94,255,0.7)]"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "18rem" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-1 violet-gradient origin-top"
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 min-h-[70vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center lg:items-start lg:text-left text-center mt-2 max-w-full">
            {/* Typing Role Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-2 w-full lg:w-auto overflow-hidden"
            >
              <TypingRole roles={roles} />
            </motion.div>

            {/* Main Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-auto"
            >
              <h1 className="font-black text-white text-[32px] xs:text-[40px] sm:text-[50px] lg:text-[60px] leading-tight">
                Hi, I'm <br className="lg:block hidden" />
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
              className="mt-4 text-[#dfd9ff] font-medium text-[14px] sm:text-[18px] lg:text-[20px] leading-relaxed max-w-lg mx-auto lg:mx-0 lg:text-left text-center"
            >
              I build scalable architectures and pixel-perfect interfaces,{" "}
              <br className="hidden md:block" />
              turning complex problems into elegant software solutions.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-5 w-full lg:w-auto"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#915EFF] hover:border-transparent transition-all duration-300 group shadow-md"
                >
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 invert brightness-0 grayscale-0"
                  />
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-10 flex flex-row items-center justify-center lg:justify-start gap-4 w-full lg:w-auto"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(145,94,255,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 sm:px-8 py-3 rounded-xl text-[14px] sm:text-md font-bold text-white bg-gradient-to-br from-[#915EFF] to-[#703fd1] transition-all text-center whitespace-nowrap"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(145,94,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1OMGpxKEkJlpXnUi1oCYDAa93SDAmf0cm/view?usp=sharing"
                className="px-6 sm:px-8 py-3 rounded-xl text-[14px] sm:text-md font-bold text-white border-2 border-[#915EFF] transition-all text-center whitespace-nowrap"
              >
                Resume
              </motion.a>
            </motion.div>
            
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <div className="relative w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px]">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#1CD8D2] rounded-full blur-3xl opacity-20 animate-pulse will-change-transform transform-gpu" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full border-[6px] border-[#915EFF]/40 p-3 overflow-hidden shadow-[0_0_60px_rgba(145,94,255,0.25)] bg-[#050816]">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/500?text=Aditya+Mishra";
                  }}
                />
              </div>

              {/* Glowing Outer Ring */}
              <div className="absolute -inset-2 border-2 border-[#915EFF]/20 rounded-full" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border border-dashed border-[#915EFF]/20 rounded-full backface-visibility-hidden will-change-transform transform-gpu"
              />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

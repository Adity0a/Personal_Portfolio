import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  const words = ["build", "develop", "create"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <footer className="w-full relative overflow-hidden bg-primary text-white pt-20 pb-16">
      {/* background oversized name */}
      <div className="pointer-events-none absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[22vw] sm:text-[18vw] md:text-[13vw] font-extrabold text-white opacity-5 tracking-widest select-none">
        ADITYA
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white font-bold leading-tight text-5xl md:text-7xl lg:text-8xl">
          Lets{" "}
          <span className="text-secondary inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[idx]}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
                aria-live="polite"
              >
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          <br /> incredible work together.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-start">
          <div>
            <p className="text-sm text-secondary">Email</p>
            <a
              href="mailto:adityamishra1339@gmail.com"
              className="block mt-2 text-lg font-medium hover:text-secondary transition"
            >
              adityamishra1339@gmail.com
            </a>
          </div>

          {/* empty spacer column on md+ so social sits in the right-most column */}
          <div className="hidden md:block" />

          <div className="flex justify-end">
            <div className="inline-flex flex-col items-center">
              <p className="text-sm text-secondary">Social Links</p>
              <div className="flex items-center space-x-3 mt-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue p-2 rounded-full w-10 h-10 flex items-center justify-center hover:scale-105 transition"
                  >
                    <img
                      src={link.icon || logo}
                      alt={link.label}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = logo;
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8" />

        <div className="flex items-center justify-center text-sm text-secondary">
          {/* <p>
            Based in <strong className="text-white">Boston, MA</strong>
          </p> */}

          <p className="text-right">
            &copy; {new Date().getFullYear()} Aditya Mishra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

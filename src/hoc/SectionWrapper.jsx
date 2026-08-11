import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0 }}
        className={`${styles.paddingX} ${idName === "about" ? "pt-0 sm:pt-16" : "pt-16"} pb-10 sm:pb-16 max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <span className='hash-span'>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const FeedbackCard = ({ index, title, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-8 rounded-3xl w-full flex flex-col h-full border border-white/10 backdrop-blur-sm shadow-card hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex-1">
      <h3 className="text-white font-bold text-[20px] leading-[26px] mb-4">{title}</h3>
      <p className="text-secondary text-[14px] leading-[22px] italic">
        {designation} {company}
      </p>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient font-bold text-lg">@</span> {name}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100/50 rounded-[20px] overflow-hidden">
      <div
        className={`${styles.padding} bg-tertiary/20 rounded-2xl min-h-[250px] flex flex-col justify-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What Highlights My Journey</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-10 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7`}>
        {achievements.map((achievement, index) => (
          <FeedbackCard key={achievement.name} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;

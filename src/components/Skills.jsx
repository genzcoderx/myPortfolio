import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import SectionWrapper  from "../wrapper/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[190px] w-full min-[250px]:w-[130px]' >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 md:min-h-[190px] min-h-[140px] min-[250px]:h-[100px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-14 h-14 object-contain'
        />

        <h3 className='text-white md:text-[16px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {
  return (
    < >
      <motion.div variants={textVariant()}
        className="min-[200px]:mt-40 xs:mt-0"
      >
        <p className={styles.sectionSubText}>Technologies That I Know</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        These're the technologies that i know, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dicta praesentium culpa, pariatur et eum, aliquid rerum quo provident architecto enim non vero. Vitae magnam perspiciatis facere odit, ratione expedita.
      </motion.p>

      <div className='w-full mt-20 flex flex-wrap gap-2 xs:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
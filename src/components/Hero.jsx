import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../wrapper/SectionWrapper";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className={`relative w-full mx-auto mt-6`} style={{height:"90vh"}}>
      <div
        className={`absolute inset-0 top-[25px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-96 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white font-bold`}>
            Hi, I'm <span className="text-violet-400">Mohit Singh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 md:flex hidden`}>
            Simply Perfection Doesn't Exists!!
          </p>
        </div>
      </div>

      <div className="absolute top-[250px] left-2 md:left-28 z-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my corrner of the internet. I,m glad that you're here!{" "}
          <br />
          I'm a developer based in Bihar, India. I design code beautifully{" "}
          <br /> and simple things, and I love what i do.
          <br />
          <br />
          I'm a MERN Stack Developer with experience in JavaScript, and
          expertise <br /> in frameworks like React, Node.js, and Express.js.
          I'm a quick learner and <br /> collaborate closely with clients to
          create efficient, scalable, and user-friendly <br /> solutions that
          solve real-world problems. Let's work together to bring <br /> your
          ideas to life!
          <span className="md:flex hidden gap-4 transition-all duration-300 mt-8">
            <a
              href="https://www.instagram.com/genzcoder/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              target="_blank"
              className="flex gap-2 items-center ml-2 my-2 hover:text-white transition-all duration-200"
            >
              <Instagram />
              
            </a>
            <a
              href="https://github.com/genzcoderx"
              target="_blank"
              className="flex gap-2 items-center ml-2 my-2 hover:text-white transition-all duration-200 "
            >
              <Github />
            </a><a
              href="#"
              // target="_blank"
              className="flex gap-2 items-center ml-2 my-2 hover:text-white transition-all duration-200 "
            >
              <Twitter />
            </a><a
              href="#"
              // target="_blank"
              className="flex gap-2 items-center ml-2 my-2 hover:text-white transition-all duration-200 "
            >
              <Linkedin />
            </a>
          </span>
        </motion.p>
      </div>

      <img
        src="hero2.png"
        alt=""
        className="absolute top-[280px] left-[500px] w-4/5 opacity-70 md:flex hidden"
      />
    </section>
  );
};

export default SectionWrapper(Hero, "");

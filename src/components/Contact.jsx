import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Instagram, Github, Twitter, Linkedin } from "lucide-react";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../wrapper/SectionWrapper";
import { slideIn } from "../utils/motion";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_REACT_SERVICE_ID,
        import.meta.env.VITE_REACT_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mohit Singh",
          from_email: form.email,
          to_email: "genzcoderxservices@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_REACT_PUBLIC_ID,
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Sent Successfully!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Something Went Wrong.");
          console.error(error);
        }
      );
  };

  return (
    <div
      className={`md:w-[70rem] xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl mr-48 w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <div className=" absolute left-[850px] top-[250px] md:flex hidden">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Contact Us</p>
          <h2 className={styles.sectionHeadText}>
            Get In <span className="text-violet-400">Touch</span>
          </h2>
          <h3 className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            We genuinely care about you and wellbeing. <br /> Let us know how we
            can serve you better.
            <br /> If you'd like to know more about my work or proccess feel
            free to get touch.Email us with any questions or inquiries.We would
            happy to answer your questions and try to response to your questions
            and inquiries as soon as possible.
          </h3>
          <p className={`${styles.sectionSubText} mt-8`}>Socail_Links : </p>
          <h3 className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] transition-all duration-300 ">
            <a
              href="https://www.instagram.com/genzcoder/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              target="_blank"
              className="flex gap-2 items-center ml-2 my-2 hover:text-white transition-all duration-200"
            >
              <Instagram />
              Instagram
            </a>
            <a
              href="https://github.com/genzcoder"
              target="_blank"
              className="flex gap-2 items-center ml-2 my-2 hover:text-white transition-all duration-200 "
            >
              <Github />
              GitHub
            </a>
            <a
              href="#"
              className="flex gap-2 items-center ml-2 my-2 hover:text-white transition-all duration-200"
            >
              <Twitter />
              Twitter
            </a>
            <a
              href="#contact"
              className="flex gap-2 items-center ml-2 my-2 hover:text-white transition-all duration-200"
            >
              <Linkedin />
              Linkedin
            </a>
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

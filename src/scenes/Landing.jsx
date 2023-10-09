import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImage from '../Assets/profile-image.png';
import React from 'react';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <section id="home" className=" gap-16 py-10">
      <div className="flex justify-between items-center flex-wrap ">

        {/* IMAGE (Left side) */}
        <div className="mt-2">
          <img src={ProfileImage} alt='' className="w-130 h-130 rounded-full
          z- max-w-[600px] saturate-150" />
        </div>

        {/* CONTENT (Right side) */}
        <div className="z-30 basis-2/5b mt-12 md:mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <p className="text-6xl font-playfair z-10 text-center md:text-start">
              Hey, I'm <span className="xs:relative xs:font-semibold before:absolute before:-left-[40px] before:-top-[120px] before:z-[-1]">Imm</span>
            </p>
            <p className="mt-10 mb-7 text-sm text-center md:text-start ">
              Web Designer | UI/UX Enthusiast | Web Developer <br></br>
              "I'm a versatile web app designer, dedicated to crafting
              seamless<br></br> user experiences(UI/UX) and bringing
              them to life as a developer/programmer"
            </p>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <AnchorLink
              className="bg-gradient-rainblue text-black rounded-sm py-3 px-7 font-semibold
              hover:bg-blue-600 hover:text-white transition duration-500"
              href="#contact"
            >
              Contact Me
            </AnchorLink>
          </motion.div>
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

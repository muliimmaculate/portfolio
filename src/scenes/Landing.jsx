import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImage from '../assets/profile-image.png';
import React from 'react';


const Landing = () => {
  return (
    <section className="h-full max-h-[640px] mb- xl:mb-24">
      <div className="flex justify-between items-center">
        {/* IMAGE (Left side) */}
        <div className="lg:mr-8 xl:mr-[135px]">
          <img src={ProfileImage} alt='' className="w-150 h-120 rounded-full
           transition duration-500 z-10 max-w-[400px] saturate-200" />
        </div>
        {/* CONTENT (Right side) */}
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default Landing;

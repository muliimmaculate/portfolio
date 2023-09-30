import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImage from '../assets/profile-image.png';
import React from 'react';


const Landing = () => {
  return (
    <section className="h-full max-h-[640px] mb- xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        {/* IMAGE (Left side) */}
        <div className="lg:mr-8 xl:mr-[135px]">
          <img src={ProfileImage} alt='' className="w-150 h-120 rounded-full" />
        </div>
        {/* CONTENT (Right side) */}
        <div className="text-center lg:text-left px-4 lg:px-0">
          
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            Hello, I am <span>IMM</span>
          </h1>
          <p className="max-w-[480px] mb-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, 
          ratione repudiandae vel reprehenderit architecto voluptatum at,
          repellendus illo repellat autem ad! Assumenda magnam ut beatae error,
          dicta aliquam atque facilis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;

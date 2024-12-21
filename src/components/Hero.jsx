import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center border-2 border-white  bg-gray-800  py-16 px-4"
    
    >
      <motion.h1 className="text-4xl text-lime-400 font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >ShivaBook: Ultimate Betting Platform</motion.h1>
      <motion.p className="text-3xl italic font-semibold text-red-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Experience the best betting services with top-notch security and reliability.
      </motion.p>
    </div>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";
import img from "../assets/Images/1 52.png";
import bread from "../assets/Images/bread.png";
import pizza from "../assets/Images/pizza.png";
import drink from "../assets/Images/drink.png";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import green from "../assets/Images/green.png"
import blue from "../assets/Images/blue.png"
import purple from "../assets/Images/purple.png"
import yellow from "../assets/Images/yellow.png"

const DownloadCTA = () => {
  return (
    <div className="px-4 py-16">
      <motion.div
        className="relative bg-[#FB3333] rounded-[24px] p-16 mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={green} alt="green" className="absolute top-1/2 w-6 h-6"/>
        <img src={blue} alt="blue" className="absolute left-1/2 top-4 w-6 h-6"/>
        <img src={purple} alt="purple" className="absolute left-1/2 bottom-4 w-6 h-6"/>
        <img src={yellow} alt="yellow" className="absolute top-1/3 right-8 w-6 h-6"/>
        {/* Floating Food Items */}
        <motion.img
          src={pizza}
          alt="Pizza"
          className="absolute -top-12 left-6 lg:left-20 w-28 h-28 object-contain"
          // animate={{
          //   y: [0, -8, 0],
          //   rotate: [-2, 2, -2],
          // }}
          // transition={{
          //   repeat: Infinity,
          //   duration: 6,
          //   ease: "easeInOut",
          // }}
        />

        <motion.img
          src={bread}
          alt="Sandwich"
          className="absolute -top-12  right-8 lg:right-16 w-28 h-28 object-contain"
          // animate={{
          //   y: [0, -8, 0],
          //   rotate: [2, -2, 2],
          // }}
          // transition={{
          //   repeat: Infinity,
          //   duration: 6,
          //   delay: 1,
          //   ease: "easeInOut",
          // }}
        />

        <motion.img
          src={img}
          alt="Hot Dog"
          className="absolute -bottom-12 left-16 w-24 h-24 object-contain"
          // animate={{
          //   y: [0, -8, 0],
          //   rotate: [-2, 2, -2],
          // }}
          // transition={{
          //   repeat: Infinity,
          //   duration: 6,
          //   delay: 2,
          //   ease: "easeInOut",
          // }}
        />

        <motion.img
          src={drink}
          alt="Soda"
          className="absolute bottom-4 lg:bottom-8 -right-4 lg:right-12 w-24 h-24 object-contain"
          // animate={{
          //   y: [0, -8, 0],
          //   rotate: [2, -2, 2],
          // }}
          // transition={{
          //   repeat: Infinity,
          //   duration: 6,
          //   delay: 3,
          //   ease: "easeInOut",
          // }}
        />
        

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-white text-3xl font-bold mb-2">
            Get Campus Cravings:
          </h1>
          <h2 className="text-white text-3xl font-bold mb-12">
            Making Campus Delivery Effortless
          </h2>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              className="bg-white text-black px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-opacity-95 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaApple />
              Download for iOS
            </motion.button>

            <motion.button
              className="bg-white text-black px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-opacity-95 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaAndroid className="text-green-600"/>
              Download for Android
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DownloadCTA;

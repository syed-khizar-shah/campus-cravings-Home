import React from "react";
import { motion } from "framer-motion";
import iphone from "../assets/Images/iPhone 13.png";
import coffee_cup from "../assets/Images/coffee cup.png";
import rectangle from "../assets/Images/Rectangle.png";
import { SquarePlus } from "lucide-react";
import fries from "../assets/Images/1 51.png";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F3F4FB] relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/50" />
      
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full px-4 md:px-12 py-12 lg:py-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-1 space-y-8 -mt-8 text-center lg:text-left lg:pr-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="bg-yellow-300 shadow-lg z-[999] absolute -top-2 md:-top-12 left-8 md:left-20 w-14 h-14 rounded-full flex items-center justify-center mx-auto lg:mx-0"
          >
            <span className="text-2xl font-bold">A</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight tracking-tight">
            Your Food,
            <br />
            delivered anywhere
            <br />
            on campus!
          </h1>

          <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Campus Cravings connects students through peer-to-peer deliveries, fostering community with secure, convenient service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-md"
            >
              <FaApple />
              <span className="text-base font-medium">Download for iOS</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-md"
            >
              <FaAndroid className="text-green-600"/>
              <span className="text-base font-medium">Download for Android</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-[600px]">
            {/* Fries in background */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-16 md:top-32 left-16 md:left-36 z-0"
            >
              <img src={fries} alt="fries" className="w-[180px] h-[180px] opacity-90" />
            </motion.div>

            {/* Phone Frame */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 5 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="relative z-10 w-full"
            >
              <img 
                src={iphone} 
                alt="Food delivery app interface" 
                className="w-full h-auto max-w-[580px]" 
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-2 left-16 md:left-40 z-20 bg-white rounded-xl p-3 shadow-xl flex items-center gap-3"
            >
              <img src={rectangle} alt="Espresso" className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <p className="font-semibold">Espresso</p>
                <p className="text-sm text-gray-600">$2.50</p>
              </div>
              <SquarePlus className="h-5 w-5 cursor-pointer" />
            </motion.div>

            {/* Coffee Cups */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -right-4 z-20"
            >
              <img 
                src={coffee_cup} 
                alt="Coffee cups"
                className="w-52 h-52" 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
import React, { useState } from "react";
import { LayoutGrid, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/Images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    // Close mobile menu first
    setIsOpen(false);
    
    // Add a small delay to allow menu closing animation to complete
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calculate the final scroll position
        const navbarHeight = 64; // Approximate height of navbar (16px * 4)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight + 70;

        // Perform the scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 300); // 300ms delay matches the mobile menu animation duration
  };

  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 z-50 px-6 sm:px-8 py-4 bg-[#F3F4FB] w-full relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-8 sm:h-10 cursor-pointer" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-16">
        {/* Navigation Links */}
        <div className="flex items-center space-x-12 text-gray-700 text-sm">
          <button 
            className="hover:text-red-500 transition-colors duration-200"
            onClick={() => scrollToSection('mission')}
          >
            Our Mission
          </button>
          <button 
            className="hover:text-red-500 transition-colors duration-200"
            onClick={() => scrollToSection('featuresGrid')}
          >
            Core Features
          </button>
          <button 
            className="hover:text-red-500 transition-colors duration-200"
            onClick={() => scrollToSection('featureSection')}
          >
            What We Offer
          </button>
        </div>

        {/* Download Button */}
        <button className="bg-red-500 text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-red-600 transition-all duration-200 text-sm">
          <LayoutGrid className="h-4 w-4" />
          <span>Download app</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg overflow-hidden z-50 md:hidden"
          >
            <motion.div
              className="flex flex-col items-center py-6 px-4 space-y-6"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <button 
                className="w-full text-center py-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
                onClick={() => scrollToSection('mission')}
              >
                Our Mission
              </button>
              <button 
                className="w-full text-center py-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
                onClick={() => scrollToSection('featuresGrid')}
              >
                Core Features
              </button>
              <button 
                className="w-full text-center py-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
                onClick={() => scrollToSection('featureSection')}
              >
                What We Offer
              </button>
              <motion.button
                className="bg-red-500 text-white w-full sm:w-auto px-6 py-2.5 rounded-full flex items-center justify-center gap-2 hover:bg-red-600 transition-all duration-200"
                whileTap={{ scale: 0.98 }}
              >
                <LayoutGrid className="h-4 w-4" />
                <span>Download app</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
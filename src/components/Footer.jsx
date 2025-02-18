import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/Images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F3F4FB] to-[#E8E9F3] pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {/* Logo and Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-12 w-auto" />
              <div className="font-medium text-lg tracking-tight text-gray-900">
                Campus
                <br />
                Cravings
              </div>
            </div>
            <p className="text-black/90 text-sm leading-relaxed max-w-md font-medium">
              Campus Cravings brings convenience, security, and community to
              campus dining.
            </p>
            <div className="space-y-2">
              <p className="text-black/90 text-sm font-medium">
                The Site is owned and operated by Revolutionize LLC.
              </p>
              <p className="text-black/90 text-sm font-medium">
                Contact us at:
              </p>
              <a
                href="mailto:Support@campuscravings.com"
                className="text-black/90 hover:text-black underline font-medium transition-colors duration-200 text-sm inline-block"
              >
                Support@campuscravings.com
              </a>
            </div>
          </motion.div>

          {/* Empty Column for Medium Screens */}
          <div className="hidden lg:block"></div>

          {/* Pages Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <h3 className="font-medium text-xl text-gray-900 mb-6">Pages</h3>
            <nav className="space-y-4">
              {["About Us", "Features", "Why Us"].map((page) => (
                <motion.a
                  key={page}
                  href={`/${page.toLowerCase().replace(" ", "-")}`}
                  className="block text-black/90 hover:text-black transition-colors duration-200 text-bas"
                  whileHover={{ x: 4 }}
                >
                  {page}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-black/80 mb-6 md:mb-0 text-sm font-medium">
            © 2025 Campus Cravings. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { icon: FaFacebook, bg: "bg-[#1877F2]", name: "Facebook" },
              { icon: FaTwitter, bg: "bg-[#1DA1F2]", name: "Twitter" },
              { icon: FaInstagram, bg: "bg-[#E4405F]", name: "Instagram" },
              { icon: FaLinkedinIn, bg: "bg-[#0A66C2]", name: "LinkedIn" },
              { icon: FaYoutube, bg: "bg-[#FF0000]", name: "YouTube" },
            ].map(({ icon: Icon, bg, name }) => (
              <motion.a
                key={name}
                href={`#${name.toLowerCase()}`}
                className={`${bg} w-8 h-8 rounded-md flex items-center justify-center text-white hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl`}
                aria-label={name}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import iphone from "../assets/Images/grid-phone.png";
import emojis from "../assets/Images/grid-emojis.png";
import clock from "../assets/Images/grid-clock.png";
import img1 from "../assets/Images/grid-template.png";
import img2 from "../assets/Images/grid-ring.png";
import img3 from "../assets/Images/grid-lock.png";
import img4 from "../assets/Images/grid-people.png";
import img14 from "../assets/Images/grid-qr.png";
import pencil from "../assets/Images/grid-pencil.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturesGrid = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="flex flex-col w-full gap-4"
      >
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            variants={fadeInUp}
            className="bg-[#C7DEFF] p-6 pb-0 rounded-3xl"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between h-full gap-6">
              <div className="flex flex-col items-center pb-6 sm:items-start text-center sm:text-left">
                <img src={pencil} alt="pencil" className="h-6 mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                  Delivered Anywhere
                </h2>
                <p className="text-black text-sm sm:text-base">
                  Get your favorite food delivered straight to your dorm,
                  classroom, or wherever you are.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 sm:w-28 lg:w-32 flex-shrink-0"
              >
                <img
                  src={iphone}
                  alt="Mobile app screenshot"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-[#FFCCDC] p-6 rounded-3xl"
          >
            <div className="flex flex-col items-center justify-between h-full">
              <motion.img
                src={emojis}
                alt="Emoji"
                className="h-auto w-32 sm:w-40 lg:w-48 mb-6"
                whileHover={{ scale: 1.05 }}
              />
              <h2 className="text-xl sm:text-2xl font-bold text-center">
                Student-to-Student
                <br className="hidden sm:block" /> Delivery
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Section (2/3 width on large screens) */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                variants={fadeInUp}
                className="bg-[#FFF2C2] p-6 rounded-3xl"
              >
                <div className="flex flex-col items-center justify-center gap-2 h-full">
                  <motion.img
                    src={clock}
                    alt="Clock icon"
                    className="h-[170px] sm:h-32 w-auto mb-4"
                    whileHover={{ scale: 1.05 }}
                  />
                  <h2 className="text-xl sm:text-2xl font-bold text-center">
                    Track Your Orders
                  </h2>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="md:col-span-2 bg-[#FCD9CA] p-6 rounded-3xl"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between h-full gap-6">
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">
                      Secure <br />
                      Delivery
                    </h2>
                    <motion.img
                      src={img2}
                      alt="Celebration icon"
                      className="h-24 sm:h-28 w-auto mx-auto sm:mx-0"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <motion.img
                    src={img1}
                    alt="Checklist"
                    className="h-40 sm:h-48 w-auto object-contain"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-[#BDBDFF] p-6 rounded-3xl"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between lg:justify-normal gap-6 lg:gap-16">
                <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
                  For Students
                  <br /> By Students
                </h2>
                <motion.img
                  src={img4}
                  alt="Student avatar"
                  className="h-auto w-48 sm:w-56 lg:w-64 object-contain"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Section (1/3 width on large screens) */}
          <div className="grid grid-cols-1 gap-4">
            <motion.div
              variants={fadeInUp}
              className="bg-[#C7F6D1] p-6 rounded-3xl"
            >
              <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-between gap-6">
                <h2 className="text-xl sm:text-2xl font-bold text-center lg:text-left">
                  Earn <br /> While You
                  <br /> Deliver
                </h2>
                <motion.img
                  src={img3}
                  alt="Lock icon"
                  className="h-auto w-32 sm:w-40 lg:w-48"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-[#FB3333] p-6 rounded-3xl"
            >
              <div className="flex flex-col h-full text-white items-center lg:items-start">
                <motion.img
                  src={img14}
                  alt="QR code"
                  className="h-40 sm:h-48 w-auto mb-6"
                  whileHover={{ scale: 1.05 }}
                />
                <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center lg:text-left">
                  Download now
                </h2>
                <p className="text-sm sm:text-base text-white/90 text-center lg:text-left">
                  Order food easily with Campus Cravings and enjoy secure,
                  convenient delivery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesGrid;

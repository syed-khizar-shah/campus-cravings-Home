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
    <div className="max-w-7xl mx-auto p-4 lg:max-w-[95%]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="flex flex-col w-full"
      >
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row w-full md:space-x-4 space-y-4 md:space-y-0 md:max-h-[350px]">
          <motion.div
            variants={fadeInUp}
            className="flex-1 bg-[#C7DEFF] px-6 pt-6 rounded-3xl"
          >
            <div className="flex items-end justify-between h-full">
              <div className="flex flex-col items-start justify-end pb-8">
                <img src={pencil} alt="pencil" className="h-6 mb-2"/>
                <h2 className="text-xl font-bold mb-2">Delivered Anywhere</h2>
                <p className="text-black text-sm">
                  Get your favorite food delivered straight to <br className="hidden md:block"/> your dorm,
                  classroom, or wherever you are.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} className="w-24 md:w-32">
                <img src={iphone} alt="Mobile app screenshot" className="w-full h-auto" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex-1 bg-[#FFCCDC] p-6 rounded-3xl"
          >
            <div className="flex flex-col items-center justify-between h-full">
              <motion.img
                src={emojis}
                alt="Emoji"
                className="h-auto w-[150px] md:w-[200px] mb-4 object-contain"
                whileHover={{ scale: 1.05 }}
              />
              <h2 className="text-xl font-bold text-center">Student-to-Student<br/> Delivery</h2>
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row w-full mt-4 space-y-4 lg:space-y-0">
          <div className="flex flex-col w-full lg:w-2/3 space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:max-h-[270px]">
              <motion.div
                variants={fadeInUp}
                className="w-full md:w-1/3 bg-[#FFF2C2] p-6 xl:p-10 rounded-3xl"
              >
                <div className="flex flex-col items-center justify-between h-full">
                  <motion.img
                    src={clock}
                    alt="Clock icon"
                    className="h-auto mb-4 w-[100px] md:w-auto"
                    whileHover={{ scale: 1.05 }}
                  />
                  <h2 className="text-xl font-bold text-center">Track Your Orders</h2>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="w-full md:w-2/3 bg-[#FCD9CA] p-6 rounded-3xl"
              >
                <div className="flex flex-col md:flex-row items-center justify-between h-full">
                  <div>
                    <h2 className="text-xl font-bold mb-4 md:mb-8 text-center md:text-left">
                      Secure <br />
                      Delivery
                    </h2>
                    <motion.img
                      src={img2}
                      alt="Celebration icon"
                      className="h-[120px] w-[100px] md:w-auto mx-auto md:mx-0"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <motion.img
                    src={img1}
                    alt="Checklist"
                    className="h-[200px] md:h-[80%] mt-4 md:mt-0"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInUp}
              className="w-full bg-[#BDBDFF] p-6 rounded-3xl md:max-h-[300px]"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 h-full">
                <h2 className="text-xl font-bold text-center md:text-left">For Students<br/> By Students</h2>
                <motion.img
                  src={img4}
                  alt="Student avatar"
                  className="h-auto w-[250px] md:w-[350px] object-contain"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 space-y-4 lg:pl-4">
            <motion.div
              variants={fadeInUp}
              className="w-full bg-[#C7F6D1] p-6 rounded-3xl"
            >
              <div className="flex flex-row items-center gap-4 h-full">
                <h2 className="text-xl font-bold text-center lg:text-left mb-4 md:mb-0 lg:mb-4">
                  Earn <br /> While You
                  <br /> Deliver
                </h2>
                <motion.img
                  src={img3}
                  alt="Lock icon"
                  className="h-auto w-[150px] md:w-[200px]"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="w-full bg-[#FB3333] p-6 rounded-3xl"
            >
              <div className="flex flex-col h-full text-white">
                <motion.img
                  src={img14}
                  alt="QR code"
                  className="h-[220px] xl:max-h-[207px] w-[150px] md:w-auto mx-auto mb-4"
                  whileHover={{ scale: 1.05 }}
                />
                <h2 className="text-xl font-bold mb-2 text-center lg:text-left">Download now</h2>
                <p className="text-sm text-white/90 text-center lg:text-left">
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
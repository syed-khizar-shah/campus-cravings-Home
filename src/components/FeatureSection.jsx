import React from "react";
import { motion } from "framer-motion";
import iphone1 from "../assets/Images/phone1.png";
import iphone2 from "../assets/Images/phone2.png";
import iphone3 from "../assets/Images/phone3.png";

const FeatureSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const PhoneContainer = ({ bgColor, children }) => (
    <div className="lg:w-1/2 relative flex justify-center items-center min-h-[600px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute w-[400px] h-[200px]"
        style={{
          backgroundColor: bgColor,
          borderRadius: "48px",
          position: "absolute",
          left: "calc(50% - 200px)", // Half of width
          top: "calc(50% - 100px)", // Half of height
          zIndex: -1,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      <motion.div
        className="space-y-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Order from Campus Spots */}
        <motion.div
          variants={featureVariants}
          className="relative flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          <div className="lg:w-1/2 z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Order from Your Favorite Campus Spots
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-medium">
              Craving something delicious? We've got you covered. Enjoy coffee,
              snacks, and more from top campus spots, delivered fast!
            </p>
          </div>

          <PhoneContainer bgColor="#FB3333">
            <motion.img
              src={iphone1}
              alt="App screenshot of campus ordering"
              className="w-[280px]"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            />
          </PhoneContainer>
        </motion.div>

        {/* Cravings Delivered */}
        <motion.div
          variants={featureVariants}
          className="relative flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          <div className="lg:w-1/2 z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Cravings Delivered Right to You!
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-medium">
              Dorm? Done. Library? Locked in. Classroom? Coming right up.
              Wherever you are, we'll meet you there. 🚀
            </p>
          </div>

          <PhoneContainer bgColor="#D7C4FF">
            <motion.img
              src={iphone2}
              alt="App screenshot of delivery tracking"
              className="w-[280px]"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            />
          </PhoneContainer>
        </motion.div>

        {/* Earn Money Section */}
        <motion.div
          variants={featureVariants}
          className="relative flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          <div className="lg:w-1/2 z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Earn Money as a Student Delivery Partner
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md font-medium">
              Want to make extra cash? Any student can join our delivery team
              and earn while working flexible hours. It's a great way to support
              your studies and meet others on campus.
            </p>
          </div>

          <PhoneContainer bgColor="#C4FFD4">
            <motion.img
              src={iphone3}
              alt="App screenshot of delivery partner interface"
              className="w-[280px]"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            />
          </PhoneContainer>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeatureSection;

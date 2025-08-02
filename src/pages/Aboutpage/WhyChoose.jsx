import React from "react";
import { FaLeaf, FaSeedling, FaHandsHelping, FaSmileBeam } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaLeaf size={30} className="text-green-700" />,
    title: "Natural Quality",
    description:
      "We offer the finest organic produce and eco-friendly products straight from Kokan's heart.",
  },
  {
    icon: <FaSeedling size={30} className="text-green-700" />,
    title: "Sustainable Farming",
    description:
      "All items are sourced from local farmers using traditional, chemical-free practices.",
  },
  {
    icon: <FaHandsHelping size={30} className="text-green-700" />,
    title: "Empowering Farmers",
    description:
      "Your support directly uplifts Kokan's farming community and promotes rural development.",
  },
  {
    icon: <FaSmileBeam size={30} className="text-green-700" />,
    title: "Happy Customers",
    description:
      "We ensure quality, freshness, and satisfaction with every product you receive.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const WhyChooseKokanValley = () => {
  return (
    <div className="bg-green-50 py-12 px-6 text-center">
      <motion.div 
        className="text-center mb-7 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl  font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Why Choose <span className="text-green-600">Kokan Valley</span>
        </motion.h2>
        <motion.div 
          className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
          variants={itemVariants}
        ></motion.div>
      </motion.div>
{/* 
      <motion.p 
        className="max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Bringing you the true essence of nature — fresh, organic, and locally sourced from the rich lands of Kokan.
      </motion.p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <div className="bg-green-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseKokanValley;
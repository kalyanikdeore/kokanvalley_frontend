import React from 'react';
import { motion } from 'framer-motion';

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const VisionMission = () => {
  return (
    <section className="px-4 py-5 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero section */}
        <motion.div 
          className="text-center mb-7 py-10"
        >
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl  font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              Our Vision <span className="text-green-600">& Mission</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
              variants={itemVariants}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Vision & Mission cards with scroll-triggered animations */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div 
            className="relative group"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="absolute -inset-1 shadow to-green-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-white p-8 rounded-lg h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
             To reconnect people with nature through farming and develop a sustainable agro-processing ecosystem in the Konkan region.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            className="relative group"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="absolute -inset-1 shadow rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-white p-8 rounded-lg h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
              Provide accessible farming opportunities in Konkan for urban dwellers and farmer Integrate modern technology with natural farming practices Set up fruit-based food processing units on-site Promote rural economy through responsible agro-tourism.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section with staggered animations */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
              <motion.div 
          className="text-center mb-7 py-10"
        >
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl  font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              Our Core <span className="text-green-600">Values </span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
              variants={itemVariants}
            ></motion.div>
          </motion.div>
        </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Innovation", 
                icon: "💡",
                desc: "Pushing boundaries to create breakthrough solutions" 
              },
              { 
                title: "Integrity", 
                icon: "🤝",
                desc: "Doing the right thing even when no one is watching" 
              },
              { 
                title: "Excellence", 
                icon: "🏆",
                desc: "Striving for the highest quality in all we do" 
              },
              { 
                title: "Collaboration", 
                icon: "👥",
                desc: "Achieving more together than we could alone" 
              },
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
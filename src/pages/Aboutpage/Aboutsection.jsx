import React from 'react';
import { motion } from 'framer-motion';
import { kokan9, kokan4 ,kokan14, kokan18  } from "../../assets";

const Aboutsection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="font-sans pt-45 text-gray-800 bg-gradient-to-b from-white to-green-50">
      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Konkan Valley Agro <span className="text-green-600">Farm</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h5 
              className="text-lg md:text-3xl font-semibold mb-6 text-gray-800"
              variants={itemVariants}
            >
              Is Your Dream Agro-Lifestyle Nestled In the Lap of Nature!
            </motion.h5>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Konkan Valley Agro Farm is a unique, nature-driven project designed especially for nature lovers, urban investors, and agro-entrepreneurs. Our goal is to offer an opportunity to escape the chaos of city life and experience peaceful, profitable farming in the heart of Konkan.
            </motion.p>
       
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow"
                variants={statVariants}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-2xl text-green-600 mb-1">300+ km</h4>
                <p className="text-sm text-gray-600">Coastline</p>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow"
                variants={statVariants}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-2xl text-green-600 mb-1">50+</h4>
                <p className="text-sm text-gray-600">Beaches</p>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow"
                variants={statVariants}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-2xl text-green-600 mb-1">1000+</h4>
                <p className="text-sm text-gray-600">Years of History</p>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow"
                variants={statVariants}
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-2xl text-green-600 mb-1">12+</h4>
                <p className="text-sm text-gray-600">Ancient Fortresses</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-lg h-64"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={kokan9} 
                alt="Kokan Beach" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white font-medium">Golden Beaches</span>
            </motion.div>
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-lg h-64 mt-8"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={kokan14} 
                alt="Kokan Hills" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white font-medium">Lush Hills</span>
            </motion.div>
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-lg h-64"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={kokan4} 
                alt="Kokan Food" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white font-medium">Local Cuisine</span>
            </motion.div>
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-lg h-64 mt-8"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={kokan18} 
                alt="Kokan Village" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-white font-medium">Coastal Villages</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Aboutsection;
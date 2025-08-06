import React from 'react';
import { motion } from 'framer-motion';

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
         Kokan Valley <span className="text-green-600">Project</span>
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
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800"
              variants={itemVariants}
            >
              The Coastal Paradise of Maharashtra
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Nestled between the majestic Western Ghats and the Arabian Sea, Kokan Valley is a breathtaking region known for its pristine beaches, lush green hills, and vibrant culture. Spanning across Maharashtra's coastal belt, this tropical paradise offers a perfect blend of natural beauty and rich heritage.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              With its swaying coconut palms, picturesque fishing villages, and delectable seafood cuisine, Kokan Valley provides an authentic coastal experience away from the hustle of city life.
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
                src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
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
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
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
                src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
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
                src="https://images.unsplash.com/photo-1580852300517-7a8b42483b95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
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
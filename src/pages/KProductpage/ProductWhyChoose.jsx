import React from 'react';
import { FaShieldAlt, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants
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
  hidden: { y: 50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

const ProductWhyChoose = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-green-600" />,
      title: "Trusted Services",
      description: "We've been helping businesses grow for over 10 years with proven results and satisfied clients."
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-green-600" />,
      title: "Innovative Solutions",
      description: "Our team stays ahead of industry trends to deliver cutting-edge solutions tailored to your needs."
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-green-600" />,
      title: "Customer-Centric",
      description: "Your success is our priority. We work closely with you to understand and meet your unique requirements."
    },
    {
      icon: <FaRocket className="w-8 h-8 text-green-600" />,
      title: "Fast Delivery",
      description: "We value your time. Our efficient processes ensure timely delivery without compromising quality."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Why Choose <span className="text-green-600">Us</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mt-6"
            variants={itemVariants}
          >
            We stand out from the competition with our unique approach and commitment to excellence.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-green-200"
              custom={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="mb-6 p-4 bg-green-50 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductWhyChoose;
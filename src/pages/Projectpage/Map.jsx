import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MapOnly = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
     

      {/* Animated Google Map Section */}
      <motion.section
        variants={fadeInUp}
        className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
      >
        <motion.div variants={fadeInUp} className="p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-3">
            Our Location
          </h2>
          <p className="text-gray-600 text-lg">
            Visit our manufacturing unit to see our facilities and products.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.715061381521!2d75.8243143153774!3d21.04172265800083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9c3a1e9e8e5d9%3A0x3e5a6f196c7a7a2a!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Stitching Waves Location"
          ></iframe>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default MapOnly;

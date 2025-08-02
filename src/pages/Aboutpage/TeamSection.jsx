import React from "react";
import { motion } from "framer-motion";

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
      duration: 0.5
    }
  }
};

const TeamSection = () => {
  // Team member data
  const teamData = [
    {
      name: "Mr. Shivaji Sonone (Engg.)",
      position: "Managing Director",
      description: "With over 15 years of experience in hospitality, John ensures our farmhouse maintains the highest standards.",
      image_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Mr. Shanakr Thete",
      position: "Director (Marketing)",
      description: "Jane brings her expertise in organic farm-to-table cuisine to create unforgettable dining experiences.",
      image_url: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Mr. Arun Kale",
      position: "Director (Admin)",
      description: "Robert organizes all our nature activities and ensures guests have memorable adventures.",
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
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
          Meet Our <span className="text-green-600">Team</span>
        </motion.h2>
        <motion.div 
          className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
          variants={itemVariants}
        ></motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img
              src={member.image_url}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-green-600 font-medium mb-3">
                {member.position}
              </p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
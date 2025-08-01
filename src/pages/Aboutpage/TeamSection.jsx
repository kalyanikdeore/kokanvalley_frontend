import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  // Mock data for the team members
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
      name: "Mr.Arun Kale",
      position: "Director (Admin)",
      description: "Robert organizes all our nature activities and ensures guests have memorable adventures.",
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto ">
      <motion.h2
        className="text-3xl font-bold text-center text-green-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meet Our Team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
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
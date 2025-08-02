import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
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

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      quote: "The uPVC doors have transformed our home!",
      author: "Rojesh K.",
      location: "Bangalore",
    },
    {
      id: 2,
      rating: 5,
      quote: "Loved how we could customize every detail of the doors to match our interiors.",
      author: "Divya M.",
      location: "Chennai",
    },
    {
      id: 3,
      rating: 5,
      quote: "Our new aluminum French doors look sleek and feel sturdy—great upgrade!",
      author: "Meera S.",
      location: "Hyderabad",
    },
    {
      id: 4,
      rating: 5,
      quote: "French windows brought in so much natural light—our rooms feel airy and bright.",
      author: "Lakshmi N.",
      location: "Coimbatore",
    },
    {
      id: 5,
      rating: 5,
      quote: "Sliding doors saved us so much space and made our living room feel bigger.",
      author: "Ankit R.",
      location: "Pune",
    },
    {
      id: 6,
      rating: 5,
      quote: "Invisible grills keep our kids safe without blocking the view. Brilliant design!",
      author: "Farhan M.",
      location: "Gurgaon",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            What Our Customers <span className="text-green-600">Say</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mt-6"
            variants={itemVariants}
          >
            Hear from homeowners who've transformed their spaces with our premium doors and windows.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              custom={index}
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <motion.p 
                className="text-gray-700 italic text-lg mb-6 leading-relaxed"
                whileHover={{ scale: 1.02 }}
              >
                "{review.quote}"
              </motion.p>
              <div className="flex items-center">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
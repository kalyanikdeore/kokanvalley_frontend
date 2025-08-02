import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is the return policy for this product?",
    answer: "You can return the product within 30 days of delivery. Make sure the product is unused and in its original packaging.",
  },
  {
    question: "Is there a warranty included?",
    answer: "Yes, this product comes with a 1-year manufacturer warranty covering manufacturing defects.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery typically takes 3-5 business days depending on your location. Express shipping options are available at checkout.",
  },
  {
    question: "Are there any discounts available?",
    answer: "We offer seasonal discounts. Subscribe to our newsletter to stay updated on our latest promotions and special offers.",
  },
];

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

const ProductFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          Frequently Asked <span className="text-green-600">Questions</span>
        </motion.h2>
        <motion.div 
          className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
          variants={itemVariants}
        ></motion.div>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="overflow-hidden"
          >
            <motion.div
              className={`border ${openIndex === index ? 'border-green-500' : 'border-green-200'} rounded-lg bg-white shadow-sm transition-all duration-300`}
              whileHover={{ borderColor: "#10B981" }}
            >
              <button
                className="w-full text-left flex justify-between items-center p-6 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-2xl text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductFAQ;
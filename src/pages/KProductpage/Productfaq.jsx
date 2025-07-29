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

const ProductFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4  sm:px-6 lg:px-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 text-green-800"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
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
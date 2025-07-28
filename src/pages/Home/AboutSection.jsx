import { motion } from "framer-motion";
import { Banner1 } from "../../assets";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={Banner1}
                alt="About Green Plant Valley"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-30"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              About <span className="text-teal-600">Green Plant Valley</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2015, Green Plant Valley is dedicated to preserving the
              natural beauty of the Kokan region through sustainable practices
              and community engagement.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-teal-500 mt-1 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Eco-Tourism:</span> Promoting
                  responsible travel to natural areas
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-teal-500 mt-1 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Conservation:</span>{" "}
                  Protecting native flora and fauna
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-teal-500 mt-1 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Education:</span>{" "}
                  Environmental awareness programs
                </p>
              </div>
            </div>
            <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

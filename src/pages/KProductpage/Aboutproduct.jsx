import { motion } from "framer-motion";
import { FaLightbulb, FaShieldAlt, FaRocket, FaHandshake } from "react-icons/fa";
import { Banner1 } from "../../assets";


const AboutUsPage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "2015", label: "Founded In" },
    { value: "50+", label: "Team Members" },
    { value: "100%", label: "Satisfaction" }
  ];

  const features = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Reliability",
      description: "Products you can trust with 99.9% uptime guarantee"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimized for speed and efficiency in every scenario"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Partnership",
      description: "We work closely with clients to achieve mutual success"
    }
  ];

  return (
    <div className="bg-white">


      {/* Our Story */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className=" pt-77 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={item}>
            <h2 className="text-3xl font-bold text-green-900 mb-6">Our Product</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2015 by a team of passionate engineers, we started with a simple mission: to create products that solve real problems. What began as a small startup in a garage has now grown into an industry leader serving customers worldwide.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our journey hasn't been without challenges, but each obstacle has strengthened our commitment to excellence. Today, we're proud to have helped over 10,000 businesses streamline their operations and achieve their goals.
            </p>
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300">
              Learn More About Our Journey
            </button>
          </motion.div>
          <motion.div variants={item} className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                  src={Banner1}  // Changed from 'url=' to 'src='
                alt="Our team working together"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm">Our founding team in 2015</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>





    </div>
  );
};

export default AboutUsPage;
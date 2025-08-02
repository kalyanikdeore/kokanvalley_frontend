import { motion } from "framer-motion";
import {
  FaLeaf,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const socialLinks = [
    { icon: <FaFacebook className="text-lg" />, name: "Facebook", url: "#" },
    { icon: <FaInstagram className="text-lg" />, name: "Instagram", url: "#" },
    { icon: <FaTwitter className="text-lg" />, name: "Twitter", url: "#" },
    { icon: <FaYoutube className="text-lg" />, name: "YouTube", url: "#" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Product", url: "/product" },
    { name: "Project", url: "/project" },
    { name: "Contact", url: "/contact" },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Kokan Valley Agro Farms, Shiravane , Tal-Dapoli , Dist. Ratnagiri - 415712" },
    { icon: <FaPhone />, text: "+91 8669021382" },
    { icon: <FaEnvelope />, text: "info@kokanvalley.com" },
    { icon: <FaClock />, text: "Open daily: 6:00 AM - 6:00 PM" },
  ];

  return (
    <>
      <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-16 pb-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-emerald-500 to-green-500"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 rounded-full bg-teal-900 opacity-20 blur-xl"></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 rounded-full bg-emerald-800 opacity-15 blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          >
            {/* Brand Info */}
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-teal-700 rounded-lg shadow-lg">
                  <FaLeaf className="text-3xl text-teal-300" />
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-emerald-300">
               Kokan Valley Agro
                </span>
              </div>
              <p className="text-green-100 text-opacity-90 leading-relaxed">
                Preserving the natural beauty of Kokan valley through sustainable
                tourism and environmental conservation.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    aria-label={social.name}
                    className="p-2 bg-green-800 bg-opacity-50 rounded-full text-white hover:text-teal-300 hover:bg-opacity-70 transition-all duration-300 shadow-sm"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h3 className="text-xl font-semibold pb-2 relative inline-block">
                <span className="relative z-10">Quick Links</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 rounded-full z-0"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={link.url}
                      className="flex items-center text-green-100 hover:text-teal-300 transition-all duration-300 group"
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                      <span className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-teal-300 before:transition-all before:duration-300 group-hover:before:w-full">
                        {link.name}
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h3 className="text-xl font-semibold pb-2 relative inline-block">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 rounded-full z-0"></span>
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-teal-300 mt-1 flex-shrink-0">
                      <div className="p-2 bg-green-800 bg-opacity-50 rounded-full">
                        {info.icon}
                      </div>
                    </span>
                    <span className="text-green-100 text-opacity-90 leading-snug">
                      {info.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-5">
              <h3 className="text-xl font-semibold pb-2 relative inline-block">
                <span className="relative z-10">Newsletter</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 rounded-full z-0"></span>
              </h3>
              <p className="text-green-100 text-opacity-90 leading-relaxed">
                Subscribe to our newsletter for updates on events, conservation
                efforts, and special offers.
              </p>
              <form className="flex flex-col space-y-4">
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-green-800 bg-opacity-50 border border-green-700 focus:outline-none focus:ring-2 focus:ring-teal-300 text-white placeholder-green-300 transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(13, 148, 136, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
                >
                  <span className="font-medium">Subscribe</span>
                  <IoIosSend className="text-lg" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-green-800 pt-8 text-center"
          >
            <div className="text-green-300 text-opacity-80 text-sm">
              <p>© {new Date().getFullYear()} Green Plant Valley. All rights reserved.</p>
              <p className="mt-1">Cultivating nature's beauty with care.</p>
            </div>
          </motion.div>
        </div>
      </footer>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918669021382?text=Hi%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl hover:bg-green-600 transition duration-300 z-50"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <FaWhatsapp className="text-white text-3xl" />
        <motion.span 
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </motion.a>
  );
};

export default Footer;
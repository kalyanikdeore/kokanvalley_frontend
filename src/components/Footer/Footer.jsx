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
      },
    },
  };

  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", url: "#" },
    { icon: <FaInstagram />, name: "Instagram", url: "#" },
    { icon: <FaTwitter />, name: "Twitter", url: "#" },
    { icon: <FaYoutube />, name: "YouTube", url: "#" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Gallery", url: "/gallery" },
    { name: "Flora", url: "/flora" },
    { name: "Conservation", url: "/conservation" },
    { name: "Contact", url: "/contact" },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Kokan Valley, Maharashtra, India" },
    { icon: <FaPhone />, text: "+91 98765 43210" },
    { icon: <FaEnvelope />, text: "info@greenplantvalley.com" },
    { icon: <FaClock />, text: "Open daily: 6:00 AM - 6:00 PM" },
  ];

  return (
    <>
      <footer className="bg-gradient-to-b from-green-900 to-teal-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          >
            {/* Brand Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-3xl text-teal-300" />
                <span className="text-xl font-bold">
                  <span className="text-teal-200">Green</span> Plant Valley
                </span>
              </div>
              <p className="text-green-100">
                Preserving the natural beauty of Kokan valley through sustainable
                tourism and environmental conservation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3, color: "#5eead4" }}
                    href={social.url}
                    aria-label={social.name}
                    className="text-xl text-white hover:text-teal-300 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold border-b border-teal-500 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      whileHover={{ x: 5, color: "#5eead4" }}
                      href={link.url}
                      className="flex items-center text-green-100 hover:text-teal-300 transition-colors"
                    >
                      <span className="mr-2">→</span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold border-b border-teal-500 pb-2">
                Contact Us
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-teal-300 mt-1">{info.icon}</span>
                    <span className="text-green-100">{info.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold border-b border-teal-500 pb-2">
                Newsletter
              </h3>
              <p className="text-green-100">
                Subscribe to our newsletter for updates on events, conservation
                efforts, and special offers.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded bg-green-800 bg-opacity-50 border border-green-600 focus:outline-none focus:ring-2 focus:ring-teal-300 text-white placeholder-green-300"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded transition-colors"
                >
                  <span>Subscribe</span>
                  <IoIosSend />
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
            className="border-t border-green-800 pt-6 text-center text-green-300"
          >
            <p>
              &copy; {new Date().getFullYear()} Green Plant Valley, Kokan. All
              rights reserved.
            </p>
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
    <a
      href="https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
};

export default Footer;
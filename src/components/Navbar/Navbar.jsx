import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLeaf,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaImages,
  FaTree,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "About", icon: <FaInfoCircle />, path: "/about-us" },
    { name: "Gallery", icon: <FaImages />, path: "/gallery" },
    { name: "Flora", icon: <FaTree />, path: "/flora" },
    { name: "Contact", icon: <FaPhone />, path: "/contact" },
    // { name: "Location", icon: <FaMapMarkerAlt />, path: "/location" },
    {
      name: "Location",
      icon: <FaMapMarkerAlt />,
      path: "https://www.google.com/maps/dir/20.0099404,73.7595528/17.2472524,73.5088761", // example path to Kokan
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-green-800 to-teal-700 shadow-lg"
          : "bg-gradient-to-r from-green-900 to-teal-800"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex items-center space-x-2"
          >
            <FaLeaf className="text-3xl text-teal-300" />
            <span className="text-xl font-bold text-white">
              <span className="text-teal-200">Green</span> Plant Valley
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex space-x-6"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                variants={itemVariants}
                href={link.path}
                className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-teal-200 transition-colors group"
              >
                <span className="mr-2 group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                {link.name}
                <span className="block h-0.5 bg-teal-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col space-y-3 py-4"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={`mobile-${link.name}`}
                    variants={itemVariants}
                    href={link.path}
                    className="flex items-center px-4 py-3 text-base font-medium text-white bg-green-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.name}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

import { Banner1, Banner2, Banner3 } from "../../assets";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const slides = [
    {
      image: Banner1,
      title: "Discover Kokan's Green Paradise",
      subtitle: "Where nature whispers its secrets",
      animation: "zoom",
    },
    {
      image: Banner2,
      title: "Valley of Biodiversity",
      subtitle: "Home to rare flora and fauna",
      animation: "zoom",
    },
    {
      image: Banner3,
      title: "Sustainable Tourism",
      subtitle: "Experience nature responsibly",
      animation: "zoom",
    },
  ];

  const nextSlide = () => {
    setDirection("right");
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("left");
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const animationVariants = {
    zoom: {
      hidden: { scale: 1.2, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
      exit: { scale: 0.8, opacity: 0 },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(94, 234, 212, 0.8)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative h-screen md:h-[90vh] lg:h-screen overflow-hidden">
      {/* Previous image that stays visible during transition */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={slides[prevIndex].image}
          alt={slides[prevIndex].title}
          className="w-full h-full object-cover"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={animationVariants.zoom}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* New image that transitions in */}
          <div className="absolute inset-0">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="max-w-2xl bg-opacity-60 backdrop-blur-sm p-6 sm:p-8 rounded-lg mx-4 sm:mx-0"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <FaLeaf className="text-teal-300 text-2xl sm:text-3xl mr-2" />
                  <span className="text-teal-300 font-semibold text-lg sm:text-xl">
                    Green Plant Valley
                  </span>
                </div>
                <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  {slides[currentIndex].title}
                </motion.h1>
                <motion.p className="text-base sm:text-lg md:text-xl text-green-100 mb-6 sm:mb-8">
                  {slides[currentIndex].subtitle}
                </motion.p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-teal-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
                  >
                    Explore Valley
                  </motion.button>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="bg-transparent border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-teal-300 bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition-all"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-lg sm:text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-teal-300 bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition-all"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-lg sm:text-xl" />
      </button>

      {/* Indicators - Adjusted for mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left");
              setPrevIndex(currentIndex);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-teal-300 w-4 sm:w-6"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

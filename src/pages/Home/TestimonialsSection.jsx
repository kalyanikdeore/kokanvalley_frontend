import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patil",
      role: "Local Farmer",
      content:
        "Green Plant Valley transformed our community with sustainable farming techniques that doubled our yields while protecting the land.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Deshmukh",
      role: "School Principal",
      content:
        "Their environmental education program has inspired our students to become young conservationists. The impact has been remarkable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Amit Joshi",
      role: "Environmental Scientist",
      content:
        "The restoration work done by GPV serves as a model for ecological conservation throughout the region.",
      rating: 4,
    },
    {
      id: 4,
      name: "Sunita Rao",
      role: "Tourism Director",
      content:
        "Their eco-tourism initiatives have brought sustainable income to our region while preserving our natural heritage.",
      rating: 5,
    },
  ];

  // Animation variants
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
        duration: 0.5,
      },
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Number of cards to show based on screen size
  const getCardsToShow = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex(
          (prev) => (prev + 1) % (testimonials.length - cardsToShow + 1)
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, cardsToShow]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - cardsToShow : prev - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex(
      (prev) => (prev + 1) % (testimonials.length - cardsToShow + 1)
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToIndex = (index) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 bg-teal-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            What People <span className="text-green-600">Say</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
            variants={itemVariants}
          >
            Hear from those who have experienced our work firsthand
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-teal-100 transition-colors -ml-4"
            aria-label="Previous testimonials"
          >
            <FaChevronLeft className="text-teal-600 text-xl" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-teal-100 transition-colors -mr-4"
            aria-label="Next testimonials"
          >
            <FaChevronRight className="text-teal-600 text-xl" />
          </button>

          {/* Slider Container */}
          <div className="relative h-[400px] md:h-[350px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 flex gap-6 px-2"
              >
                {testimonials
                  .slice(currentIndex, currentIndex + cardsToShow)
                  .map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      className="bg-white p-8 rounded-xl shadow-md w-full h-full flex flex-col"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-teal-400 text-3xl mb-4">
                        <FaQuoteLeft />
                      </div>
                      <p className="text-gray-600 mb-6 italic flex-grow">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="font-bold text-green-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm mb-2">
                          {testimonial.role}
                        </p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - cardsToShow + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-teal-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial set ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { kokan6, kokan9, kokan14 } from "../../assets";

// Define animation variants (add these at the top of your file)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const OutdoorGallery = () => {
  const outdoorRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Local outdoor image data
  const outdoorImages = [
    {
      id: 1,
      src: kokan6,
      alt: "Beautiful garden view",
      category: "kokan valley"
    },
    {
      id: 2,
      src: kokan9,
      alt: "Scenic outdoor patio",
     category: "kokan valley"
    },
    {
      id: 3,
      src: kokan14,
      alt: "Sunset by the pool",
  category: "kokan valley"
    }
  ];

  // Auto-play for outdoor gallery
  useEffect(() => {
    if (!isAutoPlaying || !outdoorRef.current || outdoorImages.length === 0) return;

    const interval = setInterval(() => {
      if (outdoorRef.current) {
        const nextIndex = (currentIndex + 1) % outdoorImages.length;
        setCurrentIndex(nextIndex);
        
        outdoorRef.current.scrollTo({
          left: nextIndex * (300 + 24), // 300 is min-width, 24 is gap
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, outdoorImages.length]);

  const scrollCarousel = (direction) => {
    if (outdoorRef.current) {
      const newIndex = direction === "left" 
        ? (currentIndex - 1 + outdoorImages.length) % outdoorImages.length
        : (currentIndex + 1) % outdoorImages.length;
      
      setCurrentIndex(newIndex);
      
      outdoorRef.current.scrollTo({ 
        left: newIndex * (300 + 24), 
        behavior: "smooth" 
      });
      
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
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
              Our <span className="text-green-600">Project</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
              variants={itemVariants}
            ></motion.div>
          </motion.div>

          <div className="relative">
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={outdoorRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {outdoorImages.map((image, index) => (
                <div
                  key={image.id}
                  className="min-w-[300px] sm:min-w-[400px] flex-shrink-0"
                >
                  <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 transition-transform hover:scale-[1.02]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative h-64 sm:h-80">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                        <div>
                          <h3 className="text-white font-bold text-lg">
                            {image.alt}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {image.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutdoorGallery;
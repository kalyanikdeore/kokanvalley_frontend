import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { kokan6, kokan9, kokan14 } from "../../assets";

// Animation variants
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

const KokanNatureGallery = () => {
  const galleryRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Kokan nature images
  const natureImages = [
    {
      id: 1,
      src: kokan6,
      alt: "Lush green valleys of Kokan",
   
      description: "The breathtaking valleys of Kokan during monsoon season"
    },
    {
      id: 2,
      src: kokan9,
      alt: "Serene Kokan coastline",
   
      description: "Tranquil beaches with golden sands and coconut palms"
    },
    {
      id: 3,
      src: kokan14,
      alt: "Sunset over Kokan hills",
   
      description: "Vibrant sunsets painting the Western Ghats"
    }
  ];

  // Auto-play for gallery
  useEffect(() => {
    if (!isAutoPlaying || !galleryRef.current || natureImages.length === 0) return;

    const interval = setInterval(() => {
      if (galleryRef.current) {
        const nextIndex = (currentIndex + 1) % natureImages.length;
        setCurrentIndex(nextIndex);
        
        galleryRef.current.scrollTo({
          left: nextIndex * (300 + 24),
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, natureImages.length]);

  const scrollCarousel = (direction) => {
    if (galleryRef.current) {
      const newIndex = direction === "left" 
        ? (currentIndex - 1 + natureImages.length) % natureImages.length
        : (currentIndex + 1) % natureImages.length;
      
      setCurrentIndex(newIndex);
      
      galleryRef.current.scrollTo({ 
        left: newIndex * (300 + 24), 
        behavior: "smooth" 
      });
      
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
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
              Our  <span className="text-green-600">Project</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
              variants={itemVariants}
            ></motion.div>
            <motion.p 
              className="mt-6 text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Explore the untouched beauty of Kokan's landscapes, from misty hills to pristine beaches
            </motion.p>
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
              ref={galleryRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {natureImages.map((image, index) => (
                <div
                  key={image.id}
                  className="min-w-[300px] sm:min-w-[400px] flex-shrink-0"
                >
                  <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-100 transition-transform hover:scale-[1.02]"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                        <div>
                      
                          <h3 className="text-white font-bold text-xl mb-1">
                            {image.alt}
                          </h3>
                      
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

export default KokanNatureGallery;
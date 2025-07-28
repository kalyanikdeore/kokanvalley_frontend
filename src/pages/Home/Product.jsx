import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Banner1, Banner2, Banner3 } from "../../assets";

const Product = () => {
  const outdoorRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Local outdoor image data
  const outdoorImages = [
    {
      id: 1,
      src: Banner1,
      alt: "Beautiful garden view"
    },
    {
      id: 2,
      src: Banner2,
      alt: "Scenic outdoor patio"
    },
    {
      id: 3,
      src: Banner3,
      alt: "Sunset by the pool"
    }
  ];

  // Auto-play for outdoor gallery
  useEffect(() => {
    if (!isAutoPlaying || !outdoorRef.current || outdoorImages.length === 0) return;

    const interval = setInterval(() => {
      if (outdoorRef.current) {
        outdoorRef.current.scrollBy({
          left: 600,
          behavior: "smooth",
        });

        if (
          outdoorRef.current.scrollLeft + outdoorRef.current.clientWidth >=
          outdoorRef.current.scrollWidth - 100
        ) {
          setTimeout(() => {
            outdoorRef.current.scrollTo({ left: 0, behavior: "smooth" });
          }, 1000);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, outdoorImages]);

  const scrollCarousel = (direction) => {
    if (outdoorRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      outdoorRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Project
          </motion.h2>

          <motion.div
            className="h-1 w-16 bg-green-600 mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

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
              {outdoorImages.map((image) => (
                <div
                  key={image.id}
                  className="min-w-[300px] sm:min-w-[400px] flex-shrink-0"
                >
                  <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-64 sm:h-80">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                        <div>
                          <h3 className="text-white font-bold text-lg">
                            {image.alt}
                          </h3>
                          <p className="text-white/90 text-sm">
                            Outdoor
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

export default Product;
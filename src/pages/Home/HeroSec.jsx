import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Heart, Info, Leaf } from "lucide-react";
import video from "../../assets/videos.mp4";

const HeroSection = () => {
  const heroContent = [
    {
      id: 1,
      video_url: video,
      // ctaHighlight: "Eco-Friendly Solutions",
      title: "Sustainable Living Starts Here",
      description: "Discover our green technologies for a healthier planet and a brighter future.",
      youtubeLink: "https://www.youtube.com/@KonkanVallyAgroFarms"
    },
    {
      id: 2,
      video_url: video,
      // ctaHighlight: "New Collection",
      title: "Nature-Inspired Designs",
      description: "Beautiful products crafted with sustainability at their core.",
      youtubeLink: "https://www.youtube.com/@KonkanVallyAgroFarms"
    },
    {
      id: 3,
      video_url: video,
      // ctaHighlight: "Limited Time",
      title: "Join the Green Revolution",
      description: "Be part of the movement towards environmental consciousness.",
      youtubeLink: "https://www.youtube.com/@KonkanVallyAgroFarms"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || heroContent.length === 0) return;
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    setIsFavorite(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length);
    setIsFavorite(false);
  };

  const selectImage = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setIsFavorite(false);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const currentItem = heroContent[currentIndex] || {};

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Hero Slider */}
      <div
        className="relative w-full h-[90vh] flex items-center"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover object-center"
            >
              <source src={currentItem.video_url} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-emerald-800/60"></div>
          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6" style={{ marginBottom: "-148px" }}>
          <div className="max-w-2xl" style={{ marginLeft: '20px', marginRight: '20px' }}>
            {currentItem.ctaHighlight && (
              <motion.div
                className="inline-flex items-center bg-green-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4 text-xs sm:text-sm font-medium"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {currentItem.ctaHighlight}
              </motion.div>
            )}

            <motion.h1
              className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {currentItem.title}
            </motion.h1>

            <motion.p
              className="text-base sm:text-xl md:text-2xl text-green-50 mb-6 sm:mb-8 max-w-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {currentItem.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href={currentItem.youtubeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium flex items-center justify-center transition-all text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Watch Video
              </a>
              <button className="bg-green-700 text-white hover:bg-green-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium flex items-center justify-center transition-all text-sm sm:text-base">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {heroContent.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-green-700/80 hover:bg-green-800 p-2 sm:p-4 rounded-full z-10 backdrop-blur-sm transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-white w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-green-700/80 hover:bg-green-800 p-2 sm:p-4 rounded-full z-10 backdrop-blur-sm transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-green-700/80 hover:bg-green-800 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all z-10"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`w-4 h-4 sm:w-6 sm:h-6 ${isFavorite ? "fill-white text-white" : "text-white"}`}
          />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      {heroContent.length > 1 && (
        <div className="container mx-auto px-4 sm:px-6 -mt-16 relative z-10">
          <div className="bg-green-50/90 backdrop-blur-sm rounded-xl p-2 sm:p-4 shadow-2xl max-w-4xl mx-auto border border-green-100">
            <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto py-2">
              {heroContent.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => selectImage(index)}
                  className={`flex-shrink-0 relative cursor-pointer rounded-lg overflow-hidden transition-all w-20 h-12 sm:w-32 sm:h-20 ${
                    currentIndex === index
                      ? "ring-2 sm:ring-4 ring-green-500 transform scale-105"
                      : "opacity-80 hover:opacity-100 hover:scale-102"
                  }`}
                  aria-label={`View slide ${index + 1}: ${item.title}`}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={item.video_url} type="video/mp4" />
                  </video>
                  <div
                    className={`absolute inset-0 ${
                      currentIndex === index ? "bg-green-900/40" : "bg-green-800/20"
                    } flex items-center justify-center`}
                  >
                    {currentIndex === index && <Play className="text-white w-3 h-3 sm:w-5 sm:h-5" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
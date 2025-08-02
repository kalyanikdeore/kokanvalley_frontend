import { useState } from 'react';
import { motion } from 'framer-motion';
import { Banner1, Banner2, Banner3 } from "../../assets";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

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
    transition: { duration: 0.5 }
  }
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, src: Banner1, category: 'nature', title: 'Mountain View' },
    { id: 2, src: Banner2, category: 'urban', title: 'City Lights' },
    { id: 3, src: Banner3, category: 'food', title: 'Delicious Meal' },
    { id: 4, src: Banner2, category: 'travel', title: 'Exotic Destination' },
    { id: 5, src: Banner1, category: 'nature', title: 'Wildlife' },
    { id: 6, src: Banner3, category: 'urban', title: 'Modern Building' },
    { id: 7, src: Banner1, category: 'food', title: 'Morning Coffee' },
    { id: 8, src: Banner2, category: 'travel', title: 'Tropical Beach' },
  ];

  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <motion.section 
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div 
            className="text-center mb-7 py-10"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              Our <span className="text-green-600">Gallery</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"
              variants={itemVariants}
            />
          </motion.div>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore our collection of beautiful moments
          </p>
        </div>

        {/* Category filters */}
        <motion.div className="flex flex-wrap justify-center gap-2 mb-8" variants={containerVariants}>
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              variants={itemVariants}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {filteredItems.map(item => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-medium text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image modal */}
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" 
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <button 
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-2 text-center text-white">
                <h3 className="text-xl font-medium">{selectedImage.title}</h3>
                <p className="text-gray-300 capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default GallerySection;

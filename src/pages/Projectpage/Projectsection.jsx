import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiChevronDown, FiX } from "react-icons/fi";

const OurProducts = () => {
  // Mock data for products and categories
  const mockCategories = [
    {
      id: 1,
      name: "Doors",
      icon: "🚪",
      product_descriptor: "Premium doors for your home"
    },
    {
      id: 2,
      name: "Windows",
      icon: "🪟",
      product_descriptor: "Elegant window solutions"
    },
    {
      id: 3,
      name: "Security",
      icon: "🔒",
      product_descriptor: "Home security products"
    }
  ];

  const mockProducts = [
    {
      id: 1,
      title: "Classic Wooden Door",
      description: "Handcrafted wooden door with premium finish",
      price: "15000",
      image: "door1.jpg",
      category: mockCategories[0]
    },
    {
      id: 2,
      title: "Modern Glass Window",
      description: "Energy efficient glass window with UV protection",
      price: "12000",
      image: "window1.jpg",
      category: mockCategories[1]
    },
    {
      id: 3,
      title: "Security Grill",
      description: "Sturdy steel security grill for windows",
      price: "8000",
      image: "security1.jpg",
      category: mockCategories[2]
    },
    {
      id: 4,
      title: "French Door",
      description: "Elegant french door with glass panels",
      price: "22000",
      image: "door2.jpg",
      category: mockCategories[0]
    },
    {
      id: 5,
      title: "Sliding Window",
      description: "Smooth sliding window with noise reduction",
      price: "15000",
      image: "window2.jpg",
      category: mockCategories[1]
    },
    {
      id: 6,
      title: "Main Door Security",
      description: "Reinforced security for main entrance",
      price: "25000",
      image: "security2.jpg",
      category: mockCategories[2]
    }
  ];

  const [products, setProducts] = useState(mockProducts);
  const [categories, setCategories] = useState(mockCategories);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create category map for easy lookup
  const categoryMap = categories.reduce((acc, category) => {
    acc[category.name] = {
      icon: category.icon,
      descriptor: category.product_descriptor
    };
    return acc;
  }, {});

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category.name === activeFilter);

  // Mock image URLs - in a real app, these would come from your backend
  const getImageUrl = (imageName) => {
    // Replace with placeholder images or import local images
    return `https://via.placeholder.com/300x200?text=${encodeURIComponent(imageName.split('.')[0])}`;
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Our Product Range
          </h2>
          <motion.div
            className="h-1 w-16 bg-green-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore premium doors, windows, and security solutions for modern
            Indian homes.
          </p>
        </motion.div>

        {/* Desktop Filter Bar */}
        <motion.div
          className="hidden md:flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {["All", ...categories.map((cat) => cat.name)].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">
                {category === "All" ? "🌟" : categoryMap[category]?.icon}
              </span>
              {category}
            </button>
          ))}
        </motion.div>

        {/* Mobile Filter */}
        <div className="md:hidden mb-6 relative">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-between w-full max-w-xs mx-auto bg-green-500 text-white px-5 py-3 rounded-full shadow"
          >
            <div className="flex items-center gap-2">
              <FiFilter />
              <span>{activeFilter === "All" ? "All Categories" : activeFilter}</span>
            </div>
            <FiChevronDown
              className={`transition-transform ${
                showMobileFilters ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Mobile Dropdown */}
          {showMobileFilters && (
            <motion.div
              className="absolute z-10 w-full max-w-xs mx-auto mt-2 bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {["All", ...categories.map((cat) => cat.name)].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveFilter(category);
                    setShowMobileFilters(false);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3 text-left ${
                    activeFilter === category
                      ? "bg-green-100 text-green-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg">
                    {category === "All" ? "🌟" : categoryMap[category]?.icon}
                  </span>
                  <span>{category}</span>
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all"
            >
              <div 
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => openProductModal(product)}
              >
                <img
                  src={getImageUrl(product.image)}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  ₹{Number(product.price).toLocaleString('en-IN')}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">
                    {product.category?.icon}
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    {product.category?.name}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-green-600 font-medium hover:text-green-700"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Product Modal */}
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* Background overlay */}
              <div 
                className="fixed inset-0 transition-opacity" 
                onClick={closeProductModal}
              >
                <div className="absolute inset-0 bg-black opacity-75"></div>
              </div>

              {/* Modal content */}
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
                          {selectedProduct.title}
                        </h3>
                        <button
                          onClick={closeProductModal}
                          className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                          <FiX className="h-6 w-6" />
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={getImageUrl(selectedProduct.image)}
                            alt={selectedProduct.title}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl">
                              {selectedProduct.category?.icon}
                            </span>
                            <span className="text-sm font-medium text-green-600">
                              {selectedProduct.category?.name}
                            </span>
                            <span className="ml-auto bg-green-500 text-white text-sm font-bold px-3 py-1 rounded">
                              ₹{Number(selectedProduct.price).toLocaleString('en-IN')}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-6">
                            {selectedProduct.description}
                          </p>
                          
                          <div className="mb-6">
                            <h4 className="font-bold text-gray-800 mb-2">Features:</h4>
                            <ul className="list-disc pl-5 text-gray-600">
                              <li>Rust-resistant plated mesh</li>
                              <li>Long-term protection from insects</li>
                              <li>Premium quality materials</li>
                              <li>Easy installation</li>
                            </ul>
                          </div>
                          
                          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition">
                            Enquire Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurProducts;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiChevronDown, FiX } from "react-icons/fi";
import { Banner1, Banner2, Banner3 } from "../../assets"; // Kokan images

const OurProducts = () => {
  const mockCategories = [
    {
      id: 1,
      name: "Farming",
      icon: "🌴",
      product_descriptor: "Organic farming tools and saplings"
    },
    {
      id: 2,
      name: "Cottage",
      icon: "🏡",
      product_descriptor: "Eco-friendly windows and fittings"
    },
    {
      id: 3,
      name: "Security",
      icon: "🛡️",
      product_descriptor: "Traditional fencing and safety systems"
    }
  ];

  const mockProducts = [
    {
      id: 1,
      title: "Kokan Mango Plantation",
      description: "Premium Alphonso mango saplings grown organically in Kokan soil",
      price: "500",
      image: Banner1,
      category: mockCategories[0],
    },
    {
      id: 2,
      title: "Traditional Bamboo Hut",
      description: "Eco-friendly bamboo hut for peaceful Kokan living",
      price: "12000",
      image: Banner2,
      category: mockCategories[0],
    },
    {
      id: 3,
      title: "Kokan Security Fence",
      description: "Natural wooden fencing for farms and cottages in Kokan",
      price: "8000",
      image: Banner3,
      category: mockCategories[2],
    },
    {
      id: 4,
      title: "Mud House Window Frame",
      description: "Handcrafted wooden frames suitable for mud houses",
      price: "4500",
      image: Banner2,
      category: mockCategories[1],
    },
    {
      id: 5,
      title: "Sliding Ventilator Window",
      description: "Ventilation optimized windows for humid Kokan weather",
      price: "7000",
      image: Banner1,
      category: mockCategories[1],
    },
    {
      id: 6,
      title: "Main Gate with Iron Grill",
      description: "Rust-resistant secure gate for Kokan farms and homes",
      price: "15000",
      image: Banner3,
      category: mockCategories[2],
    }
  ];

  const [products] = useState(mockProducts);
  const [categories] = useState(mockCategories);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const getImageUrl = (imageFile) => imageFile;

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="products">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Our Kokan Valley Products
          </h2>
          <motion.div
            className="h-1 w-16 bg-green-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore authentic, eco-friendly, and culturally rich products from the heart of Kokan.
          </p>
        </motion.div>

        <motion.div
          className="hidden md:flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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

        <div className="md:hidden mb-6 relative">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-between w-full max-w-xs mx-auto bg-green-500 text-white px-5 py-3 rounded-full shadow"
          >
            <div className="flex items-center gap-2">
              <FiFilter />
              <span>{activeFilter === "All" ? "All Categories" : activeFilter}</span>
            </div>
            <FiChevronDown className={`transition-transform ${showMobileFilters ? "rotate-180" : ""}`} />
          </button>

          {showMobileFilters && (
            <motion.div
              className="absolute z-10 w-full max-w-xs mx-auto mt-2 bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
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
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{product.category?.icon}</span>
                  <span className="text-sm font-medium text-green-600">{product.category?.name}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-green-600 font-medium hover:text-green-700"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {isModalOpen && selectedProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" onClick={closeProductModal}>
                <div className="absolute inset-0 bg-black opacity-75"></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.title}</h3>
                        <button onClick={closeProductModal} className="text-gray-400 hover:text-gray-500">
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
                            <span className="text-xl">{selectedProduct.category?.icon}</span>
                            <span className="text-sm font-medium text-green-600">{selectedProduct.category?.name}</span>
                            <span className="ml-auto bg-green-500 text-white text-sm font-bold px-3 py-1 rounded">
                              ₹{Number(selectedProduct.price).toLocaleString("en-IN")}
                            </span>
                          </div>

                          <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                          <div className="mb-6">
                            <h4 className="font-bold text-gray-800 mb-2">Features:</h4>
                            <ul className="list-disc pl-5 text-gray-600">
                              <li>Authentic Kokan craftsmanship</li>
                              <li>Eco-friendly and natural materials</li>
                              <li>Ideal for tropical climate</li>
                              <li>Handpicked and curated products</li>
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

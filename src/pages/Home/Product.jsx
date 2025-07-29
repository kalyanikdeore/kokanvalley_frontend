import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiChevronDown, FiX, FiSearch } from "react-icons/fi";
import ProductCard from "../../components/Products/ProductCard";
import { useCart } from "../../context/CartContext"; // ✅ FIXED: Add this line

import { Banner1, Banner2, Banner3 } from "../../assets";

const products = {
  categories: [
    "Microbial Solution",
    "Plant Growth Regulators",
    "Plant Protectants",
    "Nutrient Solutions",
    "Organic Fertilizers",
    "Special Products",
  ],
  products: [
    {
      id: 1,
      name: "Aminoz",
      description: "Amino acid 80% formula",
      category: "Bio-Fungicides",
      size: "1 Liter",
      image: Banner1,
      rating: 4.8,
      stock: 50,
    },
    {
      id: 2,
      name: "Aminozz",
      description: "Advanced amino blend",
      category: "Fertilizers",
      size: "500ml",
      image: Banner1,
      rating: 4.7,
      stock: 60,
    },
    {
      id: 3,
      name: "Banana King",
      description: "Growth booster for bananas",
      category: "Plant Growth",
      size: "1 Liter",
      image: Banner2,
      rating: 4.6,
      stock: 40,
    },
    {
      id: 4,
      name: "BananaKing",
      description: "High yield formula",
      category: "Fertilizers",
      size: "1 Liter",
      image: Banner3,
      rating: 4.6,
      stock: 42,
    },
    {
      id: 5,
      name: "Bio-Stim",
      description: "Bio stimulant for crops",
      category: "Stimulants",
      size: "250ml",
      image: Banner1,
      rating: 4.5,
      stock: 35,
    },
    {
      id: 6,
      name: "Bit-R",
      description: "Bio insect repellent",
      category: "Pesticides",
      size: "500ml",
      image: Banner2,
      rating: 4.3,
      stock: 70,
    },
  ],
};

const ProductShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { addToCart } = useCart(); // ✅ Ensure your context is properly configured

  const filteredProducts =
    activeFilter === "All"
      ? products.products
      : products.products.filter(
          (product) => product.category === activeFilter
        );

  const searchedProducts = filteredProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearFilters = () => {
    setActiveFilter("All");
    setSearchQuery("");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Banner */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={Banner1} alt="Banner 1" className="w-full rounded-lg shadow-md" />
          <img src={Banner2} alt="Banner 2" className="w-full rounded-lg shadow-md" />
          <img src={Banner3} alt="Banner 3" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Heading & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
            <p className="text-gray-600 mt-2">{activeFilter === "All" ? "All products" : activeFilter}</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <FiX size={18} />
                </button>
              )}
            </div>

            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
            >
              <FiFilter />
              <span>Filters</span>
              <FiChevronDown className={`transition-transform ${showMobileFilters ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>

        {/* Active Filters */}
        {(activeFilter !== "All" || searchQuery) && (
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm text-gray-500">Active filters:</span>
            {activeFilter !== "All" && (
              <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {activeFilter}
                <button
                  onClick={() => setActiveFilter("All")}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <FiX size={16} />
                </button>
              </div>
            )}
            {searchQuery && (
              <div className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  <FiX size={16} />
                </button>
              </div>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Mobile Filters */}
        <AnimatePresence>
          {showMobileFilters && (
            <motion.div
              className="md:hidden mb-6 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="grid grid-cols-2 gap-3">
                {["All", ...products.categories].map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveFilter(category);
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm text-left ${
                      activeFilter === category
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Filter Buttons */}
        <div className="hidden md:flex gap-3 mb-8 overflow-x-auto pb-2">
          {["All", ...products.categories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeFilter === category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {searchedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FiSearch size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-4">
              No products found matching your criteria
            </p>
            <button
              onClick={clearFilters}
              className="text-gray-900 font-medium underline hover:text-blue-600"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;

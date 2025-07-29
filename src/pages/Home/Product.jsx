import React, { useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import { Banner1, Banner2, Banner3 } from "../../assets";

// Category buttons
const categories = [
  "All",
  "Plant Protectants",
  "Nutrient Solutions",
  "Organic Fertilizers",
  "Special Products",
];

// Product data with category for filtering
const products = [
  {
    name: "Aminoz",
    image: Banner1,
    category: "Plant Protectants",
    description: "Lush green landscapes of Kokan Valley",
  },
  {
    name: "Aminozz",
    image: Banner2,
    category: "Nutrient Solutions",
    description: "Lush green landscapes of Kokan Valley",
  },
  {
    name: "BananaKing",
    image: Banner3,
    category: "Nutrient Solutions",
    description: "Lush green landscapes of Kokan Valley",
  },
  {
    name: "Kokan Valley Greens",
    image: Banner1,
    category: "Special Products",
    description: "Lush green landscapes of Kokan Valley",
  },
];

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl text-green-600 font-bold mb-2">Our Products</h2>
      <p className="text-gray-500 text-sm mb-6">All products</p>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm ${
              activeCategory === cat
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-md shadow-md overflow-hidden relative"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-60 object-cover"
              />
              <button className="absolute top-3 right-3 bg-white p-1 rounded-full shadow">
                <FiHeart className="text-red-500" />
              </button>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{prod.name}</h3>
                {prod.description && (
                  <p className="text-xs text-gray-600 mt-1">
                    {prod.description}
                  </p>
                )}
                <button className="mt-3 flex items-center gap-1 px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">
                  <FiShoppingCart className="text-white" /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No products found in this category</p>
        </div>
      )}
    </div>
  );
}

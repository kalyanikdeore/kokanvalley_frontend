import React, { useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
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
    price: "$19.99"
  },
  {
    name: "Aminozz",
    image: Banner2,
    category: "Nutrient Solutions",
    description: "Lush green landscapes of Kokan Valley",
    price: "$24.99"
  },
  {
    name: "BananaKing",
    image: Banner3,
    category: "Nutrient Solutions",
    description: "Lush green landscapes of Kokan Valley",
    price: "$29.99"
  },
  {
    name: "Kokan Valley Greens",
    image: Banner1,
    category: "Special Products",
    description: "Lush green landscapes of Kokan Valley",
    price: "$34.99"
  },
];

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const productVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }),
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const infoVariants = {
  hover: {
    y: -5,
    transition: {
      duration: 0.3
    }
  }
};

const buttonHover = {
  hover: {
    scale: 1.05,
    backgroundColor: "#15803d",
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productName) => {
    if (likedProducts.includes(productName)) {
      setLikedProducts(likedProducts.filter(name => name !== productName));
    } else {
      setLikedProducts([...likedProducts, productName]);
    }
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="px-6 py-10 max-w-screen-2xl mx-auto">
      {/* Title Section */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          variants={titleVariants}
        >
          Our <span className="text-green-600">Products</span>
        </motion.h2>
        <motion.div 
          className="w-24 h-1.5 bg-green-500 mx-auto rounded-full origin-left"
          variants={underlineVariants}
        />
      </motion.div>

      {/* Category Buttons */}
      <motion.div 
        className="max-w-6xl mx-auto mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm ${
                activeCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              variants={categoryVariants}
              custom={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {filteredProducts.map((prod, i) => (
            <motion.div
              key={i}
              variants={productVariants}
              custom={i}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden relative group"
            >
              <div className="relative overflow-hidden h-60">
                <motion.img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
               
              </div>
              
              <motion.div 
                className="p-5"
                variants={infoVariants}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg text-gray-800">{prod.name}</h3>
                  {/* <span className="font-bold text-green-600">{prod.price}</span> */}
                </div>
                {prod.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {prod.description}
                  </p>
                )}
          
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500">No products found in this category</p>
        </motion.div>
      )}
    </div>
  );
}
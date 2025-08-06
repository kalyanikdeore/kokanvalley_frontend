import React, { useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import { kokan1, kokan2, kokan3, kokan4, kokan5, kokan6, kokan7, kokan8, kokan9, kokan10, kokan11, kokan12, kokan13 } from "../../assets";

// Category buttons with corresponding descriptions
const categories = [
  {
    name: "All",
    title: "Our Complete Product Range",
    subtitle: "Explore our full collection of premium agricultural solutions for all your farming needs"
  },
  {
    name: "Plant Protectants",
    title: "Plant Protection Solutions",
    subtitle: "High-quality products to safeguard your crops from pests and diseases"
  },
  {
    name: "Nutrient Solutions",
    title: "Advanced Nutrient Formulas",
    subtitle: "Specialized nutrition to maximize plant growth and yield potential"
  },
  {
    name: "Organic Fertilizers",
    title: "Natural Fertilizer Options",
    subtitle: "Eco-friendly solutions to nourish your plants and soil"
  },
  {
    name: "Special Products",
    title: "Specialty Agricultural Products",
    subtitle: "Unique formulations for specific crop requirements"
  },
];

// Product data with category for filtering
const products = [
  {
    name: "Aminoz",
    image: kokan1,
    category: "Plant Protectants",
    description: "Advanced plant growth regulator with amino acids",
    price: "$24.99"
  },
  {
    name: "Aminozz",
    image: kokan2,
    category: "Nutrient Solutions",
    description: "Complete nutrient solution for hydroponic systems",
    price: "$29.99"
  },
  {
    name: "BananaKing",
    image: kokan3,
    category: "Nutrient Solutions",
    description: "Specialized fertilizer for banana plantations",
    price: "$34.99"
  },
  {
    name: "Kokan Valley Greens",
    image: kokan4,
    category: "Special Products",
    description: "Organic soil conditioner for valley crops",
    price: "$19.99"
  },
  {
    name: "Organic Bloom Booster",
    image: kokan5,
    category: "Organic Fertilizers",
    description: "Natural flowering stimulant for all plants",
    price: "$22.99"
  },
  {
    name: "Eco Pest Shield",
    image: kokan6,
    category: "Plant Protectants",
    description: "Non-toxic pest repellent made from neem extracts",
    price: "$27.50"
  },
  {
    name: "Bio Root Enhancer",
    image: kokan7,
    category: "Organic Fertilizers",
    description: "Microbial formula for stronger root development",
    price: "$18.99"
  },
  {
    name: "Fruit & Veggie Magic",
    image: kokan8,
    category: "Nutrient Solutions",
    description: "Balanced nutrition for fruits and vegetables",
    price: "$31.99"
  },
  {
    name: "Herbal Growth Tonic",
    image: kokan9,
    category: "Organic Fertilizers",
    description: "Plant-based growth promoter for all crops",
    price: "$25.50"
  },
  {
    name: "Natural Fungicide",
    image: kokan10,
    category: "Plant Protectants",
    description: "Organic solution for fungal diseases",
    price: "$21.99"
  },
  {
    name: "Compost Tea Concentrate",
    image: kokan11,
    category: "Organic Fertilizers",
    description: "Liquid compost extract for soil health",
    price: "$23.75"
  },
  {
    name: "Seaweed Extract",
    image: kokan12,
    category: "Nutrient Solutions",
    description: "Mineral-rich marine plant supplement",
    price: "$28.50"
  },
  {
    name: "Mycorrhizal Inoculant",
    image: kokan13,
    category: "Special Products",
    description: "Beneficial fungi for plant symbiosis",
    price: "$32.99"
  }
];

// Animation variants (remain the same as in your original code)
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
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productName) => {
    if (likedProducts.includes(productName)) {
      setLikedProducts(likedProducts.filter(name => name !== productName));
    } else {
      setLikedProducts([...likedProducts, productName]);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(categories.find(cat => cat.name === category));
  };

  const filteredProducts =
    activeCategory.name === "All"
      ? products
      : products.filter((p) => p.category === activeCategory.name);

  return (
    <div className="px-6 p-65 max-w-screen-2xl mx-auto">
      {/* Title Section */}
      <motion.div 
        className="text-center mb-15"
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
      
      <motion.h2 
        className="text-2xl text-center font-bold text-gray-800 mb-4"
        variants={titleVariants}
      >
        {activeCategory.title}
      </motion.h2>
      
      <motion.p 
        className="text-lg text-center text-gray-800 mb-9"
        variants={titleVariants}
      >
        {activeCategory.subtitle}
      </motion.p>

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
              key={cat.name}
              onClick={() => handleCategoryChange(cat.name)}
              className={`px-4 py-1 rounded-full text-sm ${
                activeCategory.name === cat.name
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              variants={categoryVariants}
              custom={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
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
                {/* <button 
                  onClick={() => toggleLike(prod.name)}
                  className={`absolute top-3 right-3 p-2 rounded-full ${likedProducts.includes(prod.name) ? 'text-red-500' : 'text-white'} bg-black bg-opacity-30 hover:bg-opacity-50 transition`}
                >
                  <FiHeart className="w-5 h-5" />
                </button> */}
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
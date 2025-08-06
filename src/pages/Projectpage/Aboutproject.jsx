import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiPhone,
  FiCalendar,
  FiMessageSquare,
  FiChevronDown,
  FiChevronUp,
  FiStar
} from "react-icons/fi";
import { kokan1, kokan2, kokan3, kokan4, kokan5, kokan6, kokan7, kokan8, kokan9, kokan10, kokan11, kokan12, kokan13, kokan14, kokan15, kokan16, kokan17, kokan18 } from "../../assets";

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(category || "All");
  const [activeFAQ, setActiveFAQ] = useState(null);

  // JSON formatted data
  const categories = [
    {
      id: 1,
      name: "Kokan-Nature",
      slug: "Kokannature",
      description: "Premium quality organic fruits from the Western Ghats",
      icon: "🌿",
      subcategories: [
  
      ],
      benefits: [
        { title: "Fresh", description: "Harvested at peak ripeness" },
        { title: "Nutritious", description: "Packed with vitamins and minerals" },
        { title: "Sustainable", description: "Eco-friendly farming practices" }
      ]
    },
    {
      id: 2,
      name: "Kokan Fruits",
      slug: "kokan-fruits",
      description: "Juicy and flavorful fruits from coastal orchards",
      icon: "🍊",
      subcategories: [
        // {
        //   id: 201,
        //   name: "Citrus Fruits",
        //   slug: "citrus-fruits",
        //   description: "Vitamin C rich oranges, lemons and more"
        // },
        // {
        //   id: 202,
        //   name: "Berries",
        //   slug: "berries",
        //   description: "Antioxidant-packed berries"
        // },
        // {
        //   id: 203,
        //   name: "Stone Fruits",
        //   slug: "stone-fruits",
        //   description: "Juicy peaches, plums and apricots"
        // }
      ],
      benefits: [
        { title: "Flavorful", description: "Intense natural flavors" },
        { title: "Hydrating", description: "High water content" },
        { title: "Versatile", description: "Great for eating fresh or cooking" }
      ]
    },
    {
      id: 3,
      name: "Orchard Paradise",
      slug: "Orchard-Paradise",
      description: "Rare and exotic fruits from our specialty orchards",
      icon: "✨",
      subcategories: [
   
      ],
      benefits: [
        { title: "Unique", description: "Hard-to-find varieties" },
        { title: "Premium Quality", description: "Hand-selected fruits" },
        { title: "Specialty Grown", description: "Cultivated with expert care" }
      ]
    }
  ];

  // Create an array of all imported images
  const productImages = [
    kokan1, kokan2, kokan3, kokan4, kokan5, kokan6, kokan7, kokan8, 
    kokan9, kokan10, kokan11, kokan12, kokan13, kokan14, kokan15, kokan16, 
    kokan17, kokan18
  ];

  const products = [
  
  
    {
      id: 5,
      title: "Coastal Strawberries",
      description: "Small but intensely flavorful berries",
      // price: "650",
      image: kokan5,
      category_id: 2,
      subcategory_id: 202
    },
    {
      id: 6,
      title: "Konkan Peaches",
      description: "Fragrant and juicy peaches with velvety skin",
      // price: "1100",
      image: kokan6,
      category_id: 2,
      subcategory_id: 203
    },
    {
      id: 7,
      title: "Dragon Fruit",
      description: "Exotic pink fruit with mild sweet flavor and striking appearance",
      // price: "2500",
      image: kokan7,
      category_id: 3,
      subcategory_id: 301
    },

    
    {
      id: 11,
      title: "Custard Apple",
      description: "Creamy textured fruit with sweet aromatic flavor",
      // price: "950",
      image: kokan11,
      category_id: 1,
      subcategory_id: 101
    },
  

    {
      id: 16,
      title: "Sapota",
      description: "Sweet brown fruit with malty flavor",
      // price: "750",
      image: kokan16,
      category_id: 1,
      subcategory_id: 101
    },
    {
      id: 17,
      title: "Breadfruit",
      description: "Starchy tropical fruit versatile for cooking",
      // price: "1600",
      image: kokan17,
      category_id: 3,
      subcategory_id: 301
    },

  ];

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      location: "Mumbai",
      quote: "The Alphonso mangoes were the best I've ever tasted. Will order again!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Delhi",
      quote: "Fresh delivery and excellent packaging. The fruits arrived in perfect condition.",
      rating: 4
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How are your fruits packaged for shipping?",
      answer: "We use special eco-friendly packaging with cushioning to protect fruits during transit and maintain freshness."
    },
    {
      id: 2,
      question: "Do you offer seasonal subscriptions?",
      answer: "Yes, we have seasonal fruit boxes that deliver the freshest in-season fruits regularly."
    }
  ];

  // Create mapping from slug to category name
  const slugToCategoryMap = categories.reduce((map, category) => {
    map[category.slug] = category.name;
    return map;
  }, {});

  // Create mapping from slug to subcategory name
  const slugToSubcategoryMap = categories.reduce((map, category) => {
    category.subcategories.forEach(subcategory => {
      map[subcategory.slug] = subcategory.name;
    });
    return map;
  }, {});

  // Filter products based on category or subcategory
  const filteredProducts = () => {
    if (!category || activeFilter === "All") {
      return products;
    }
    
    // Check if it's a main category
    if (slugToCategoryMap[category]) {
      const categoryObj = categories.find(cat => cat.slug === category);
      return products.filter(product => product.category_id === categoryObj.id);
    }
    
    // Check if it's a subcategory
    if (slugToSubcategoryMap[category]) {
      const subcategoryObj = categories
        .flatMap(cat => cat.subcategories)
        .find(sub => sub.slug === category);
      
      return products.filter(product => product.subcategory_id === subcategoryObj.id);
    }
    
    return products;
  };

  // Get current category or subcategory name
  const getCurrentCategoryName = () => {
    if (!category) return "All Our Project ";
    if (slugToCategoryMap[category]) return slugToCategoryMap[category];
    if (slugToSubcategoryMap[category]) return slugToSubcategoryMap[category];
    return "All Our Project";
  };

  // Get current category description
  const getCurrentCategoryDescription = () => {
    if (!category) return "Browse our complete collection of premium fruits from the Konkan region";
    
    // Check main categories
    const mainCategory = categories.find(cat => cat.slug === category);
    if (mainCategory) return mainCategory.description;
    
    // Check subcategories
    const subcategory = categories
      .flatMap(cat => cat.subcategories)
      .find(sub => sub.slug === category);
    
    if (subcategory) return subcategory.description;
    
    return "Browse our complete collection of premium fruits from the Konkan region";
  };

  // Get benefits for current category
  const getCurrentBenefits = () => {
    if (!category) return [];
    
    // Check main categories
    const mainCategory = categories.find(cat => cat.slug === category);
    if (mainCategory) return mainCategory.benefits;
    
    // For subcategories, return parent category benefits
    const parentCategory = categories.find(cat => 
      cat.subcategories.some(sub => sub.slug === category)
    );
    
    return parentCategory ? parentCategory.benefits : [];
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-60">
          <div className="flex items-center text-sm">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-green-600 hover:text-green-700 mr-4 transition-colors"
            >
              <FiArrowLeft className="mr-1" /> Back
            </button>
            <nav className="flex items-center text-gray-600">
              <span
                className="hover:text-green-600 cursor-pointer transition-colors"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <span className="mx-2 text-gray-400">/</span>
              <span
                className="hover:text-green-600 cursor-pointer transition-colors"
                onClick={() => navigate("/project")}
              >
                Project
              </span>
              {category && (
                <>
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-green-600 font-medium">
                    {getCurrentCategoryName()}
                  </span>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Header */}
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {getCurrentCategoryName()}
            </h1>
            <div className="w-16 h-1 bg-green-500 mb-6 rounded-full" />
            
            <p className="text-lg text-gray-600 max-w-3xl mb-4">
              {getCurrentCategoryDescription()}
            </p>
            
            <p className="text-gray-500">
              {filteredProducts().length} premium options available
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => {
              setActiveFilter("All");
              navigate("/project");
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === "All"
                ? "bg-green-500 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            View All
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.name);
                navigate(`/project/${cat.slug}`);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat.name
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Subcategory Filters */}
        {category && slugToCategoryMap[category] && (
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {categories
              .find(cat => cat.slug === category)
              ?.subcategories.map((subcat) => (
                <button
                  key={subcat.id}
                  onClick={() => {
                    setActiveFilter(subcat.name);
                    navigate(`/project/${subcat.slug}`);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === subcat.name
                      ? "bg-green-500 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {subcat.name}
                </button>
              ))}
          </motion.div>
        )}

        {/* Category Benefits */}
        {category && getCurrentBenefits().length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Why Choose Our {getCurrentCategoryName()}?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getCurrentBenefits().map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="my-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
            {filteredProducts().map((product) => {
              const productCategory = categories.find(cat => cat.id === product.category_id);
              const productSubcategory = productCategory?.subcategories.find(
                sub => sub.id === product.subcategory_id
              );
              
              return (
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
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                    />
                    {/* <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      ₹{Number(product.price).toLocaleString('en-IN')}
                    </span> */}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{productCategory?.icon}</span>
                      <span className="text-sm font-medium text-green-600">
                        {productCategory?.name}
                        {productSubcategory && ` • ${productSubcategory.name}`}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    {/* <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition">
                      Order Now
                    </button> */}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

     
        {/* FAQ Section */}
        {/* <div className="my-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-100 last:border-0">
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-medium text-gray-900">{faq.question}</h3>
                  {activeFAQ === index ? (
                    <FiChevronUp className="text-green-500" />
                  ) : (
                    <FiChevronDown className="text-gray-400" />
                  )}
                </button>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default ProductsPage;
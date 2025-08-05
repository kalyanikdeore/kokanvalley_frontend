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

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(category || "All");
  const [activeFAQ, setActiveFAQ] = useState(null);

  // JSON formatted data
  const categories = [
    {
      id: 1,
      name: "Doors",
      slug: "doors",
      description: "Premium quality doors for Indian homes and offices",
      icon: "🚪",
      subcategories: [
        {
          id: 101,
          name: "Main Doors",
          slug: "main-doors",
          description: "Premium main entrance doors"
        },
        {
          id: 102,
          name: "Room Doors",
          slug: "room-doors",
          description: "High-quality interior doors"
        },
        {
          id: 103,
          name: "Bathroom Doors",
          slug: "bathroom-doors",
          description: "Moisture-resistant bathroom doors"
        }
      ],
      benefits: [
        { title: "Durable", description: "Long-lasting materials" },
        { title: "Secure", description: "Advanced locking systems" },
        { title: "Customizable", description: "Various designs available" }
      ]
    },
    {
      id: 2,
      name: "Outdoor Doors",
      slug: "outdoor-doors",
      description: "Weather-resistant doors for outdoor spaces",
      icon: "🏡",
      subcategories: [
        {
          id: 201,
          name: "Patio Doors",
          slug: "patio-doors",
          description: "Beautiful doors for patio areas"
        },
        {
          id: 202,
          name: "Garage Doors",
          slug: "garage-doors",
          description: "Durable garage doors"
        },
        {
          id: 203,
          name: "Garden Doors",
          slug: "garden-doors",
          description: "Elegant garden entrance doors"
        }
      ],
      benefits: [
        { title: "Weatherproof", description: "Withstands all seasons" },
        { title: "Energy Efficient", description: "Excellent insulation" },
        { title: "Low Maintenance", description: "Easy to clean" }
      ]
    },
    {
      id: 3,
      name: "Specialty Doors",
      slug: "specialty-doors",
      description: "Unique door solutions for special needs",
      icon: "✨",
      subcategories: [
        {
          id: 301,
          name: "Fire Rated Doors",
          slug: "fire-rated-doors",
          description: "Safety doors with fire resistance"
        },
        {
          id: 302,
          name: "Soundproof Doors",
          slug: "soundproof-doors",
          description: "Doors with noise reduction"
        }
      ],
      benefits: [
        { title: "Special Features", description: "Tailored to specific needs" },
        { title: "High Security", description: "Enhanced protection" },
        { title: "Premium Materials", description: "Top quality construction" }
      ]
    }
  ];

  const products = [
    {
      id: 1,  
      title: "Classic Wooden Main Door",
      description: "Handcrafted wooden door with traditional carvings",
      price: "35000",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category_id: 1,
      subcategory_id: 101
    },
    {
      id: 2,
      title: "Modern Flush Room Door",
      description: "Sleek minimalist design for contemporary interiors",
      price: "12000",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category_id: 1,
      subcategory_id: 102
    },
    {
      id: 3,
      title: "Frosted Glass Bathroom Door",
      description: "Privacy glass door with moisture-resistant frame",
      price: "18000",
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category_id: 1,
      subcategory_id: 103
    },
    {
      id: 4,
      title: "Sliding Patio Door",
      description: "Space-saving sliding door for outdoor access",
      price: "42000",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category_id: 2,
      subcategory_id: 201
    },
    {
      id: 5,
      title: "Automatic Garage Door",
      description: "Convenient remote-controlled garage door",
      price: "65000",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category_id: 2,
      subcategory_id: 202
    },
    {
      id: 6,
      title: "French Garden Door",
      description: "Elegant glass-paned door for garden entrance",
      price: "38000",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category_id: 2,
      subcategory_id: 203
    },
    {
      id: 7,
      title: "Fireproof Safety Door",
      description: "Certified fire-resistant door for commercial use",
      price: "55000",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category_id: 3,
      subcategory_id: 301
    },
    {
      id: 8,
      title: "Acoustic Soundproof Door",
      description: "Specialized door for noise reduction",
      price: "48000",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
      category_id: 3,
      subcategory_id: 302
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      location: "Mumbai",
      quote: "The doors have transformed our home. Excellent quality and service!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Delhi",
      quote: "Professional installation and beautiful doors. Very happy with the result.",
      rating: 4
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the warranty period for your doors?",
      answer: "We offer a 10-year warranty on our premium doors and a 5-year warranty on standard models."
    },
    {
      id: 2,
      question: "Can I get custom designs?",
      answer: "Yes, we specialize in custom door designs to match your specific requirements."
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
    if (!category) return "All Door Products";
    if (slugToCategoryMap[category]) return slugToCategoryMap[category];
    if (slugToSubcategoryMap[category]) return slugToSubcategoryMap[category];
    return "All Door Products";
  };

  // Get current category description
  const getCurrentCategoryDescription = () => {
    if (!category) return "Browse our complete collection of premium doors";
    
    // Check main categories
    const mainCategory = categories.find(cat => cat.slug === category);
    if (mainCategory) return mainCategory.description;
    
    // Check subcategories
    const subcategory = categories
      .flatMap(cat => cat.subcategories)
      .find(sub => sub.slug === category);
    
    if (subcategory) return subcategory.description;
    
    return "Browse our complete collection of premium doors";
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
                onClick={() => navigate("/products")}
              >
                Products
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
              navigate("/products");
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
                navigate(`/products/${cat.slug}`);
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
                    navigate(`/products/${subcat.slug}`);
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
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      ₹{Number(product.price).toLocaleString('en-IN')}
                    </span>
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
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition">
                      Enquire Now
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>


    
   
      </main>
    </div>
  );
};

export default ProductsPage;
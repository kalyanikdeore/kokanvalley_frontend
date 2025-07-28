import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX, FiImage } from "react-icons/fi";
import {
  FaSwimmingPool,
  FaBed,
  FaUtensils,
  FaTree,
  FaHiking,
} from "react-icons/fa";

import { Banner1, Banner2, Banner3 } from "../../assets";

const staticGalleryImages = [
  { id: 1, url: Banner1, category: "property" },
  { id: 2, url: Banner2, category: "rooms" },
  { id: 3, url: Banner3, category: "pool" },
];

const staticAmenities = [
  {
    title: "Konkan Valley Pool",
    description: "Relax in our infinity pool with stunning valley views.",
    icon: "pool",
    images: [Banner1, Banner3],
  },
  {
    title: "Valley View Rooms",
    description: "Wake up to breathtaking views of the Konkan valley.",
    icon: "bed",
    images: [Banner2],
  },
  {
    title: "Konkan Cuisine",
    description: "Savor authentic Malvani and Konkani delicacies.",
    icon: "utensils",
    images: [Banner1, Banner2],
  },
];

const staticGuestExperiences = [
  { url: Banner1 },
  { url: Banner3 },
  { url: Banner2 },
];

const GalleryPage = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAmenityImages, setSelectedAmenityImages] = useState(null);
  const [showGuestExpSlider, setShowGuestExpSlider] = useState(false);
  const [currentGuestExpIndex, setCurrentGuestExpIndex] = useState(0);

  const categories = [
    { id: "all", name: "All", icon: <FiImage /> },
    { id: "property", name: "Resort", icon: <FaTree /> },
    { id: "rooms", name: "Rooms", icon: <FaBed /> },
    { id: "pool", name: "Pool", icon: <FaSwimmingPool /> },
    { id: "dining", name: "Dining", icon: <FaUtensils /> },
    { id: "activities", name: "Activities", icon: <FaHiking /> },
  ];

  const getFilteredImages = () => {
    if (currentCategory === "all") return staticGalleryImages;
    return staticGalleryImages.filter(
      (img) => img.category === currentCategory
    );
  };

  const getIcon = (icon) => {
    switch (icon) {
      case "pool":
        return <FaSwimmingPool className="text-4xl text-green-600 mb-4" />;
      case "bed":
        return <FaBed className="text-4xl text-green-600 mb-4" />;
      case "utensils":
        return <FaUtensils className="text-4xl text-green-600 mb-4" />;
      default:
        return <FaTree className="text-4xl text-green-600 mb-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-29 px-6">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
        Konkan Valley Resort
      </h1>

      {/* 1. Filter Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCurrentCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${
              currentCategory === cat.id
                ? "bg-green-600 text-white border-green-600"
                : "text-green-600 border-green-600 hover:bg-green-100"
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* 2. Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredImages().map((img) => (
          <div
            key={img.id}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedImage({ url: img.url })}
          >
            <img src={img.url} alt="" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white font-medium">View Details</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Amenities Highlights */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Resort Amenities
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {staticAmenities.map((amenity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={amenity.images[0]}
                  alt={amenity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-xl text-white font-bold">
                    {amenity.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 text-center">
                {getIcon(amenity.icon)}
                <p className="text-gray-600 mb-4">{amenity.description}</p>
                <div className="flex gap-2 justify-center">
                  {amenity.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedAmenityImages(amenity.images);
                        setSelectedImage({ url: img });
                      }}
                      className="w-16 h-16 rounded overflow-hidden"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Guest Experiences */}
      <section className="mt-20 relative max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Guest Experiences at Konkan Valley
        </h2>
        <div className="relative h-96">
          {staticGuestExperiences.map((item, index) => {
            const position =
              index === 0
                ? "left-0 top-0 w-3/4 h-3/4"
                : index === 1
                ? "right-0 top-1/4 w-1/2 h-3/4"
                : "left-1/4 bottom-0 w-2/3 h-2/3";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={`absolute ${position} rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all cursor-pointer`}
                onClick={() => {
                  setCurrentGuestExpIndex(index);
                  setShowGuestExpSlider(true);
                }}
              >
                <img
                  src={item.url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedImage(null);
                setSelectedAmenityImages(null);
              }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <FiX size={24} />
            </button>
            <img
              src={selectedImage.url}
              alt=""
              className="w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Guest Experience Slider */}
      {showGuestExpSlider && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowGuestExpSlider(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <FiX size={24} />
            </button>
            <img
              src={staticGuestExperiences[currentGuestExpIndex].url}
              alt=""
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button
                onClick={() =>
                  setCurrentGuestExpIndex((prev) =>
                    prev === 0 ? staticGuestExperiences.length - 1 : prev - 1
                  )
                }
                className="bg-white bg-opacity-80 p-2 rounded-full"
              >
                <FiChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button
                onClick={() =>
                  setCurrentGuestExpIndex((prev) =>
                    prev === staticGuestExperiences.length - 1 ? 0 : prev + 1
                  )
                }
                className="bg-white bg-opacity-80 p-2 rounded-full"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

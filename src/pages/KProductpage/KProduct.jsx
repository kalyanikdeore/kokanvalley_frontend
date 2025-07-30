import React from "react";
import { useNavigate } from "react-router-dom";

import { Banner1, Banner2, Banner3 } from "../../assets";

const DoorCard = ({ title, subtitle, description, buttonText, onEnquire, image }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white m-2">
      {/* Image Section */}
      <div className="h-48 bg-green-200 overflow-hidden">
        <img 
          src={image}  
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-lg font-semibold mb-2">{subtitle}</p>
        <p className="text-gray-500 text-base mb-4">
          {description}
        </p>
        <button 
          onClick={onEnquire}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const DoorsSection = () => {
  const navigate = useNavigate();

  const doors = [
    {
      id: 1,
      title: "Doors",
      subtitle: "Ishani Doors",
      description: "Crafted with precision and elegance, perfect for modern homes with a touch of sophistication.",
      buttonText: "Enquire Now",
      image: Banner1
    },
    {
      id: 2,
      title: "Doors",
      subtitle: "Royal Doors",
      description: "Grand appearance with enhanced durability, suited for luxurious spaces and premium interiors.",
      buttonText: "Enquire Now",
      image: Banner2
    },
    {
      id: 3,
      title: "Doors",
      subtitle: "Elite Door",
      description: "Sleek design with superior insulation and noise reduction, ideal for contemporary urban living.",
      buttonText: "Enquire Now",
      image: Banner3
    },
    {
      id: 4,
      title: "Doors",
      subtitle: "Kokan Valley Doors",
      description: "Inspired by the natural modern functionality. Perfect for homes that appreciate regional artistry.",
      buttonText: "Enquire Now",
      image: Banner1
    },
    {
      id: 5,
      title: "Doors",
      subtitle: "Smart Safety Door",
      description: "Engineered for protection and style — combines high-security features with elegant design.",
      buttonText: "Enquire Now",
      image: Banner2
    }
  ];

  const handleEnquire = (doorId) => {
    navigate(`/contact`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Door Collection</h1>
      <div className="flex flex-nowrap overflow-x-auto pb-4 -mx-2">
        {doors.map((door) => (
          <div key={door.id} className="w-1/4 px-2 flex-shrink-0">
            <DoorCard
              title={door.title}
              subtitle={door.subtitle}
              description={door.description}
              buttonText={door.buttonText}
              image={door.image}
              onEnquire={() => handleEnquire(door.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoorsSection;
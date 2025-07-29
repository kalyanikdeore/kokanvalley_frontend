import React from "react";
import { FaLeaf, FaSeedling, FaHandsHelping, FaSmileBeam } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf size={30} className="text-green-700" />,
    title: "Natural Quality",
    description:
      "We offer the finest organic produce and eco-friendly products straight from Kokan’s heart.",
  },
  {
    icon: <FaSeedling size={30} className="text-green-700" />,
    title: "Sustainable Farming",
    description:
      "All items are sourced from local farmers using traditional, chemical-free practices.",
  },
  {
    icon: <FaHandsHelping size={30} className="text-green-700" />,
    title: "Empowering Farmers",
    description:
      "Your support directly uplifts Kokan’s farming community and promotes rural development.",
  },
  {
    icon: <FaSmileBeam size={30} className="text-green-700" />,
    title: "Happy Customers",
    description:
      "We ensure quality, freshness, and satisfaction with every product you receive.",
  },
];

const WhyChooseKokanValley = () => {
  return (
    <div className="bg-green-50 py-12 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
        Why Choose Kokan Valley
      </h2>
      <div className="w-16 h-1 bg-green-600 mx-auto mb-4 rounded"></div>
      <p className=" max-w-3xl mx-auto mb-10">
        Bringing you the true essence of nature — fresh, organic, and locally sourced from the rich lands of Kokan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <div className="bg-green-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              {feature.title}
            </h3>
            <p className="   text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseKokanValley;

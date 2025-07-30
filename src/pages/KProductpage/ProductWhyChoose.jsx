import React from 'react';
import { FaShieldAlt, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const ProductWhyChoose = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-indigo-600" />,
      title: "Trusted Services",
      description: "We've been helping businesses grow for over 10 years with proven results and satisfied clients."
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-indigo-600" />,
      title: "Innovative Solutions",
      description: "Our team stays ahead of industry trends to deliver cutting-edge solutions tailored to your needs."
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-indigo-600" />,
      title: "Customer-Centric",
      description: "Your success is our priority. We work closely with you to understand and meet your unique requirements."
    },
    {
      icon: <FaRocket className="w-8 h-8 text-indigo-600" />,
      title: "Fast Delivery",
      description: "We value your time. Our efficient processes ensure timely delivery without compromising quality."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We stand out from the competition with our unique approach and commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-indigo-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-indigo-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductWhyChoose;
import React from 'react';
import { FaShieldAlt, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-green-600" />,
      title: "Trusted Expertise",
      description: "With over 10 years in the industry, we've built a reputation for reliability and quality."
    },
    {
      icon: <FaLightbulb className="text-3xl text-green-600" />,
      title: "Innovative Solutions",
      description: "We stay ahead of trends to deliver cutting-edge solutions tailored to your needs."
    },
    {
      icon: <FaHandshake className="text-3xl text-green-600" />,
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority. We work closely with you to achieve your goals."
    },
    {
      icon: <FaChartLine className="text-3xl text-green-600" />,
      title: "Proven Results",
      description: "Our track record speaks for itself with measurable success across all our projects."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand out from the competition with our unique combination of expertise, innovation, and dedication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
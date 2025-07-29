import React from 'react';

const VisionMission = () => {
  return (
    <section className=" px-4 py-5 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our <span className="text-green-600">Vision</span> & <span className="text-green-600">Mission</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Guiding principles that shape our journey and define our purpose
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div className="relative group">
            <div className="absolute -inset-1 shadow to-green-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-white p-8 rounded-lg h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To create a world where technology empowers every individual and organization to achieve their fullest potential. 
                We envision a future where innovative solutions bridge gaps, foster connections, and drive sustainable progress 
                for communities worldwide.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group">
            <div className="absolute -inset-1 shadow rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative bg-white p-8 rounded-lg h-full shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver exceptional value through innovative products and services that solve real-world problems. 
                We are committed to excellence, integrity, and continuous improvement while fostering a culture of 
                collaboration, creativity, and customer-centric approach in everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Innovation", 
                icon: "💡",
                desc: "Pushing boundaries to create breakthrough solutions" 
              },
              { 
                title: "Integrity", 
                icon: "🤝",
                desc: "Doing the right thing even when no one is watching" 
              },
              { 
                title: "Excellence", 
                icon: "🏆",
                desc: "Striving for the highest quality in all we do" 
              },
              { 
                title: "Collaboration", 
                icon: "👥",
                desc: "Achieving more together than we could alone" 
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
import React from "react";

const Aboutsection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              Welcome to our organization. We are dedicated to providing the
              best educational resources and real-world skill development. Our
              mission is to empower learners and professionals through
              innovative training.
            </p>
            <p className="text-gray-600">
              With a team of passionate educators and industry experts, we bring
              quality content, mentorship, and support to help you succeed in
              your learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;

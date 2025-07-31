import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clientTestimonials = [
  {
    name: "Rajesh Mehta",
    project: "Villa French Doors",
    quote: "Ishani's doors transformed our home's aesthetic completely!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    project: "Office Partitions",
    quote: "Professional installation with excellent after-sales service.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Amit Patel",
    project: "Apartment Windows",
    quote: "Energy efficient windows that reduced our AC bills significantly.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    project: "Safety Doors",
    quote: "The biometric lock gives us complete peace of mind.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    project: "Mosquito Nets",
    quote: "Discreet design that doesn't compromise on functionality.",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 4,
  },
  {
    name: "Ananya Reddy",
    project: "Custom Glass Work",
    quote: "Exactly matched our architect's unique vision.",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const clientsRef = useRef(null);

  // Client testimonials carousel scroll
  const scrollClients = (direction) => {
    if (clientsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      clientsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Client Testimonials */}
        <div className="mt-28">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            className="h-1 w-16 bg-green-500 mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <div className="relative">
            <button
              onClick={() => scrollClients("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollClients("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={clientsRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
            >
              {clientTestimonials.map((client, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] sm:min-w-[350px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {client.name}
                        </h4>
                        <p className="text-sm text-green-600">
                          {client.project}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "{client.quote}"
                    </p>
                    <div className="flex gap-1 text-green-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < client.rating ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
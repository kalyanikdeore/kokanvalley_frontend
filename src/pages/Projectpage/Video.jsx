import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import video1 from "../../assets/videos.mp4";
import video2 from "../../assets/videos2.mp4";

const AwardSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [awards, setAwards] = useState({
    videoAwards: [
      {
        id: 1,
        title: "Best Innovation Award",
        year: "2023",
        description: "Recognized for our groundbreaking technology in sustainable solutions.",
        video_file: video1,
        thumbnail: "https://via.placeholder.com/800x450?text=Innovation+Award"
      },
      {
        id: 2,
        title: "Environmental Excellence",
        year: "2022",
        description: "Awarded for our outstanding contributions to environmental preservation.",
        video_file: video2,
        thumbnail: "https://via.placeholder.com/800x450?text=Environmental+Excellence"
      }
    ],
    imageAwards: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const carouselRef = useRef(null);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % awards.videoAwards.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo(
      (prev) => (prev - 1 + awards.videoAwards.length) % awards.videoAwards.length
    );
    setIsPlaying(false);
  };

  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const scrollAmount =
      dir === "left"
        ? carouselRef.current.scrollLeft - 250
        : carouselRef.current.scrollLeft + 250;
    carouselRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  if (loading) return <div className="text-center py-8">Loading awards...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (awards.videoAwards.length === 0) {
    return <div className="text-center py-8">No awards found</div>;
  }

  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            Awards & Recognition
          </h2>
          <motion.div
            className="h-1 w-16 bg-green-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders
            and satisfied customers alike.
          </p>
        </motion.div>

        {/* Video Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">
            Featured Awards
          </h3>

          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            {!isPlaying ? (
              <div className="relative">
                <img
                  src={awards.videoAwards[currentVideo].thumbnail}
                  alt={awards.videoAwards[currentVideo].title}
                  className="w-full h-auto max-h-[500px] object-cover"
                />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-green-600 bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              <div className="aspect-w-16 aspect-h-9">
                <video
                  controls
                  autoPlay
                  className="w-full h-[500px]"
                  poster={awards.videoAwards[currentVideo].thumbnail}
                >
                  <source
                    src={awards.videoAwards[currentVideo].video_file}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            <div className="p-6">
              <h4 className="text-xl font-bold text-green-900">
                {`${awards.videoAwards[currentVideo].title} ${awards.videoAwards[currentVideo].year}`}
              </h4>
              <p className="text-green-700 mt-2">
                {awards.videoAwards[currentVideo].description}
              </p>
            </div>

            <button
              onClick={prevVideo}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-green-600/80 hover:bg-green-700 text-white p-3 rounded-full shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-green-600/80 hover:bg-green-700 text-white p-3 rounded-full shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
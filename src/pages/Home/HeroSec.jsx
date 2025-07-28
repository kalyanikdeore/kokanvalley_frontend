import React from "react";
import video from "../../assets/videos.mp4";

const VideoSection = () => {
  return (
    <div className="relative w-full h-[760px] md:h-[700px] overflow-hidden rounded-bl-[40%] md:rounded-bl-[20%] rounded-tr-[40%] md:rounded-tr-[20%] shadow-2xl">
      {/* Background Video */}
      <video 
        className="w-full h-full object-cover"
        src={video}
        autoPlay 
        muted 
        loop 
        playsInline
      />
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default VideoSection;
// LocationPage.jsx
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationPage = () => {
  const [showMap, setShowMap] = useState(false);

  const handleToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={handleToggle}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        <FaMapMarkerAlt />
        Location
      </button>

      {showMap && (
        <div className="mt-6">
          <img
            src={locationImage}
            alt="Location Map"
            className="w-full max-w-3xl rounded border shadow"
          />
        </div>
      )}
    </div>
  );
};

export default LocationPage;

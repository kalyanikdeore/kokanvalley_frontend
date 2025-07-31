import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      quote: "The uPVC doors have transformed our home!",
      author: "Rojesh K.",
      location: "Bangalore",
    },
    {
      id: 2,
      rating: 5,
      quote: "Loved how we could customize every detail of the doors to match our interiors.",
      author: "Divya M.",
      location: "Chennai",
    },
    {
      id: 3,
      rating: 5,
      quote: "Our new aluminum French doors look sleek and feel sturdy—great upgrade!",
      author: "Meera S.",
      location: "Hyderabad",
    },
    {
      id: 4,
      rating: 5,
      quote: "French windows brought in so much natural light—our rooms feel airy and bright.",
      author: "Lakshmi N.",
      location: "Coimbatore",
    },
    {
      id: 5,
      rating: 5,
      quote: "Sliding doors saved us so much space and made our living room feel bigger.",
      author: "Ankit R.",
      location: "Pune",
    },
    {
      id: 6,
      rating: 5,
      quote: "Invisible grills keep our kids safe without blocking the view. Brilliant design!",
      author: "Farhan M.",
      location: "Gurgaon",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-green-600">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">"{review.quote}"</p>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">{review.author}</span> • {review.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
import React from "react";

const Testimonials = () => {
  const reviews = [
    { name: "Ronit Agarwal", review: "Amazing platform, highly reliable!" },
    { name: "Islamiya Khan", review: "Great odds and easy to use!" },
    { name: "Ahmad Ansari", review: "Customer service is top-notch!" },
  ];

  return (
    <div className="mt-4 bg-gray-200 text-gray-800 py-12 px-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((item, index) => (
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            key={index}
          >
            <h3 className="text-xl font-medium mb-2">{item.name}</h3>
            <p className="text-gray-600">"{item.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

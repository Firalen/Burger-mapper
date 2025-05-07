import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold text-rose-600 mb-6 text-center">
        Testimonials for a Dating Recommendation Website
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-xl">
        Hear what our users have to say about their experiences with our recommendations!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-rose-600 mb-2">⭐ Olivia & Ryan</h2>
          <p className="text-gray-600">
            "We tried the rooftop restaurant in the app’s top picks—absolutely magical! The view, the atmosphere, and even the playlist made it unforgettable. We've already planned our second date!"
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-rose-600 mb-2">⭐ Maya S.</h2>
          <p className="text-gray-600">
            "I used to struggle finding new date spots, but this site made it effortless. The café recommendations were perfect for a chill first date. Highly recommend!"
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-rose-600 mb-2">⭐ Anika R.</h2>
          <p className="text-gray-600">
            "Every place I've tried from the list was well-reviewed and lived up to the hype. It’s like having a local guide with a romantic twist!"
          </p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const testimonials = [
    {
      name: "Olivia & Ryan",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "We tried the rooftop restaurant in the app's top picks—absolutely magical! The view, the atmosphere, and even the playlist made it unforgettable. We've already planned our second date!",
      date: "2 weeks ago"
    },
    {
      name: "Maya S.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      text: "I used to struggle finding new date spots, but this site made it effortless. The café recommendations were perfect for a chill first date. Highly recommend!",
      date: "1 month ago"
    },
    {
      name: "Anika R.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Every place I've tried from the list was well-reviewed and lived up to the hype. It's like having a local guide with a romantic twist!",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="py-20">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-rose-600">Adama Date Places</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about helping couples create unforgettable moments in Adama's most romantic locations.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every date should be special. Our mission is to help you discover the perfect spots for creating lasting memories with your loved one.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-rose-600">✓</span>
                  </div>
                  <span className="text-gray-700">Curated romantic locations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-rose-600">✓</span>
                  </div>
                  <span className="text-gray-700">Detailed reviews and ratings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-rose-600">✓</span>
                  </div>
                  <span className="text-gray-700">Special events and promotions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b3ce551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Romantic dinner"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Couples Say</h2>
          <p className="text-xl text-gray-600">
            Real experiences from couples who found their perfect date spot
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
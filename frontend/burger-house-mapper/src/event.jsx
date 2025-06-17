import React, { useState } from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'Live Music Night at Sunset Park',
    description: 'Enjoy a night of live music under the stars at Sunset Park. Dont miss out!',
    date: 'May 20, 2025',
    time: '7:00 PM - 11:00 PM',
    location: 'Sunset Park',
    link: 'https://maps.app.goo.gl/SunsetPark',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Music',
    price: 'Free'
  },
  {
    id: 2,
    title: 'Weekend Special at Mountain Cafe',
    description: 'Get 20% off on all beverages this weekend at Mountain Cafe.',
    date: 'May 15-17, 2025',
    time: 'All Day',
    location: 'Mountain Cafe',
    link: 'https://maps.app.goo.gl/MountainCafe',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Dining',
    price: '20% Off'
  },
  {
    id: 3,
    title: 'Movie Night at Olyad Cinema',
    description: 'Catch the latest blockbuster at Olyad Cinema with a special discount on tickets.',
    date: 'May 25, 2025',
    time: '6:00 PM - 9:00 PM',
    location: 'Olyad Cinema',
    link: 'https://maps.app.goo.gl/OlyadCinema',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
    category: 'Entertainment',
    price: 'Discounted'
  }
];

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Music', 'Dining', 'Entertainment'];

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(event => event.category === selectedCategory);

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming <span className="text-rose-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover special events and promotions at your favorite date spots
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-rose-500 font-semibold">{event.price}</span>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-rose-500 hover:text-rose-600"
                  >
                    View Location
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
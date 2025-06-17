import image from './assets/safarilogde.jpg';
import image1 from './assets/naflet5.webp';
import image2 from './assets/haileresort.jpg';
import image3 from './assets/haile2.jpg';
import image4 from './assets/cover4.webp';
import image5 from './assets/cover5.jpeg';
import Footer from './footer';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const places = [
  {
    id: 1,
    name: 'Safari Logde',
    description: 'A beautiful park with stunning sunset views.',
    photos: [image, image],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/vswMv9BZogv9uQ4s8',
    type: 'Restaurant',
    bestFor: ['Romantic Dinner', 'Sunset Views'],
    openingHours: '10:00 AM - 10:00 PM',
    features: ['Outdoor Seating', 'Live Music', 'Parking']
  },
  {
    id: 2,
    name: 'Naflet Hotel',
    description: 'A cozy cafe with a mountain view.',
    photos: [image1, image1],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/1uX6bhuq4vxtKUFs8',
    type: 'Hotel',
    bestFor: ['Staycation', 'Fine Dining'],
    openingHours: '24/7',
    features: ['Swimming Pool', 'Spa', 'Room Service']
  },
  {
    id: 3,
    name: 'Lakeview Restaurant',
    description: 'A restaurant with a serene lake view.',
    photos: [image2, image2],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://www.google.com/maps?q=Lakeview+Restaurant',
    type: 'Restaurant',
    bestFor: ['Waterfront Dining', 'Special Occasions'],
    openingHours: '11:00 AM - 11:00 PM',
    features: ['Lake View', 'Private Dining', 'Wine Selection']
  },
  {
    id: 4,
    name: 'Haile Resort',
    description: 'A beautiful park with stunning sunset views.',
    photos: [image3, image3],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/SrWoT9b3Zt4Ne2Rv5',
    type: 'Resort',
    bestFor: ['Weekend Getaway', 'Luxury Experience'],
    openingHours: '24/7',
    features: ['Golf Course', 'Fine Dining', 'Spa Services']
  },
  {
    id: 5,
    name: 'Kaldis Cafe',
    description: 'A cozy cafe with a luxury view.',
    photos: [image4, image4],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/BNQgiWjFpZiGHQzp9',
    type: 'Cafe',
    bestFor: ['Coffee Date', 'Casual Meetup'],
    openingHours: '7:00 AM - 10:00 PM',
    features: ['Free WiFi', 'Outdoor Seating', 'Pastries']
  },
  {
    id: 6,
    name: 'Olyad Cinema',
    description: 'A place to enjoy movies with your loved one.',
    photos: [image5, image5],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9',
    type: 'Entertainment',
    bestFor: ['Movie Date', 'Evening Out'],
    openingHours: '10:00 AM - 11:00 PM',
    features: ['Premium Seating', 'Snack Bar', '3D Movies']
  },
  {
    id: 7,
    name: 'Hemaz Pizza and Juice',
    description: 'A cozy place for pizza and refreshing drinks.',
    photos: [image1, image1],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9',
    type: 'Restaurant',
    bestFor: ['Casual Dining', 'Group Hangout'],
    openingHours: '11:00 AM - 10:00 PM',
    features: ['Pizza', 'Juice Bar', 'Outdoor Seating']
  },
  {
    id: 8,
    name: 'YO Burger',
    description: 'Delicious burgers in a casual setting.',
    photos: [image1, image2],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9',
    type: 'Restaurant',
    bestFor: ['Casual Date', 'Quick Bite'],
    openingHours: '11:00 AM - 10:00 PM',
    features: ['Burgers', 'Fries', 'Milkshakes']
  },
  {
    id: 9,
    name: 'Simple Restaurant',
    description: 'Authentic local cuisine in a simple setting.',
    photos: [image2, image3],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9',
    type: 'Restaurant',
    bestFor: ['Local Food', 'Budget Dining'],
    openingHours: '7:00 AM - 9:00 PM',
    features: ['Local Cuisine', 'Affordable', 'Family Style']
  },
  {
    id: 10,
    name: 'Hora Pastry',
    description: 'Fresh pastries and coffee in a cozy atmosphere.',
    photos: [image3, image4, image2],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9',
    type: 'Cafe',
    bestFor: ['Coffee Date', 'Breakfast'],
    openingHours: '7:00 AM - 8:00 PM',
    features: ['Pastries', 'Coffee', 'Breakfast Menu']
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PlacesList() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || place.type === selectedType;
    return matchesSearch && matchesType;
  });

  const placeTypes = ['All', ...new Set(places.map(place => place.type))];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover <span className="text-rose-600">Romantic</span> Places
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect spot for your next date or special occasion
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search places..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {placeTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedType === type
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Places Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPlaces.map((place) => (
              <motion.div
                key={place.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={place.photos[0]}
                    alt={place.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-rose-500 font-semibold">{place.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{place.name}</h2>
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(Math.floor(place.rating))].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{place.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {place.bestFor.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold">{place.price}</span>
                    <button
                      onClick={() => setSelectedPlace(place)}
                      className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedPlace && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <div className="flex gap-4 p-4 overflow-x-auto">
                    {selectedPlace.photos.map((photo, idx) => (
                      <img
                        key={idx}
                        src={photo}
                        alt=""
                        className="w-64 h-48 object-cover rounded-lg shadow-lg"
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedPlace(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedPlace.name}</h2>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(Math.floor(selectedPlace.rating))].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{selectedPlace.rating}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{selectedPlace.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Perfect For</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedPlace.bestFor.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                      <ul className="space-y-2">
                        {selectedPlace.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <p className="text-gray-900 font-semibold">Price Range: {selectedPlace.price}</p>
                      <p className="text-gray-600">Hours: {selectedPlace.openingHours}</p>
                    </div>
                    <a
                      href={selectedPlace.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
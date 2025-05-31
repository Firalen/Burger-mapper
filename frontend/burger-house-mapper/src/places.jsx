
import image from './assets/safarilogde.jpg';
import image1 from './assets/naflet5.webp';
import image2 from './assets/haileresort.jpg';
import image3 from './assets/haile2.jpg';
import image4 from './assets/cover4.webp';
import image5 from './assets/cover5.jpeg';

import Footer from './footer';
import React, { useState } from 'react';

const places = [
  {
    id: 1,
    name: 'Safari Logde',
    description: 'A beautiful park with stunning sunset views.',
    photos: [image,image],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/vswMv9BZogv9uQ4s8'
  },
  {
    id: 2,
    name: 'Naflet Hotel',
    description: 'A cozy cafe with a mountain view.',
    photos: [image1,image1],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/1uX6bhuq4vxtKUFs8'
  },
  {
    id: 3,
    name: 'Lakeview Restaurant',
    description: 'A restaurant with a serene lake view.',
    photos: [image2,image2],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://www.google.com/maps?q=Lakeview+Restaurant'
  },
  {
    id: 4,
    name: 'Haile Resort',
    description: 'A beautiful park with stunning sunset views.',
    photos: [image3,image3],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/SrWoT9b3Zt4Ne2Rv5'
  },
  {
    id: 5,
    name: 'kaldis Cafe',
    description: 'A cozy cafe with a luxury view.',
    photos: [image4,image4],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/BNQgiWjFpZiGHQzp9'
  },
  {
    id: 6,
    name: 'Olyad Cinema',
    description: 'A place chill with .',
    photos: [image5,image5],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9'
  },
  {
    id: 7,
    name: 'Hemaz pizza and juice',
    description: 'A place chill with .',
    photos: [image1,image1],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9'
  },
  {
    id: 8,
    name: 'YO burger',
    description: 'A place chill with .',
    photos: [image1,image2],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9'
  },
  {
    id: 9,
    name: 'Simple Restaurant',
    description: 'A place chill with .',
    photos: [image2,image3],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9'
  },
  {
    id: 10,
    name: 'Hora Pastry',
    description: 'A place chill with .',
    photos: [image3,image4],
    rating: 4.8,
    price: 'ETB 500 - 1500',
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9'
  }
];

export default function PlacesList() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {places.map((place) => (
        <div key={place.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <img src={place.photos[0]} alt={place.name} className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-2xl font-bold text-rose-600 mb-2">{place.name}</h2>
          <p className="text-gray-600 mb-2">{place.description}</p>
          <p className="text-yellow-500 font-semibold mb-2">⭐ {place.rating}</p>
          <button
            className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition"
            onClick={() => setSelectedPlace(place)}
          >
            View Details
          </button>
        </div>
      ))}
       {/* Modal for Place Details */}
      {selectedPlace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-rose-600 text-2xl"
              onClick={() => setSelectedPlace(null)}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-rose-600 mb-4">{selectedPlace.name}</h2>
            <div className="flex gap-2 mb-4 overflow-x-auto">
              {selectedPlace.photos.map((photo, idx) => (
                <img key={idx} src={photo} alt="" className="w-32 h-24 object-cover rounded" />
              ))}
            </div>
            <p className="mb-2 text-gray-700">{selectedPlace.description}</p>
            <p className="mb-2 text-yellow-500 font-semibold">⭐ {selectedPlace.rating}</p>
            <p className="mb-2 text-rose-500 font-semibold">Price: {selectedPlace.price}</p>
            <a
              href={selectedPlace.location}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View on Map
            </a>
          </div>
           </div>
      )}
    </div>
  );
}
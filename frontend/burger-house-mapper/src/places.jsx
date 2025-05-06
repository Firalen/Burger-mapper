import React from 'react';

const places = [
  {
    id: 1,
    name: 'Sunset Park',
    description: 'A beautiful park with stunning sunset views.',
    photo: 'https://via.placeholder.com/150',
    location: 'https://www.google.com/maps?q=Sunset+Park'
  },
  {
    id: 2,
    name: 'Mountain Cafe',
    description: 'A cozy cafe with a mountain view.',
    photo: 'https://via.placeholder.com/150',
    location: 'https://www.google.com/maps?q=Mountain+Cafe'
  },
  {
    id: 3,
    name: 'Lakeview Restaurant',
    description: 'A restaurant with a serene lake view.',
    photo: 'https://via.placeholder.com/150',
    location: 'https://www.google.com/maps?q=Lakeview+Restaurant'
  }
];

export default function PlacesList() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Places to Visit</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place) => (
          <div
            key={place.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={place.photo}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800">{place.name}</h2>
              <p className="text-gray-600 mt-2">{place.description}</p>
              <a
                href={place.location}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 font-medium mt-4 inline-block hover:underline"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import image from './assets/safarilogde.jpg';
import image1 from './assets/naflet5.webp';
import image2 from './assets/haileresort.jpg';
import image3 from './assets/haile2.jpg';
import image4 from './assets/cover4.webp';
import image5 from './assets/cover5.jpeg';


const places = [
  {
    id: 1,
    name: 'Safari Logde',
    description: 'A beautiful park with stunning sunset views.',
    photo: image,
    location: 'https://maps.app.goo.gl/vswMv9BZogv9uQ4s8'
  },
  {
    id: 2,
    name: 'Naflet Hotel',
    description: 'A cozy cafe with a mountain view.',
    photo: image1,
    location: 'https://maps.app.goo.gl/1uX6bhuq4vxtKUFs8'
  },
  {
    id: 3,
    name: 'Lakeview Restaurant',
    description: 'A restaurant with a serene lake view.',
    photo: image2,
    location: 'https://www.google.com/maps?q=Lakeview+Restaurant'
  },
  {
    id: 4,
    name: 'Haile Resort',
    description: 'A beautiful park with stunning sunset views.',
    photo: image3,
    location: 'https://maps.app.goo.gl/SrWoT9b3Zt4Ne2Rv5'
  },
  {
    id: 5,
    name: 'kaldis Cafe',
    description: 'A cozy cafe with a luxury view.',
    photo: image4,
    location: 'https://maps.app.goo.gl/BNQgiWjFpZiGHQzp9'
  },
  {
    id: 6,
    name: 'Olyad Cinema',
    description: 'A place chill with .',
    photo: image5,
    location: 'https://maps.app.goo.gl/QUd2wdGpJy6HS3Da9'
  }
];

export default function PlacePage() {
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold text-rose-600 mb-6">Places to Visit</h1>
      <p className="text-center text-gray-600 mb-10 max-w-xl">
        Explore some of the best places to visit in Adama, Ethiopia. Click on the map link to find the location.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
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
            <div className="p-6">
              <h2 className="text-2xl font-bold text-rose-600">{place.name}</h2>
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
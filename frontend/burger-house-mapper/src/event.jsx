import React from 'react';

const events = [
  {
    id: 1,
    title: 'Live Music Night at Sunset Park',
    description: 'Enjoy a night of live music under the stars at Sunset Park. Don’t miss out!',
    date: 'May 20, 2025',
    location: 'Sunset Park',
    link: 'https://maps.app.goo.gl/SunsetPark'
  },
  {
    id: 2,
    title: 'Discount at Mountain Cafe',
    description: 'Get 20% off on all beverages this weekend at Mountain Cafe.',
    date: 'May 15-17, 2025',
    location: 'Mountain Cafe',
    link: 'https://maps.app.goo.gl/MountainCafe'
  },
  {
    id: 3,
    title: 'Movie Night at Olyad Cinema',
    description: 'Catch the latest blockbuster at Olyad Cinema with a special discount on tickets.',
    date: 'May 25, 2025',
    location: 'Olyad Cinema',
    link: 'https://maps.app.goo.gl/OlyadCinema'
  }
];

export default function EventsSection() {
  return (
    <div className="bg-rose-50 py-12 px-4">
      <h2 className="text-4xl font-bold text-rose-600 text-center mb-8">Events and Promotions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-rose-600 mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-2">{event.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Location:</strong> {event.location}
            </p>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 font-medium hover:underline"
            >
              View Location on Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
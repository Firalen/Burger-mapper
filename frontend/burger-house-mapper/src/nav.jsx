import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-white text-2xl font-bold">
            <Link to="/" className="hover:text-gray-300">
              ADAMA DATE PLACES
            </Link>
          </h1>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 font-bold">
              HOME
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 font-bold">
              ABOUT
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 font-bold">
              CONTACT
            </Link>
            <Link to="/places" className="text-white hover:text-gray-300 font-bold">
              PLACES
            </Link>
            <Link to="/events" className="text-white hover:text-gray-300 font-bold">
              EVENTS
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
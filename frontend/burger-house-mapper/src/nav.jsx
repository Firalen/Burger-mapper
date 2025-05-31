import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            ADAMA DATE PLACES
          </Link>
        </h1>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen
                ? "M6 18L18 6M6 6l12 12" // X icon
                : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 font-bold">HOME</Link>
          <Link to="/about" className="text-white hover:text-gray-300 font-bold">ABOUT</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 font-bold">CONTACT</Link>
          <Link to="/places" className="text-white hover:text-gray-300 font-bold">PLACES</Link>
          <Link to="/events" className="text-white hover:text-gray-300 font-bold">EVENTS</Link>
          <Link to="/review" className="text-white hover:text-gray-300 font-bold">REVIEW</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col items-center">
          <Link to="/" className="text-white hover:text-gray-300 font-bold" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/about" className="text-white hover:text-gray-300 font-bold" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link to="/contact" className="text-white hover:text-gray-300 font-bold" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          <Link to="/places" className="text-white hover:text-gray-300 font-bold" onClick={() => setMenuOpen(false)}>PLACES</Link>
          <Link to="/events" className="text-white hover:text-gray-300 font-bold" onClick={() => setMenuOpen(false)}>EVENTS</Link>
          <Link to="/review" className="text-white hover:text-gray-300 font-bold" onClick={() => setMenuOpen(false)}>REVIEW</Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
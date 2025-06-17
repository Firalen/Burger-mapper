import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
    { path: '/places', label: 'PLACES' },
    { path: '/events', label: 'EVENTS' },
    { path: '/review', label: 'REVIEW' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <Link to="/" className="hover:text-rose-500 transition-colors">
              ADAMA DATE PLACES
            </Link>
          </motion.h1>

          {/* Hamburger Icon */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : 'my-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                scrolled ? 'bg-gray-800' : 'bg-white'
              } ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link
                  to={link.path}
                  className={`font-semibold transition-colors ${
                    scrolled ? 'text-gray-800 hover:text-rose-500' : 'text-white hover:text-rose-200'
                  } ${location.pathname === link.path ? 'text-rose-500' : ''}`}
                >
                  {link.label}
                </Link>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-500"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.path}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={link.path}
                      className={`block font-semibold transition-colors ${
                        scrolled ? 'text-gray-800 hover:text-rose-500' : 'text-white hover:text-rose-200'
                      } ${location.pathname === link.path ? 'text-rose-500' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Nav;
/* eslint-disable no-unused-vars */
import image1 from './assets/cover1.jpg';
import About from './about';
import PlacesList from './places';
import Review from './review';
import Footer from './footer';
import EventsSection from './event';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-500 to-rose-300 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-center py-20 px-6">
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-extrabold mb-6">
              Welcome to <span className="text-yellow-300">Adama Date Places</span>
            </h1>
            <p className="text-xl mb-4">
              Your personal guide to the most romantic spots around town.
            </p>
            <p className="text-lg mb-4">
              Whether you are planning your first date or a special anniversary, find cozy cafés,
              scenic walks, rooftop dinners, and more  all in one place.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300"
               onClick={() => navigate('/places')}
            >
              Explore Now
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={image1}
              alt="Haileresort"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>


      <div className="bg-white py-16">
       
        <About />
      </div>

      
      <div className="bg-gray-100 py-16">
        
        <PlacesList />
      </div>

      
      <div className="bg-rose-50 py-16">
        
        <EventsSection />
      </div>

   
    </div>
  );
}

export default Home;
/* eslint-disable no-unused-vars */
import image1 from './assets/cover1.jpg';
import About from './about';
import PlacesList from './places';
import Review from './review';
import Footer from './footer';
import EventsSection from './event';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={image1}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Discover Perfect
              <span className="text-rose-400"> Date Spots</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Find the most romantic places in Adama for your special moments
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/places')}
                className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg shadow-lg hover:bg-rose-600 transition-colors"
              >
                Explore Places
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/events')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-colors"
              >
                View Events
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Featured Places Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-rose-500">Places</span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover our handpicked selection of romantic spots
            </p>
          </motion.div>
          <PlacesList />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-rose-500">Events</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss out on these special occasions
            </p>
          </motion.div>
          <EventsSection />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Couples <span className="text-rose-500">Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Read authentic reviews from our community
            </p>
          </motion.div>
          <Review />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
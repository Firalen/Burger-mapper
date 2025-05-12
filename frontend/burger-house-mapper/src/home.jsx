import image1 from './assets/cover1.jpg';
import About from './about';
import PlacesList from './places';
import Review from './review';
import Footer from './footer';
import EventsSection from './event';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-500 to-rose-300 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-center py-20 px-6">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-6xl font-extrabold mb-6">
              Welcome to <span className="text-yellow-300">Adama Date Places</span>
            </h1>
            <p className="text-xl mb-4">
              Your personal guide to the most romantic spots around town.
            </p>
            <p className="text-lg mb-4">
              Whether you're planning your first date or a special anniversary, find cozy cafés,
              scenic walks, rooftop dinners, and more – all in one place.
            </p>
            <button className="mt-4 px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
              Explore Now
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={image1}
              alt="Haileresort"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
            
        </div>
        <About />
      </div>

      {/* Places Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          
        </div>
        <PlacesList />
      </div>

      {/* Events Section */}
      <div className="bg-rose-50 py-16">
        <div className="container mx-auto text-center">
         
        </div>
        <EventsSection />
      </div>

      {/* Reviews Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          
        </div>
        <Review />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
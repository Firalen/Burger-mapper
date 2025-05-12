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
      <div className="relative bg-rose-50">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-300 opacity-50"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-center py-20 px-6">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to <span className="text-yellow-300">Adama Date Places</span>
            </h1>
            <p className="text-lg text-white mb-4">
              "Dating Place" is your personal guide to the most romantic spots around town.
            </p>
            <p className="text-lg text-white mb-4">
              Whether you're planning your first date or a special anniversary, find cozy cafés,
              scenic walks, rooftop dinners, and more – all in one place.
            </p>
            <p className="text-lg text-white">
              Book your perfect date location with ease!
            </p>
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
      <div className="bg-white py-12">
        <About />
      </div>

      {/* Places Section */}
      <div className="bg-gray-100 py-12">
        <PlacesList />
      </div>

      {/* Events Section */}
      <div className="bg-rose-50 py-12">
        <EventsSection />
      </div>

      {/* Reviews Section */}
      <div className="bg-white py-12">
        <Review />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
import image1 from './assets/cover1.jpg';
import About from './about';
import PlacesList from './places';
import Review from './review';
import Footer from './footer';
function Home() {
 

  return (
    <div>
     
     <div className='flex flex-col md:flex-row items-center justify-center bg-rose-50 pt-5'>
     <div className=" text-2xl text-center p-10 ">
     <h1 className="text-black font-italic text-3xl text-center p-10">ADAMA DATE PLACES</h1>
      <p>"Dating Place" is your personal guide to the most romantic spots around town.</p>
      <p>  Whether you're planning your first date or a special anniversary, find cozy cafés,</p>
      <p> scenic walks, rooftop dinners, and more – all in one place. Book your perfect date </p>location with ease!"
     </div>
        <div className='w-1/2 p-10'>
          <img src={image1} alt="Haileresort" className="w-full h-auto object-cover" />
        </div>
     </div>
     <About />
     <PlacesList />
     <Review />
     <Footer />
    </div>
  )
}

export default Home
import image1 from './assets/haileresort.jpg';


function App() {
 

  return (
    <>
     
     <div className='flex'>
     <div className=" text-2xl text-center p-10 font-light">
     <h1 className="text-red-800 font-italic text-3xl text-center p-10">ADAMA DATE PLACES</h1>
      <p>"Dating Place" is your personal guide to the most romantic spots around town.</p>
      <p>  Whether you're planning your first date or a special anniversary, find cozy cafés,</p>
      <p> scenic walks, rooftop dinners, and more – all in one place. Book your perfect date </p>location with ease!"
     </div>
        <div className='w-1/2 p-10'>
          <img src={image1} alt="Haileresort" className="w-full h-auto object-cover" />
        </div>
     </div>
    </>
  )
}

export default App

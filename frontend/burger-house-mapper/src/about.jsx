import React from 'react'

function about() {
  return (
    <div className='p-10 bg-gray-100'>
     <h1 className='font-semibold p-5 text-3xl text-center'>Testimonials for a Dating Recommendation Website</h1>
     <div className='flex gap-2 space-x-2'>
        <div className='space-y-2'>
           <h1 className='font-bold  '>⭐ Olivia & Ryan</h1>
            <p className='border-t-2'>"We tried the rooftop restaurant in the app’s top picks—absolutely<br></br> 
             magical! The view, the atmosphere, and even the playlist made it unforgettable.<br></br>
             We've already planned our second date!"</p>
        </div>
        <div className='space-y-2'  >
          <h1 className='font-bold'>⭐ Maya S.</h1>
          <p className='border-t-2'>"I used to struggle finding new date spots, but this site made it effortless. 
          <br></br>The café recommendations were perfect for a chill first date. Highly recommend!"</p>
        </div>
        <div className='space-y-2'>
            <h1 className='font-bold'>⭐ Anika R.</h1>
            <p className='border-t-2'>"Every place I've tried from the list was well-reviewed and lived up to
            <br></br> the hype. It’s like having a local guide with a romantic twist!"</p>
        </div>
     </div>
    </div>
  )
}

export default about

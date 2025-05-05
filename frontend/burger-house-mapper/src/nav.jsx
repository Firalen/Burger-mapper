import React from 'react'
import {Link} from 'react-router-dom'
function nav() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">ADAMA DATE PLACES</h1>
          <Link to="/" className="text-white hover:text-gray-300 font-bold">HOME</Link>
          <Link to="/about" className="text-white hover:text-gray-300 font-bold">ABOUT</Link> 
          <Link to="/contact" className="text-white hover:text-gray-300 font-bold">CONTACT</Link>
          <Link to="/places" className="text-white hover:text-gray-300 font-bold">PLACES</Link>
        </div>
        </nav>
    </div>
  )
}

export default nav

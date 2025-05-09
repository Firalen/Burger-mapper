import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'
import About from './about'
import Contact from './service'
import Places from './places'
import Nav from './nav'
import Review from './review'
function App() {

  return (
    <div>  
    
    <Router>
      <Nav  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/places" element={<Places />} />
        <Route path ="/review" element={<Review />} />
        </Routes>
    </Router>


    </div>
  )
}

export default App

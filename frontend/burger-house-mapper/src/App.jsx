import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'
import About from './about'
import Contact from './service'
import Places from './places'
import Nav from './nav'
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
        </Routes>
    </Router>


    </div>
  )
}

export default App

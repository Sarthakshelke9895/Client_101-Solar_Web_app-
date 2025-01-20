import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';



const App = () => {
  return (
    <div className='container'>
          <Router>
      <Navbar />
      <ScrollToTop />
      
      <div className='Elements'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Reviews/>
      
      <Footer/>
    </Router>
    </div>

  );
};

export default App;

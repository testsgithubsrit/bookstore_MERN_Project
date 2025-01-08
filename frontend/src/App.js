import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup/Signup';
import  { Toaster } from 'react-hot-toast';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  
  return (
    <>
    <Router>
       <Routes> 
        {/* Render Navbar and Footer only for specific routes */}
        <Route
          path="*"
          element={
            <>
      <Navbar />
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
       
      </Routes>
      <Footer />
      </>
          }
          />
          {/* Exclude Navbar and Footer for the Signup page */}
        <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
     <Toaster />
     </>
  );
}   

export default App; 

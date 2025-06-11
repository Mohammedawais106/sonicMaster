import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSession from "./components/WorkoutSession";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMIcalculator from "./components/BMIcalculator";
// import Footer from "./components/Footer/Footer";         // Main Footer
import Footer from "./components/Footer"
import GymFooter from './components/GymFooter';
import Video from './components/Video';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSession />
      <Gallery />
      <Pricing />
      <Contact />
      <BMIcalculator />
      <Video/>
      <GymFooter/>
      <Footer />     
      <ToastContainer theme='dark' position='top-center' />
    </Router>
  );
};

export default App;

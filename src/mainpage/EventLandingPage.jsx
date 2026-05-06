import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import About from '../components/About'
import Schedule from '../components/Schedule';

import LatestGallery from '../components/LatestGallery';
import Footer from '../components/Footer';
import '../App.css';

export default function EventLandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Schedule/>
      <LatestGallery/>
      <Footer/>
    </>
  );
}

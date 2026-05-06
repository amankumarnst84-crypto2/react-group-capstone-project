import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import About from '../components/About'

import '../App.css';

export default function EventLandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
    </>
  );
}

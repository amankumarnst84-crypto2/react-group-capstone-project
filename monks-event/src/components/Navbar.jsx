
import React from "react";
import '../components_css/nav.css'
export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="logo">VibeX</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#about-section">About</a>
        <a href="#speakers-section">Speakers</a>
        <a href="#gallery">Gallery</a>
        <a href="#footer">Contact</a>
      </div>
      <button className="btn-nav">Get Started</button>
    </nav>
  );
}
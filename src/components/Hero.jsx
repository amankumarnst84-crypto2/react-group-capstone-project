import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/hero-main.jpg'; 
import spacePic from '../assets/Space.png';
import smallPic from '../assets/concert.png';
import '../components_css/Hero.css'

export default function Hero() {
  const navigate = useNavigate(); 

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-date">15-17 April Newton School Of Technology</p>
        <h1>Neutron<br /> Event 2026</h1>
        <p className="hero-desc">
          Tech Innovation Event 2026: Unveiling breakthrough technologies and fun fest dances and manymore.
        </p>
        <div className="hero-btns">
         
          <button 
            className="btn-purple" 
            onClick={() => navigate('/buy-tickets')}
          >
            Buy Tickets
          </button>
          
          <button className="btn-outline">See Schedule</button>
        </div>
      </div>

      <div className="hero-images">
        <div className="img-circle">
          <img src={logo} alt="Event Participant" />
        </div>
        <div className="img-arch-main">
          <img src={spacePic} alt="Main Speaker" />
        </div>
        <div className="img-arch-small">
          <img src={smallPic} alt="Concert" />
        </div>
        <div className="star-doodle">✦</div>
        <div className="arrow-doodle">⤴</div>
      </div>
    </section>
  );
}
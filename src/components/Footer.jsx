import React from 'react';
import '../components_css/footer.css'

export default function Footer() {
  return (
    <footer className="footer-section" id='footer'>
      
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="decorative-star">✦</div>
          <h2>Never miss a single news</h2>
          <p>
            Stay informed with all the latest updates and news about our events. 
            Never miss a moment of our exciting and innovative gatherings in the world of technology and beyond.
          </p>
          
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email address" />
            <button className="btn-purple">Subscribe</button>
          </div>
          
          <div className="decorative-squiggle">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <path d="M10 50 Q 30 10 50 50" fill="none" stroke="#7c3aed" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>

   
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-logo">Eventive</div>
          
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#tickets">Tickets</a>
            <a href="#speakers">Speakers</a>
            <a href="#gallery">Gallery</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <span className="social-icon tw">𝕏</span>
            <span className="social-icon fb">f</span>
            <span className="social-icon li">in</span>
            <span className="social-icon vi">v</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © Designmonks All Rights Reserved</p>
          <div className="legal-links">
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
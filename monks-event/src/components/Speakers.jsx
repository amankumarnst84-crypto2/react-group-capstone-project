import React from 'react';
import speaker1 from '../assets/spk2.jpg'
import aman from '../assets/aman.jpg'
import amit from '../assets/amit.jpg'
import saurabh from '../assets/saurabh.jpg'
import ayush from '../assets/ayush.jpg'
import dj from '../assets/dj.jpg'
export default function Speakers() {
  const speakerList = [
    { name: "AMAN AGRAWAL", role: "UX DESIGNER", img: aman },
    { name: "AMITPAL", role: "DEVELOPER", img: amit },
    { name: "AYUSH KUMAR", role: "Lover of Jk ", img: ayush },
    { name: "SAURAV KUMAR", role: "BIHARI BOI", img: saurabh },
  ];

  return (
    <section className="speakers-section" id="speakers-section">
     
      <div className="influencers-block">
        <div className="inf-container">
          <div className="inf-image-left">
             <div className="arch-frame-left">
                <img src={speaker1} alt="influencer" />
             </div>
          </div>

          <div className="inf-text-center">
            <h2>The event boasts our top creative influencers</h2>
            <p>    The event features renowned artist Gajendra Verma and the innovative platform Iqplise Nova, both known for shaping trends and inspiring creativity across industries.</p>
            
            <div className="inf-schedule">
              <div className="sch-item">
                <h4>Gajendra verma</h4>
                <p>april 15, 2026</p>
                <span>10:00 PM - 11:30 PM</span>
              </div>
              <div className="sch-item">
                <h4>DJ KARMARI</h4>
                <p>april 17, 2026</p>
                <span>07:00 PM - 11:00 PM</span>
              </div>
            </div>
          </div>

          <div className="inf-image-right">
             <div className="arch-frame-right">
                <img src={dj} alt="influencer" />
             </div>
          </div>
        </div>
      </div>

    
      <div className="speakers-grid-block">
        <div className="grid-header">
          <h3>Meet the top <br /> incredible <span>speakers</span></h3>
          <button className="view-all-btn">View All Speakers</button>
        </div>

        <div className="speakers-cards-container">
          {speakerList.map((speaker, index) => (
            <div className="speaker-card" key={index}>
              <div className="card-img-wrapper">
                <img src={speaker.img} alt={speaker.name} />
                <div className="social-overlay">
                  
                  <span>𝕏</span> <span>f</span> <span>in</span>
                </div>
              </div>
              <div className="card-details">
                <h4>{speaker.name}</h4>
                <p>{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
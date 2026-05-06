import React from 'react';
import '../components_css/gallery.css'
import chill from '../assets/chill.png'
import startx from '../assets/startx.png'
import neutronold from '../assets/Neutronold.png'
import coming from '../assets/coming.png'
 
export default function Gallery() {
  const posts = [
    { title: "CHILL LOUNGE", views: "50K VIEWS", img: chill },
    { title: "Nexus...", views: "24K VIEWS", img: startx },
    { title: "Neutron 2.0", views: "25K VIEWS", img: neutronold },
    { title: "Neutron 3.0....soon", views: "33K VIEWS", img: coming },
  ];

  return (
    <section className="gallery-section" id='gallery'>
      <div className="gallery-header">
        <h2>More from Neutron Event</h2>
        <button className="insta-btn">Follow on Instagram</button>
      </div>

      <div className="gallery-grid">
        {posts.map((post, index) => (
          <div className="gallery-card" key={index}>
            <img src={post.img} alt={post.title} />
            <div className="gallery-overlay">
              <h3>{post.title}</h3>
              <p>{post.views}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
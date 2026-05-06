import React from 'react';
import '../components_css/latestgal.css'
import img1 from '../latestgallery/img1.jpg'
import img2 from '../latestgallery/img2.jpg'
import img3 from '../latestgallery/img3.jpg'
import img4 from '../latestgallery/img4.jpg'
import img5 from '../latestgallery/img5.jpg'
import img6 from '../latestgallery/img6.jpg'
import img7 from '../latestgallery/img7.jpg'
import img8 from '../latestgallery/img8.jpg'
import img9 from '../latestgallery/img9.jpg'
import img10 from '../latestgallery/img10.jpg'
import img11 from '../latestgallery/img11.jpg'
import img12 from '../latestgallery/img12.jpg'

export default function LatestGallery() {
  const images = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12
  ];

  return (
    <section className="latest-gallery">
      <div className="gallery-header">
        <h2>Check our latest gallery</h2>
      </div>

      <div className="masonry-grid">
        {images.map((url, i) => (
          <div key={i} className={`masonry-item item-${i}`}>
            <img src={url} alt={`Gallery ${i}`} />
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <button className="view-all-gallery">View All Gallery</button>
      </div>
    </section>
  );
}
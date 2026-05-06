import '../components_css/LogoBanner.css';


export default function About() {
  return (
    <div className="about-section" id="about-section">
      <div className="logo-banner">
      <div className="logo-track">
        <span className="partner-name">NEWTON SCHOOL</span>
        <span className="partner-name">GOOGLE</span>
        <span className="partner-name">MICROSOFT</span>
        <span className="partner-name">GITHUB</span>
        <span className="partner-name">AWS</span>
        <span className="partner-name">RISHIHOOD UNIVERSITY</span>
        
        <span className="partner-name">NEWTON SCHOOL</span>
        <span className="partner-name">GOOGLE</span>
        <span className="partner-name">MICROSOFT</span>
        <span className="partner-name">GITHUB</span>
        <span className="partner-name">AWS</span>
        <span className="partner-name">Rishihoood University</span>
      </div>
    </div>

      <div className="about-container">
        <div className="about-header">
          <h2>About the event</h2>
          <p>
            Tech Event 2026 showcases groundbreaking innovations, featuring keynote talks, interactive workshops, and networking sessions for tech enthusiasts and industry leaders.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card card-large">
            <div className="card-info">
              <span>MEMORABLE EXPERIENCE</span>
              <h3>Unforgettable Moments at Eventive 2026</h3>
            </div>
          </div>
          <div className="about-card card-mid">
            <div className="card-info">
            </div>
          </div>
          <div className="about-card card-mid">
            <div className="card-info">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import damru from './damru.png'

const HomePage = () => {
  const navigate = useNavigate();

  const events = [
    { status: "EXPIRED", title: "DAMRU", type: "expired", btnText: "View Archive" },
    { status: "ONGOING", title: "NEUTRON 2026", type: "ongoing", btnText: "Explore Now" },
    { status: "UPCOMING", title: "DESIGNX", type: "upcoming", btnText: "Pre-Book" }
  ];

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <div className="logo">MONKS EVENT</div>
      </header>

      <main className="column-container">
        {events.map((event, index) => (
          <div key={index} className={`event-column ${event.type}`}>
            <div className="overlay"></div>
            <div className="content">
              <span className={`status-badge ${event.type}`}>{event.status}</span>
              <h2 className="event-title">{event.title}</h2>
              <button 
                className="action-btn"
                onClick={() => event.type === 'ongoing' ? navigate('/ongoing-event') : null}
              >
                {event.btnText}
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default HomePage;
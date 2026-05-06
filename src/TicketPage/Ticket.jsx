import React, { useState } from 'react';
import './Ticket.css';

const Ticket = () => {
  const [userName, setUserName] = useState("Aman Agrawal");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-container">
      <div className="stars"></div>
      <h1 className="main-title">PHOTON BY NEUTRON3.0 TICKET </h1>
      <p className='main-title-by'>BY - MONKS EVENT</p>
      
      <div className="main-layout">
        {/* Ticket Preview */}
        <div className="ticket-card" id="printable-area">
          <div className="ticket-left">
            <span className="badge">ADMIT ONE</span>
            <div className="ticket-info">
              <h2 className="guest-name">{userName || "Guest"}</h2>
              <p className="event-tag">NEUTRON 2026</p>
            </div>
            
            <div className="details-row">
              <div className="detail-item">
                <label>DATE</label>
                <p>April 17, 2026</p>
              </div>
              <div className="detail-item">
                <label>VENUE</label>
                <p>Rishihood University</p>
                <p className="sub-loc">Sonipat, Haryana</p>
              </div>
            </div>
          </div>

          <div className="ticket-right">
            <div className="barcode-area">
              <div className="barcode-mock"></div>
              <p className="serial">NT-2026-001</p>
            </div>
            <div className="price-tag">
              <label>PRICE</label>
              <p>₹999.00</p>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="control-panel">
          <h3>Customize Ticket</h3>
          <div className="input-group">
            <label>Artist Name</label>
            <input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              placeholder="Enter name"
            />
          </div>
          
          <div className="fixed-data-grid">
            <div className="input-group disabled">
              <label>Event Name</label>
              <input type="text" value="NEUTRON" disabled />
            </div>
            <div className="input-group disabled">
              <label>Price</label>
              <input type="text" value="₹999" disabled />
            </div>
          </div>

          <button className="print-btn" onClick={handlePrint}>
            PRINT TICKET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
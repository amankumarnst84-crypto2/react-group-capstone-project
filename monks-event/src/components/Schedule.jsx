import React from 'react';
import '../components_css/Schedule.css'
import bgmi from '../assets/bgmi.png'
import hackathon from '../assets/hackathon.png'
import codbat from '../assets/codebat.png'
import latent from '../assets/latent.png'

export default function Schedule() {
  const events = [
    {
      title: "E-SPORT",
      speaker: "KRAFTON BGMI",
      time: "10:00 AM - 06:00 PM",
      desc: "BGMI turns gamers into warriors.In the world of esports, every drop, every shot, every win defines your legacy.",
      bgColor: "#fef3c7",
      img: bgmi,
    },
    {
      title: "HACKATHON OPENING",
      speaker: "PHOTON TEAM",
      time: "04:00 PM - 05:00 PM",
      desc: "that’s the spirit of a hackathon.From ideas to innovation in hours, where creativity meets execution.",
      bgColor: "#ede9fe", 
      img: hackathon,
    },
    {
      title: "CODE COMBAT",
      speaker: "MOBBIN",
      time: "6:00 PM - 10:00 PM",
      desc: "In code combat, every bug is an enemy and every fix is a victory.",
      bgColor: "#e0f2fe",
      img: codbat
    },
    {
      title: "ENGINEER'S GOT LATENT",
      speaker: "NST",
      time: "7:00 PM - 9:00 PM",
      desc: "When logic meets creativity, that latent spark turns into groundbreaking innovation.",
      bgColor: "#ffedd5", 
      img: latent
    }
  ];

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-header">
        <h2>Browse all the schedule</h2>
        <p>Explore the complete event schedule to find sessions, speakers, and activities that match your interests.</p>
      </div>

      <div className="schedule-container">
       
        <div className="date-header">
          <div className="date-left">
            <span>📅 Day 1</span>
            <strong>Sunday, April 2026</strong>
          </div>
          <div className="date-right">Tech & Innovation Fest</div>
        </div>

        {events.map((event, index) => (
          <React.Fragment key={index}>
            <div className="schedule-card" style={{ backgroundColor: event.bgColor }}>
              <div className="card-img">
                <img src={event.img} alt={event.speaker} />
              </div>
              <div className="card-content">
                <div className="card-top">
                  <h3>{event.title}</h3>
                  <span className="time">{event.time}</span>
                </div>
                <p className="speaker-name">By {event.speaker}</p>
                <p className="card-desc">{event.desc}</p>
              </div>
            </div>
            
            {index === 1 && (
              <div className="lunch-break">
                <h4>Lunch Break & Networking</h4>
                <p>12:30 PM - 2:00 PM</p>
              </div>
            )}
          </React.Fragment>
        ))}

        <div className="schedule-footer">
          <button className="btn-purple">See All Schedule</button>
        </div>
      </div>
    </section>
  );
}
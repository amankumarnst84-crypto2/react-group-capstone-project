

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './mainpage/HomePage';
import EventLandingPage from './mainpage/EventLandingPage';
import TicketLandingPage from './TicketPage/TicketLandingPage';

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<HomePage />} />
        
        <Route path="/ongoing-event" element={<EventLandingPage />} />

        <Route path="/buy-tickets" element={<TicketLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
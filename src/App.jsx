

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './mainpage/HomePage';
import EventLandingPage from './mainpage/EventLandingPage';

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<HomePage />} />
        
        <Route path="/ongoing-event" element={<EventLandingPage />} />

      </Routes>
    </Router>
  );
}

export default App;
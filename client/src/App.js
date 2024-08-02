import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import DonationsPage from './pages/DonationPage';
import EmergencyPage from './pages/EmergencyPage';
import ServicePage from './pages/ServicePage';
import EventLeaderboardPage from './pages/EventPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/leaderboard" element={<EventLeaderboardPage />} />
        </Routes>
      </Router>
  );
}

export default App;

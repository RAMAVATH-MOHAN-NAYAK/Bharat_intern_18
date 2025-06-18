import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-section"
      >
        <h1>Welcome to Event Manager</h1>
        <p>Your one-stop solution for seamless event management</p>
        
        <div className="cta-buttons">
          <Link to="/login" className="cta-button primary">
            Login
          </Link>
          <Link to="/register" className="cta-button secondary">
            Register
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="features-section"
      >
        <div className="feature">
          <h3>Create Events</h3>
          <p>Easily create and manage your events</p>
        </div>
        <div className="feature">
          <h3>Track Attendees</h3>
          <p>Monitor registrations and attendance</p>
        </div>
        <div className="feature">
          <h3>Analytics</h3>
          <p>Get insights about your events</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
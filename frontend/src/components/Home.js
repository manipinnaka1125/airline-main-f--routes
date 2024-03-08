// Home.js

import React, { useState } from 'react';
import './Home.css';
import Login from './Login'; // Import the Login component

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleClickGetStarted = () => {
    // Set showLogin to true when the button is clicked
    setShowLogin(true);
  };

  return (
    <div className="home-container">
      {/* Header and App Bar - Assuming you have these components */}

      {/* Main Content */}
      <div className="main-content" >
        {/* Conditionally render either the Home content or the Login component */}
        {showLogin ? (
          <Login />
        ) : (
          <div className="content-overlay">
            <h1>Welcome to AirEase Airlines</h1>
            <p>Book your flights with ease and comfort</p>
            <p>"Experience seamless travel with our user-friendly airline booking platform</p>
            <p>offering competitive prices, diverse flight options, and hassle-free reservations for your next journey."</p>
            {/* Get Started Button */}
            <button className="get-started-button" onClick={handleClickGetStarted}>
              Get Started
            
            </button>
            
          </div>
        )}
      </div>
      <div style={{ marginTop: '-190px' }}>
      <div align="center" ><iframe
  title="AirEase Airlines Video"
  width="800"
  height="500"

  src="https://www.youtube.com/embed/pXznPl1QXdI?si=sTzTW7qANMZHSr1d"
></iframe></div>
</div>
    </div>
  );
};

export default Home;

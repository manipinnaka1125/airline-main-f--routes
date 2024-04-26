import React, { useState } from 'react';
import './Home.css';
import Login from './Login'; 

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleClickGetStarted = () => {
    setShowLogin(true);
  };

  return (
    <div className="home-container">
      {/* Main content container */}
      <div className="main-content">
        {/* Check if Login component should be rendered */}
        {showLogin ? (
          <Login />
        ) : (
          <div className="content-overlay">
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

      {/* YouTube iframe container */}
      <div className="youtube-container">
        <div align="center">
          <iframe
            title="AirEase Airlines Video"
            width="1500"
            height="700"
            src="https://www.youtube.com/embed/pXznPl1QXdI?si=sTzTW7qANMZHSr1d"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;

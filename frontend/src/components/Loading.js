import React from 'react';
import './Loading.css'; // Import your CSS file for styling

const LoadingAnimation = () => {
  return (
    <div className="loader">
      <div className="wait">Please Wait While Redirecting</div>
      <div className="iata_code departure_city">MAR</div>
      <div className="plane">
        <img src="https://zupimages.net/up/19/34/4820.gif" alt="plane" className="plane-img" />
      </div>
      <div className="earth-wrapper">
        <div className="earth"></div>
      </div>  
      <div className="iata_code arrival_city">COS</div>
    </div>
  );
};

export default LoadingAnimation;

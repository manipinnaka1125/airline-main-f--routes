import React from 'react';

const PassengerHome = ({ username }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome aboard, ALL IS WELL</h1>
      <p style={styles.subHeading}>Sit back, relax, and enjoy your journey with Marcos Airlines.</p>
      <div style={styles.messageContainer}>
        <p style={styles.message}>
          We're thrilled to have you back with us, ready to embark on another journey with Marcos Airlines. As you step into your personalized flight profile, get ready to explore a world of convenience and tailored travel experiences.
        </p>
        <p style={styles.message}>
          From managing your upcoming flights to accessing important travel documents, your profile puts you in control of your journey like never before. Whether you're a frequent flyer or embarking on your first adventure with us, we're committed to ensuring your flight experience is nothing short of exceptional.
        </p>
        <p style={styles.message}>
          Sit back, relax, and let us take care of the details. As you navigate through your profile, feel free to explore the range of services and amenities designed to enhance your travel experience. Whether it's checking in for your flight, updating your seat preferences, or discovering exciting destination insights, your journey begins here.
        </p>
        <p style={styles.message}>
          Thank you for choosing Marcos Airlines. We're honored to have you onboard and look forward to serving you throughout your travels.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  heading: {
    fontFamily: 'cursive',
    fontSize: '2.5rem',
    color: '#004080',
    margin: '0',
  },
  subHeading: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0.5rem 0 2rem 0',
  },
  messageContainer: {
    maxWidth: '800px',
    margin: 'auto',
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '1.5rem',
  },
};

export default PassengerHome;

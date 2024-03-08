import { Typography,Link } from '@mui/material';
import React from 'react';


const About = () => {
  return (
    
    
    <div style={ styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
  Welcome to our Airline Reservation Platform! Your gateway to seamless travel experiences begins here. We pride ourselves on offering a user-friendly and efficient space for individuals looking to book flights with ease. Our dedicated team is committed to ensuring that your travel plans are not just a journey but an adventure filled with comfort and convenience.
</p>
<p style={styles.paragraph}>
  At the heart of our platform is the belief in providing transformative travel solutions. Whether you are a business traveler or embarking on a leisurely escape, our platform is meticulously crafted to connect you with a diverse array of flight options, catering to your unique preferences and needs.
</p>
<p style={styles.paragraph}>
  Explore the comprehensive features of our platform, where you can effortlessly search for flights, compare prices, and manage your reservations seamlessly. Your travel experience is our priority, and we are here to empower you with the tools to curate a personalized and stress-free journey.
</p>
<p style={styles.paragraph}>
  Book your flights, manage your itineraries, and embark on a journey where every detail is tailored to enhance your travel experience. Thank you for choosing our Airline Reservation Platform as your trusted partner in transforming your travel dreams into reality.
</p>

      <Typography>
     
      <center> <p>for any querys message my instagram account:</p><Link color="inherit" href="https://www.instagram.com/swaroop2k_5/">
        pinnakamaniswaroop
      </Link></center>
      </Typography>
    </div>
    
  );
};


    const styles = {
        container: {
          maxWidth: '600px',
          margin: 'auto',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: 'light grey',
        },
        heading: {
          color: 'darkblack',
          fontSize: '2em',
          marginBottom: '20px',
        },
        paragraph: {
          color: 'black',
          fontSize: '1.2em',
          lineHeight: '1.6',
          marginBottom: '15px',
        },
      };
      

export default About;

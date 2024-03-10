import React from 'react';
//import lokesh from './images/Lokesh.jpg'

import swaroop from '../images/swaroop.jpg';
import rampa from '../images/rampa.jpg';
import lokesh from '../images/lokesh.jpg';
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '0 20px'
  },
  teamMember: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px'
  },
  memberImage: {
    maxWidth: '100px',
    borderRadius: '50%',
    marginRight: '10px',
    float: 'left'
  }
};

function TeamMember({ imageSrc, altText, role, name, experience, skills }) {
  return (
    <div style={styles.teamMember}>
      <img src={imageSrc} alt={altText} style={styles.memberImage} />
      <h2>{role}</h2>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      
      <p>Skills: {skills}</p>
    </div>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <h1>Our Airline Reservation Team</h1>
      <TeamMember
        imageSrc={lokesh}
        altText="Lokesh Vemareddy"
        role="Frontend Developer"
        name="Lokesh Vemareddy"
        Redg No="220003974"
        skills="HTML, CSS, JavaScript, React"
      />
      <TeamMember
        imageSrc={rampa}
        altText="Ram Prasad Atluri"
        role="MiddleWare Developer"
        name="Ram Prasad Atluri"
        Redg No="2200031828"
        skills="Express, Mongodb,react"
      />
      <TeamMember
        imageSrc={swaroop}
        altText="Pinnaka ManiSwaroop"
        role="BackEnd Developer"
        name="Pinnaka ManiSwaroop"
        Redg No="2200030449"
        skills="Node.js, Express, MongoDB"
      />
    </div>
  );
}

export default App;

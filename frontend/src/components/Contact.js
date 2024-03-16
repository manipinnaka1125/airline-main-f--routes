import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
    // You can add additional logic to handle form submission, e.g., sending data to a server
  };

  const styles = {
    contactContainer: {
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
      color: '#000000', // Black text color
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginTop:'100px',
      marginBottom:'100px',
    },  
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
     
    },
    label: {
      marginBottom: '8px',
    },
    input: {
      padding: '8px',
      marginBottom: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    textarea: {
      padding: '8px',
      marginBottom: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
   
    <div style={styles.contactContainer}>
     <center><h2>Contact Us</h2></center> 
      <form onSubmit={handleSubmit} style={styles.contactForm}>
        <label style={styles.label}>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <br />
        <label style={styles.label}>
          Your Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <br />
        <label style={styles.label}>
          Your Message:
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Submit
        </button>
        <center><p> email for more info pinnakamaniswaroop@gmail.com</p></center>
      </form>
    </div>
  );
};

export default Contact;

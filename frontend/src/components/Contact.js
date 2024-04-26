import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/contact', formData);
      if (response.status === 200) {
        console.log('Form data submitted:', formData);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setSubmitted(true); // Set submitted to true after successful submission
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const styles = {
    contactContainer: {
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      backgroundImage: 'linear-gradient(to top left, #f7c4f3, #fceabb)',
      color: '#000000', // Black text color
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginTop: '100px',
      marginBottom: '100px',
    },
    contactForm: {
      display: 'flex',
      
      flexDirection: 'column',
    },
    label: {
      marginBottom: '8px',
      color: 'black', // White text color
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
  };

  // Render "Thank You" message conditionally when submitted is true
  const thankYouMessage = submitted && (
    <div style={{ textAlign: 'center', color: '#ffffff' }}>
      <h1>Thank You!</h1>
      <p>We have received your message.</p>
    </div>
  );

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
       
        {thankYouMessage}
        <center><p>Email for more info: pinnakamaniswaroop@gmail.com</p></center>
      </form>
    </div>
  );
};

export default Contact;

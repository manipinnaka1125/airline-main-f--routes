import React, { useState, useEffect } from 'react';
import './Ticket.css'; // Import CSS file for styling
import axios from 'axios';

function Ticket() {
  const [latestPassengerDetails, setLatestPassengerDetails] = useState(null);

  useEffect(() => {
    // Fetch passenger details from the server
    axios.get('http://localhost:8081/retrieve/passengerdetails')
      .then(response => {
        console.log('Response from server:', response.data); // Log the response data
        // Set the latest passenger details
        if (response.data.length > 0) {
          setLatestPassengerDetails(response.data[response.data.length - 1]);
        }
      })
      .catch(error => {
        console.error('Error fetching passenger details:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once after component mount

  return (
    <div className="ticket-container">
      <div className="ticket-card">
        <h2 className="ticket-title">Your Flight Ticket</h2>
        {latestPassengerDetails && (
          <div className="ticket-info">
            <p><strong>Name:</strong> {latestPassengerDetails.name}</p>
            <p><strong>Email:</strong> {latestPassengerDetails.email}</p>
            <p><strong>Phone:</strong> {latestPassengerDetails.phoneNumber}</p>
            <p><strong>Passport Number:</strong> {latestPassengerDetails.passportNumber}</p>
          </div>
        )}
        <button className="cancel-ticket-button">Cancel Ticket</button>
      </div>
    </div>
  );
}

export default Ticket;

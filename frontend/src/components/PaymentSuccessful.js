import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './PaymentSuccessful.css'; // Import CSS file for styling

function PaymentSuccessful() {
  return (
    <div className="payment-successful-container">
      <center>
        <h1 className="success-message">Your payment was successful!</h1>
        <p className="thank-you-message">Thank you for your FLYING </p>
        <Link to="/Ticket" className="view-ticket-button">View Your Ticket</Link> {/* Link to the ticket page */}
      </center>
    </div>
  );
}

export default PaymentSuccessful;

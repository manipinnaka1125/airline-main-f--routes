import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection
import './PaymentGateway.css'; // Import CSS file for styling
import upi from '../images/upi.jpg'; // Import UPI image

function PaymentGateway({ passengerInfo }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: '',
    cardNumber: '',
    bankName: '',
    // Add more payment details as needed
  });
  const [showQRCode, setShowQRCode] = useState(false); // State to toggle QR code display
  const [redirectTimer, setRedirectTimer] = useState(30); // Timer for redirection, initially set to 30 seconds

  const navigate = useNavigate(); // Get the navigate function for redirection

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setShowQRCode(false); // Hide QR code when payment method is changed
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission based on the selected payment method
    console.log("Submitting payment details:", paymentDetails);
    // You can implement the actual payment processing logic here

    // Show QR code for UPI payment
    if (paymentMethod === 'upi') {
      setShowQRCode(true);
      startRedirectTimer(); // Start the redirect timer if payment method is UPI
    }
  };

  useEffect(() => {
    // Redirect to payment successful page when redirectTimer reaches 0
    if (redirectTimer === 0) {
      navigate('/PaymentSuccessful'); // Redirect to payment successful page using navigate
    }
  }, [redirectTimer, navigate]);

  const startRedirectTimer = () => {
    const timer = setInterval(() => {
      setRedirectTimer(prevTimer => prevTimer - 1);
    }, 1000); // Update timer every second

    // Clear the timer after 30 seconds
    setTimeout(() => {
      clearInterval(timer);
    }, 30000);
  };

  return (
    <div className="payment-card">
      <h2>Payment Gateway</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-form">
          <label>Select Payment Method:</label>
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Select Payment Method</option>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
            <option value="netBanking">Net Banking</option>
          </select>
        </div>
        {paymentMethod === 'card' && (
          <div>
            <div className="input-group">
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Cardholder Name:</label>
              <input
                type="text"
                name="cardName"
                value={paymentDetails.cardName}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Expiry Date:</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
            <div className="input-group">
              <label>CVV:</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
          </div>
        )}
        {paymentMethod === 'netBanking' && (
          <div>
            <div className="input-group">
              <label>Bank Name:</label>
              <input
                type="text"
                name="bankName"
                value={paymentDetails.bankName}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Account Number:</label>
              <input
                type="text"
                name="accountNumber"
                value={paymentDetails.accountNumber}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
            <div className="input-group">
              <label>IFSC Code:</label>
              <input
                type="text"
                name="ifscCode"
                value={paymentDetails.ifscCode}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
          </div>
        )}

        <br />
        <center>
          <button className="button1" type="submit">Pay Now</button>
        </center>
      </form>
      {/* Display QR code if showQRCode is true */}
      {showQRCode && (
        <div className="qr-code-container">
          <h3>Scan QR Code to Complete Payment</h3>
          <img className="qr-code-image" src={upi} alt="QR Code" />
          <p>Redirecting in {redirectTimer} seconds...</p>
        </div>
      )}
    </div>
  );
}

export default PaymentGateway;

import React, { useState } from 'react';
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
    }
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

        <br></br>
       <center> <button className="button1" type="submit">Pay Now</button></center>
      </form>
      {/* Display QR code if showQRCode is true */}
      {showQRCode && (
        <div className="qr-code-container">
          <h3>Scan QR Code to Complete Payment</h3>
          <img className="qr-code-image" src={upi} alt="QR Code" />
        </div>
      )}
    </div>
  );
}

export default PaymentGateway;

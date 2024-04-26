import React, { useState } from 'react';

function PassengerForm({ onSubmit }) {
  const [passengerInfo, setPassengerInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    passportNumber: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerInfo({
      ...passengerInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(passengerInfo);
    // Redirect to payment gateway after submitting with passenger details as query parameters
    const queryString = new URLSearchParams(passengerInfo).toString();
    window.location.href = `/PaymentGateway?${queryString}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={passengerInfo.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={passengerInfo.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={passengerInfo.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="passportNumber">Passport Number</label>
        <input
          type="text"
          className="form-control"
          id="passportNumber"
          name="passportNumber"
          value={passengerInfo.passportNumber}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add more fields as needed */}
      <button type="submit" className="btn btn-primary">
        Confirm Booking
      </button>
    </form>
  );
}

export default PassengerForm;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookingsData = () => {
  const [passengerDetails, setPassengerDetails] = useState([]);

  useEffect(() => {
    fetchPassengerDetails();
  }, []);

  const fetchPassengerDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8081/retrieve/passengerdetails');
      setPassengerDetails(response.data);
      console.log('Passenger details:', response.data);
    } catch (error) {
      console.error('Error fetching passenger details:', error);
    }
  };

  return (
    <div style={{ background: 'linear-gradient(to top left, #cfd9df, #e2ebf0)', minHeight: '100vh', padding: '50px 0' }}>
      <center>
        <h1 style={{ marginBottom: '30px', fontSize: '2rem', color: '#333' }}>Admin Bookings</h1>
        <div style={{ marginBottom: '20px' }}>
          <Link to="/Admin" style={{ marginRight: '20px', color: '#333', textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', background: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background 0.3s' }}>Admin Panel</Link>
          <Link to="/BookingsData" style={{ marginRight: '20px', color: '#333', textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', background: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background 0.3s' }}>Bookings</Link>
          <Link to="/FlightData" style={{ color: '#333', textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', background: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background 0.3s' }}>Flight Data</Link>
        </div>
        <table style={{ width: '95%', color: '#333', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ border: '1px solid #ddd', backgroundColor: '#f7f7f7' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Passenger Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone Number</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Passport Number</th>
              {/* Add more fields as needed */}
            </tr>
          </thead>
          <tbody>
            {passengerDetails.map((passenger, index) => (
              <tr key={index} style={{ border: '1px solid #ddd', backgroundColor: index % 2 === 0 ? '#f7f7f7' : '#fff' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{passenger.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{passenger.email}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{passenger.phoneNumber}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{passenger.passportNumber}</td>
                {/* Add more fields as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default BookingsData;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import data from '../data'; // Update import path

const FlightData = () => {
  const [flights, setFlights] = useState([]);
  const [newFlight, setNewFlight] = useState({
    price: '',
    depart: '',
    arrival: '',
    departTime: '',
    arrivalTime: '',
    code: '',
    flightImg: '',
    from: {
      city: '',
      short: '',
    },
    to: {
      city: '',
      short: '',
    },
  });

  useEffect(() => {
    console.log(data); // Log the data to the console
    setFlights(data); // Set flights data from imported data.js
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFlight((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddFlight = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setFlights((prevFlights) => [...prevFlights, newFlight]);
    setNewFlight({
      price: '',
      depart: '',
      arrival: '',
      departTime: '',
      arrivalTime: '',
      code: '',
      flightImg: '',
      from: {
        city: '',
        short: '',
      },
      to: {
        city: '',
        short: '',
      },
    });
  };

  const handleDeleteFlight = (index) => {
    const updatedFlights = [...flights];
    updatedFlights.splice(index, 1);
    setFlights(updatedFlights);
  };

  return (
    <div style={{ background: 'linear-gradient(to top left, #cfd9df, #e2ebf0)', minHeight: '100vh', padding: '50px 0' }}>
      <center>
        <h1 style={{ marginBottom: '30px', fontSize: '2rem', color: '#333' }}>Flight Data</h1>
        <div style={{ marginBottom: '20px' }}>
          <Link to="/Admin" style={{ marginRight: '20px', color: '#333', textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', background: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background 0.3s' }}>Admin Panel</Link>
          <Link to="/BookingsData" style={{ marginRight: '20px', color: '#333', textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', background: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background 0.3s' }}>Bookings</Link>
          <Link to="/FlightData" style={{ color: '#333', textDecoration: 'none', fontSize: '1.2rem', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', background: '#f0f0f0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'background 0.3s' }}>Flight Data</Link>
        </div>
        <form onSubmit={handleAddFlight} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ marginBottom: '10px' }}>
            Price:
            <input type="text" name="price" value={newFlight.price} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Depart:
            <input type="text" name="depart" value={newFlight.depart} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Arrival:
            <input type="text" name="arrival" value={newFlight.arrival} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Departure Time:
            <input type="text" name="departTime" value={newFlight.departTime} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Arrival Time:
            <input type="text" name="arrivalTime" value={newFlight.arrivalTime} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Flight Code:
            <input type="text" name="code" value={newFlight.code} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Flight Image:
            <input type="text" name="flightImg" value={newFlight.flightImg} onChange={handleChange} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ marginBottom: '10px' }}>
            From City:
            <input type="text" name="fromCity" value={newFlight.from.city} onChange={(e) => handleChange({ ...e, target: { name: 'from.city', value: e.target.value } })} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ marginBottom: '10px' }}>
            To City:
            <input type="text" name="toCity" value={newFlight.to.city} onChange={(e) => handleChange({ ...e, target: { name: 'to.city', value: e.target.value } })} style={{ marginLeft: '10px' }} />
          </label>
          {/* Add other input fields for other flight details */}
          <button type="submit" style={{ marginTop: '10px' }}>Add Flight</button>
        </form>
        <table style={{ width: '95%', borderCollapse: 'collapse', color: '#333', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
          <thead>
            <tr style={{ border: '1px solid #ddd', backgroundColor: '#f7f7f7' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Depart</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Arrival</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Departure Time</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Arrival Time</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Flight Code</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>From</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>To</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Flight Image</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index} style={{ border: '1px solid #ddd', backgroundColor: index % 2 === 0 ? '#f7f7f7' : '#fff' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{flight.price}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{flight.depart}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{flight.arrival}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{flight.departTime}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{flight.arrivalTime}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{flight.code}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{flight.from.city}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{flight.to.city}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}><img src={flight.flightImg} alt="Flight" style={{ width: '50px', height: '50px' }} /></td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button onClick={() => handleDeleteFlight(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default FlightData;

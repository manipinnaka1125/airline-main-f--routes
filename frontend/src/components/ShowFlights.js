// FlightPage.js

import React, { useState, useEffect } from 'react';

const FlightPage = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('http://api.aviationstack.com/v1/flights?access_key=your_access_key');
        if (!response.ok) {
          throw new Error('Failed to fetch flight data');
        }
        const data = await response.json();
        setFlights(data.data); // Assuming the flight data is in the 'data' property
      } catch (error) {
        console.error('Error fetching flight data:', error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div>
      <h1>Available Flights</h1>
      {flights.length > 0 ? (
        <ul>
          {flights.map((flight, index) => (
            <li key={index}>
              <p>Flight {index + 1}</p>
              <p>Departure: {flight.departure.airport}</p>
              <p>Destination: {flight.arrival.airport}</p>
              <p>Departure Time: {flight.departure.estimated}</p>
              <p>Arrival Time: {flight.arrival.estimated}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available</p>
      )}
    </div>
  );
};

export default FlightPage;

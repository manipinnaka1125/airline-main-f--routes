import React, { useState } from 'react';
import './Book.css';
import ShowFlights from './ShowFlights';

const Book = () => {
  const [showFlights, setShowFlights] = useState(false);
  const [tripType, setTripType] = useState('roundtrip'); // 'roundtrip' or 'oneway'
  const [travelType, setTravelType] = useState('domestic'); // 'domestic' or 'international'

  const handleShowFlights = () => {
    setShowFlights(true);
  };

  return (
    <div className="booking-container-landscape" style={{ height: '70vh' }}>
      <div className="booking-form">
        <h1>Book your Flight</h1>
        <form id="bookingForm">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <span className="form-label">Trip Type</span>
                <div className="radio-group">
                  <input
                    type="radio"
                    id="roundtrip"
                    name="tripType"
                    value="roundtrip"
                    checked={tripType === 'roundtrip'}
                    onChange={() => setTripType('roundtrip')}
                  />
                  <label htmlFor="roundtrip">Roundtrip</label>
                  <input
                    type="radio"
                    id="oneway"
                    name="tripType"
                    value="oneway"
                    checked={tripType === 'oneway'}
                    onChange={() => setTripType('oneway')}
                  />
                  <label htmlFor="oneway">One Way</label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <span className="form-label">Travel Type</span>
                <select
                  className="form-control"
                  value={travelType}
                  onChange={(e) => setTravelType(e.target.value)}
                >
                  <option value="domestic">Domestic</option>
                  <option value="international">International</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
          </div>

          {/* Country Selection */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <span className="form-label">Select Country</span>
                <select className="form-control" defaultValue="">
                  <option value="" disabled>Select a country</option>
                  <option value="country1">Country 1</option>
                  <option value="country2">Country 2</option>
                  <option value="country3">Country 3</option>
                  {/* Add more countries here */}
                  <option value="country4">Country 4</option>
                  <option value="country5">Country 5</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
          </div>

          {/* Flying From and To sections */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <span className="form-label">Flying from</span>
                <select className="form-control" defaultValue="">
                  <option value="" disabled>Select a city</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  <option value="city3">City 3</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <span className="form-label">Flying to</span>
                <select className="form-control" defaultValue="">
                  <option value="" disabled>Select a city</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  <option value="city3">City 3</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
          </div>

          {/* Departing and Returning sections */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <span className="form-label">Departing</span>
                <input className="form-control" type="date" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <span className="form-label">Returning</span>
                <input className="form-control" type="date" required />
              </div>
            </div>
          </div>

          {/* Adults, Children, and Travel class sections */}
          <div className="row">
            <div className="col-md-2">
              <div className="form-group">
                <span className="form-label">Adults (18+)</span>
                <select className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <span className="form-label">Children (0-17)</span>
                <select className="form-control">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <span className="form-label">Travel class</span>
                <select className="form-control">
                  <option>Economy class</option>
                  <option>Business class</option>
                  <option>First class</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-btn">
                <button className="submit-btn" onClick={handleShowFlights}>Show flights</button>
              </div>
            </div>
          </div>

          {showFlights && <ShowFlights />}
        </form>
      </div>
    </div>
  );
};

export default Book;

import React, { useState } from 'react';
import PassengerForm from './PassengerForm';

function TicketCard(props) {
  const { filteredData, passengerCount } = props;
  const [showPassengerForm, setShowPassengerForm] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleBookButtonClick = (flight) => {
    setSelectedFlight(flight);
    setShowPassengerForm(true);
  };

  const handlePassengerFormSubmit = (passengerInfo) => {
    // Handle the submission of passenger information here
    // For example, you can pass it to a function to confirm the booking
    console.log('Selected Flight:', selectedFlight);
    console.log('Passenger Info:', passengerInfo);
    // After handling the submission, you can reset the form state and close the form
    setShowPassengerForm(false);
  };

  return (
    <>
      {filteredData.map((data, i) => {
        return (
          <div className="card mb-3" id="ticket_card" key={i}>
            <div className="card-body">
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    width: '60%',
                    fontSize: '13px',
                    display: 'flex',
                    lineHeight: '1.5rem',
                  }}
                >
                  <div>
                    <div
                      style={{
                        marginBottom: '30px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>
                        <b>₹ {data.price * passengerCount}</b>
                      </span>
                      <span style={{ fontSize: '11px' }}>
                        <b>{passengerCount} P</b>
                      </span>
                    </div>
                    <div>
                      <b>
                        {data.from.short} {'>>'} {data.to.short}
                      </b>
                    </div>
                    <div>{data.code}</div>
                    <div>Depart: {data.departTime}</div>
                    <div>Arrive: {data.arrivalTime}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '40%',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ height: '100px', width: '140px' }}>
                    <img
                      src={data.flightImg}
                      alt="flight_img"
                      style={{ height: '100%', width: '100%' }}
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm btn-info"
                      onClick={() => handleBookButtonClick(data)}
                    >
                      <b>Book</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Passenger Form */}
      {showPassengerForm && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Passenger Details</h5>
            <PassengerForm
              flight={selectedFlight}
              passengerCount={passengerCount}
              onSubmit={handlePassengerFormSubmit}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default TicketCard;

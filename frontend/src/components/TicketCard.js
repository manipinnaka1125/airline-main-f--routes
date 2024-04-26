import React, { useState } from 'react';
import PassengerForm from './PassengerForm';
import PaymentGateway from './PaymentGateway'; // Import PaymentGateway component

function TicketCard(props) {
  const { filteredData, passengerCount } = props;
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [redirectToPayment, setRedirectToPayment] = useState(false);

  const handleBookButtonClick = (flight) => {
    setSelectedFlight(flight);
  };

  // Function to handle redirection to PaymentGateway
  const redirectToPaymentGateway = () => {
    setRedirectToPayment(true);
  };

  const handlePassengerFormSubmit = (passengerInfo) => {
    console.log('Selected Flight:', selectedFlight);
    console.log('Passenger Info:', passengerInfo);
    redirectToPaymentGateway(); // Redirect to PaymentGateway
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
                      onClick={() => {
                        handleBookButtonClick(data);
                        redirectToPaymentGateway(); // Redirect to PaymentGateway
                      }}
                    >
                      <b>Book</b>
                    </button>
                  </div>
                </div>
              </div>
              {selectedFlight && selectedFlight === data && (
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">Passenger Details</h5>
                    <PassengerForm
                      flight={selectedFlight}
                      passengerCount={passengerCount}
                      onSubmit={handlePassengerFormSubmit} // Pass onSubmit function
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      {/* Redirect to PaymentGateway if redirectToPayment is true */}
      {redirectToPayment && <PaymentGateway />}
    </>
  );
}

export default TicketCard;

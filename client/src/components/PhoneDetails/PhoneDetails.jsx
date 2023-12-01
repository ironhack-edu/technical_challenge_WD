import React from 'react';
import './PhoneDetails.css'; // Add your CSS file for styling

const PhoneDetails = ({ selectedPhone }) => {
  return (
    <div className="phone-details-container">
      {selectedPhone ? (
        <div className="phone-details-card">
          <img className="phone-details-image" src={`../../../assets/images/${selectedPhone.imageFileName}`} alt={selectedPhone.name} />
          <div className="phone-details-info">
            <h2>{selectedPhone.name}</h2>
            <p>Manufacturer: {selectedPhone.manufacturer}</p>
            <p>Description: {selectedPhone.description}</p>
            <p>Color: {selectedPhone.color}</p>
            <p>Price: ${selectedPhone.price}</p>
            <p>Screen: {selectedPhone.screen}</p>
            <p>Processor: {selectedPhone.processor}</p>
            <p>RAM: {selectedPhone.ram} GB</p>
          </div>
        </div>
      ) : (
        <p className='phone-detail-list'>Select a phone from the list</p>
      )}
    </div>
  );
};

export default PhoneDetails;

import React from 'react';

function PhoneDetails({ phone }) {
  return (
    <div>
      <h2>{phone.name}</h2>
      <p>Manufacturer: {phone.manufacturer}</p>
      <p>Description: {phone.description}</p>
      {/* Add more details here */}
    </div>
  );
}

export default PhoneDetails;

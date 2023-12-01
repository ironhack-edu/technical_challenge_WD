import React, { useState } from 'react';
import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';

const App = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);

  const handleSelectPhone = (phone) => {
    setSelectedPhone(phone);
  };

  return (
    <div>
      <h1>Tech Challenge </h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <PhoneList onSelectPhone={handleSelectPhone} />
        </div>
        <div style={{ flex: '2' }}>
          <PhoneDetails selectedPhone={selectedPhone} />
        </div>
      </div>
    </div>
  );
};

export default App;
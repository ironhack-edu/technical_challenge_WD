import React, { useState } from 'react';
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';

function App() {
  const [selectedPhoneId, setSelectedPhoneId] = useState(null);

  const handlePhoneSelect = (phoneId) => {
    setSelectedPhoneId(phoneId);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Phone Catalog App</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <PhoneList onSelect={handlePhoneSelect} />
        {selectedPhoneId && <PhoneDetails phoneId={selectedPhoneId} />}
      </div>
    </div>
  );
}

export default App;

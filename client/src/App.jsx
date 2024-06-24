// src/App.js
import React, { useState } from "react";
import PhoneList from "./components/PhoneList";
import PhoneDetails from "./components/PhoneDetails";

const App = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState(null);

  return (
    <div>
      <PhoneList onSelectPhone={setSelectedPhoneId} />
      {selectedPhoneId && <PhoneDetails phoneId={selectedPhoneId} />}
    </div>
  );
};

export default App;

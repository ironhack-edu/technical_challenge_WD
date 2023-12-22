import React, { useState } from "react";
import PhoneList from "./components/PhoneList";
import PhoneDetail from "./components/PhoneDetail";

function App() {
  const [selectedPhone, setSelectedPhone] = useState(null);

  const handleSelectPhone = (phone) => {
    setSelectedPhone(phone);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <PhoneList onSelectPhone={handleSelectPhone} />
      <PhoneDetail phone={selectedPhone} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import PhoneDetails from "./components/PhoneDetails";
import PhonesList from "./components/PhonesList";

function App() {
  const [detailsShown, setDetailsShown] = useState(false);
  const [selectedPhoneId, setSelectedPhoneId] = useState(null);
  function showDetails(id) {
    setDetailsShown(true);
    setSelectedPhoneId(id);
  }
  return (
    <div style={{ display: "flex" }}>
      <PhonesList showDetails={showDetails} />
      {detailsShown && <PhoneDetails phoneId={selectedPhoneId} />}
    </div>
  );
}

export default App;

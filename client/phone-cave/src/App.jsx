import { useState } from "react";
import PhoneDetail from "./components/PhoneDetail";
import PhoneList from "./components/PhoneList";

function App() {
  const [selectedPhoneId, setSelectedPhoneId] = useState(null);

  return (
    <>
      {selectedPhoneId !== null && (
        <PhoneDetail selectedPhoneId={selectedPhoneId} />
      )}
      <PhoneList setSelectedPhoneId={setSelectedPhoneId} />
    </>
  );
}

export default App;

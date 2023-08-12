import { Routes, Route } from "react-router-dom";
import AllPhones from "./pages/AllPhones.jsx";
import "./App.css";
import PhoneDetails from "./pages/PhoneDetails.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/phones" element={<AllPhones />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;

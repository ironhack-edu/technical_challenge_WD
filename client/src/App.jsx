import React from 'react'; 
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PhonesPage from "./pages/PhonesPage";
import PhonePage from "./pages/PhonePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/phones" element={<PhonesPage />} />
        <Route exact path="/phones/:id" element={<PhonePage />} />
      </Routes>
    </div>
  );
}
export default App;

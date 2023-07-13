import { Route, Routes } from "react-router-dom";
import "./App.css";
import PhoneListPage from "./pages/PhoneListPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<PhoneListPage />} />
        <Route path="/phones/:phoneId" element={<PhoneDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

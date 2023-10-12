import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import PhonesPage from "./pages/PhonesPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/phones/:phoneId" element={<PhoneDetailsPage />} />
      </Routes>
    </div>
  );
}
export default App;
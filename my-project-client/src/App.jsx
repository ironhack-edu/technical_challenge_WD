import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import PhonesListPage from "./pages/PhonesListPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/phones" element={<PhonesListPage />} />
                <Route path="/phones/:phoneId" element={<PhoneDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

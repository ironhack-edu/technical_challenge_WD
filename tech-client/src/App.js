import { Route, Routes } from "react-router-dom";
import "./App.css";
import PhoneListPage from "./pages/PhoneListPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="App">
    <Navbar />

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/phones/" element={<PhoneListPage />} />
    <Route path="/phones/:phoneId" element={<PhoneDetailsPage />} />
  </Routes>
</div>
)
}

export default App;
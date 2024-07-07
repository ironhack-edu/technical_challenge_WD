import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

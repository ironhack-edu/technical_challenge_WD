import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Toaster } from 'react-hot-toast';

import { Routes, Route } from "react-router-dom";
import PhoneDetailsPage from "./pages/PhoneDetailsPage/PhoneDetailsPage";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/:id" element={<PhoneDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

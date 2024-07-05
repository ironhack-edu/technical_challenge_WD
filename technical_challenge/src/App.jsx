import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PhoneDetailPage from "./pages/PhoneDetailPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-6">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phone/:phoneId" element={<PhoneDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

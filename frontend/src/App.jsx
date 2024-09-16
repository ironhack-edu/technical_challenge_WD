import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllPhonesPage from "./pages/AllPhonesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<AllPhonesPage />} />
      </Routes>
    </div>
  );
}

export default App;

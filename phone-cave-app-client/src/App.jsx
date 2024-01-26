import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/details/:phoneId" element={<PhoneDetailsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

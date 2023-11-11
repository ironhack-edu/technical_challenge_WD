import "./App.css";
import 'tailwindcss/tailwind.css'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PhoneDetails from "./pages/PhoneDetails/PhoneDetails";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App App-header">
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/phones/:id" element={<PhoneDetails/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;

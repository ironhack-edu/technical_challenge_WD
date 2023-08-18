import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import PhoneDetails from './components/PhoneDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/phones/:id" element={<PhoneDetails/>} />
    </Routes>
</BrowserRouter>
);
}

export default App;
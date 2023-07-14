import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PhoneList } from "./pages/PhoneList";
import { OurNavbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <OurNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhoneList />} />
      </Routes>
    </div>
  );
}

export default App;

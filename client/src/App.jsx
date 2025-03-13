import "./App.css";
import { Routes } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import PhoneDetails from "./screens/PhoneDetails";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid ">
          <p>Phone API exercise </p>
          <Link to="/phones" className="btn btn-primary">
            Check all our phones
          </Link>
          
        </div>
      </nav>

      <Routes>
        <Route path="/phones/:id" element={<PhoneDetails />} />
        <Route path="/phones" element={<MainScreen />} />
      </Routes>
    </>
  );
}

export default App;

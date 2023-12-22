import axios from "axios"
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhonePage from "./pages/PhonePage";
import { useEffect, useState } from "react";


function App() {


  // Fetch Phone Data
  const url = "http://localhost:5005/phones"
  const [phones, setPhones] = useState([])

  const fetchPhones = () => {
    axios
      .get(url)
      .then(response => {
        setPhones(response.data)
      })
      .catch(err => {
        console.log("Error while fetching phones data", err);
      })
  }

  useEffect(() => {
    fetchPhones()
  }, [])


  return (
    <>
     <Routes>
        <Route path="/" element={<HomePage displayedPhones={phones} />} />
        <Route path="phones/:id" element={<PhonePage displayedPhones={phones} />} />
     </Routes>
    </>
  );
}

export default App;

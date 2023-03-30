import './App.css';
import {NavbarP,PhoneDetails} from "./components/index";
import {PhonesPage} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from 'react';


function App() {

  const [phones, setPhones] = useState([]);

  async function allPhones() {
    try {
      const response = await axios.get("http://localhost:5005/phones");
      setPhones(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    allPhones();
  }, []);
  return (
    <div className="App">
      <NavbarP />
      <div className='container'>
      <Routes>
        <Route  path="/phones" element={<PhonesPage phones ={phones} />} />
        <Route  path="/:id" element={<PhoneDetails/>} />

      </Routes>   
      </div>   
    </div>
  );
}

export default App;

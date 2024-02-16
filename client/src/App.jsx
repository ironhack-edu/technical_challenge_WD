import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import PhonesPage from "./components/PhonesPage";
import PhoneDetailsPage from "./components/PhoneDetailsPage";
import ErrorPage from "./components/ErrorPage";
import NotFound from "./components/NotFound";

import Spinner from "react-bootstrap/Spinner";

function App() {

  const [ phones, setPhones ] = useState([]);
  const [ loadingPhones, setLoadingPhones ] = useState(true);

  const navigate = useNavigate();

  const phoneFetch = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/phones`);
      
      setTimeout(() => {
        setPhones(res.data);
        setLoadingPhones(false);
      }, 1000)

    } catch(err) {
      console.error(err);
      navigate('/error');
    }

  } 

  console.log(phones);

  useEffect(() => {
    phoneFetch()
  }, [])

  return (

    loadingPhones ?

    <div>
      <Spinner animation="border" variant="primary" />
    </div>

    :

    <div>
      <MyNavbar className="navbar" phones={phones} />

      <div id="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<PhonesPage phones={phones} />} />
          <Route path="/phones/:id" element={<PhoneDetailsPage phones={phones} />} />

          <Route path="/error" element={<ErrorPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

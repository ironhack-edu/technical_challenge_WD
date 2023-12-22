import './App.css';
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [phonesList, setPhoneList] = useState([]);
  const [fetchingPhones, setFetchingPhones] = useState(true);

  const navigate = useNavigate()

  useEffect(() =>{
    getPhonesList()
  },[])

  const getPhonesList = async () =>{
    try{
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/phones`)
    
    setTimeout(() =>{
      setPhoneList(response.data)
      setFetchingPhones(false)
    },100)
  }catch(err){
    navigate("/error")
  }
  }
  if (fetchingPhones){
    return(
      <div className='App'>
        <Spinner animation="border" variant="info"/>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar phonesList={phonesList} />
      <div id='page'>
      <Routes>
        <Route  path="/" element={<HomePage />} />

        <Route path="/phone-details/:phoneId" element={<PhoneDetails phonesList={phonesList} />} />
        <Route path='/error' element={<Error/>}/>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>      
    </div>
  );
}

export default App;

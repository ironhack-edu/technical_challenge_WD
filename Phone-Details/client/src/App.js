import './App.css';
import Navbar from "./components/Navbar/Navbar";
import axios from "axios"

import HomePage from "./pages/HomePage/HomePage";
import AboutPhones from "./pages/AboutPage/AboutPhones";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';






function App() {

  
const [phoneList, SetPhoneList] = useState([])


useEffect(() => {
  getAllPhones()
}, [])

const getAllPhones = async () => {
  
  try{
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/phones`)
    return SetPhoneList(res.data)
  }
  catch(err){
    console.log(err)
  }
}


  return (
    <div className="App">
      <Navbar phoneList={phoneList}/>
      
      <Routes>
        <Route  path="/" element={<HomePage phoneList={phoneList}/>} />

        <Route path="/phones/aboutPhones/:id" element={<AboutPhones phoneList={phoneList}/>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;

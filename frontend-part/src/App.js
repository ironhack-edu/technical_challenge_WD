
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar"

import PhoneList from "./pages/beers";
import "./App.css";
import Phone from "./pages/beer";

function App() {
 
 
 
  return (   <div className="App">
    
    <Navbar/>
    <div className="MainScreen">
    <Routes>

   <Route path="/phones" element={<PhoneList/>} />
   <Route path="/phone/:phoneId"  element={<Phone />} />
 
   </Routes>
 
   </div>







     

     


    </div>
  );
}

export default App;

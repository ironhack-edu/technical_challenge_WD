import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import PhoneDetails from "./pages/PhoneDetails";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {

  const [phonesList, setPhoneList] = useState([])
  const [fetchingPhones, setFetchingPhones] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    getPhonesList()
  }, [])

  const getPhonesList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/phones`)
    
      setTimeout(() => {
        setPhoneList(response.data)
        setFetchingPhones(false)
      }, 1000)
    } catch(err) {
      navigate("/error")
    }
  }

  if(fetchingPhones) {
    return (
      <div className='App'>
        <Spinner animation="border" variant="info"/>
      </div>
    )
  }
  return (
    <div className="App">

      <MyNavbar phonesList={phonesList}/>

<div id="page">
  <Routes>
    <Route path="/" element={ <Home /> }/>
    <Route path="/phone-details/:phoneId" element={ <PhoneDetails phonesList={phonesList} /> }/>

    <Route path="/error" element={ <Error />}/>
    <Route path="/*" element={ <NotFound />}/>

  </Routes>
</div>
    </div>
  );
}

export default App;

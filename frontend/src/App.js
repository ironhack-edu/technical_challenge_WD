import './App.css';
import { Routes, Route } from 'react-router-dom'; // Added Link for navigation
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Added useState
import Home from '../src/pages/Home';
import Error from '../src/pages/Error';
import NotFound from '../src/pages/NotFound';
import PhoneDetails from '../src/pages/PhoneDetails';
import axios from 'axios'; // Added axios for API requests
import Spinner from 'react-bootstrap/Spinner'; // Added Spinner for loading animation
import MyNavbar from './components/MyNavbar'; // Imported MyNavbar component
import { useCallback } from 'react';

function App() {
  const [phonesList, setPhonesList] = useState([]);
  const [fetchingPhones, setFetchingPhones] = useState(true);

  const navigate = useNavigate();

  const getPhonesList = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`);
      setTimeout(() => {
        setPhonesList(response.data);
        setFetchingPhones(false);
      }, 1000);
    } catch (err) {
      navigate('/error');
    }
  }, [navigate]);

  useEffect(() => {
    getPhonesList(); // Use getPhonesList directly
  }, [getPhonesList]);

  if (fetchingPhones) {
    return <div className='App'>{/* ... */}</div>;
  }

  // ...rest of your component

  if (fetchingPhones) {
    return (
      <div className='App'>
        <Spinner animation='border' variant='info' />
      </div>
    );
  }

  return (
    <div className='App'>
      <MyNavbar /> phoneList={phonesList}
      <div id='page'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/phone-details/:phoneId' element={<PhoneDetails phonesList={phonesList} />} />
          <Route path='/error' element={<Error />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


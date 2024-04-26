import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/core/HomePage';
import HomePhones from './components/phones/HomePhones';
import PhoneDetails from './components/phones/PhoneDetails';
import NavBar from './components/core/NavBar';

function App() {

  return(
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path = "/" element={<HomePage />} />
        <Route exact path = "/phones" element={<HomePhones />} />
        <Route exact path = "/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  )
}

export default App;

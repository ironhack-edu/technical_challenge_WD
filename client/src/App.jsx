import './App.css'
import { Routes, Route } from 'react-router-dom';
import Phones from '../pages/Phones';
import PhonesInfo from '../pages/PhonesInfo';
import Home from '../pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/phones/:phoneId' element={<PhonesInfo />} />
      </Routes>
    </>
  )
}

export default App

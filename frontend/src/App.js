import './App.css';
// import Navbar from './components/Navbar';
import ColorSchemesExample from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import PhonesDetails from './pages/PhonesDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ColorSchemesExample />} />
        <Route path='/phones/:phoneId' element={<PhonesDetails />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;


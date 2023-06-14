import AppRoutes from '../routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;


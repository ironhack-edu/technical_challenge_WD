import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes';


const App = () => {


  return (
    <div className="App pb-5">
      <Navigation />
      <AppRoutes />

    </div>
  );
}

export default App;

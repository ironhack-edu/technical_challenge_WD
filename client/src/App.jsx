import './App.css';
import AppRoutes from './routes/App.routes';
import Navigator from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Navigator />
      <AppRoutes />
    </div>
  );
}

export default App;

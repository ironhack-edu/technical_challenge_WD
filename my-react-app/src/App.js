import logo from './logo.svg';
import './App.css';
import Routes, { routes } from './Routes';

function App() {
  return (
    <div className="App">
    <myNavbar phonesList = {phonesList} />

    <div id="page">
      <Routes />
      <Route path="/" elements={<Home></Home>}></Route>
      <Route path="/phone" elements={<Phone></Phone>}></Route>

    </div>
    </div>
  );
}

export default App;

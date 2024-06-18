import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import PhoneList from "./components/PhoneList";
import PhoneDetails from "./components/PhoneDetails"; // Importez le composant PhoneDetails

function Home() {
  return <h2>Accueil</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/phones">Liste des Téléphones</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/phones" element={<PhoneList />} />
          <Route path="/phones/:id" element={<PhoneDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

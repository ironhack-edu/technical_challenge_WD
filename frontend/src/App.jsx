import { Routes, Route } from "react-router-dom";
import PhoneListPage from "./pages/PhoneListPage";
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/phones" element={<PhoneListPage />} />
      </Routes>
    </div>
  )
}

export default App

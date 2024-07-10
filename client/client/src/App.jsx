import { Routes, Route } from "react-router-dom";
import "./App.css";
import PhoneDetails from "./components/PhoneDetails";
import PhoneList from "./components/PhoneList";

function App() {

  return (
    <div className="py-20 px-32 flex flex-col h-screen items-center gap-10">
      <h1 className="text-5xl text-black font-medium mb-5">
        Tech Challenge
      </h1>
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  )
}

export default App;

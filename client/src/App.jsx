import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PhoneList from "./components/PhoneList";
import { Routes, Route } from "react-router-dom";
import PhoneDescription from "./components/PhoneDescription";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="py-20 px-32 flex flex-col h-screen items-center gap-10">
      <h1 className="text-5xl text-slate-700 font-semibold mb-5">
        Tech Challenge IronHack BootCamp
      </h1>
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/:phoneId" element={<PhoneDescription />} />
      </Routes>
    </div>
  );
}

export default App;

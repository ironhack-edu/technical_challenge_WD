import React, { useState } from "react"
import { Navigate, Routes, Route } from "react-router-dom"
import Phones from "./components/phones"
import PhoneDetails from "./components/phone-details"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes> 
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";


function App() {
  const [phones, setPhones] = useState();
  
  const getAllPhones = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/phones`)
    .then((response) => {
      setPhones(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAllPhones()
  }, [])

  return (
    <>
      <h1>The best phones:</h1>
    </>
  )
}

export default App

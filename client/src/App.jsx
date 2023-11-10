import { useEffect, useState } from 'react'
import {Loader} from "@mantine/core"
import './App.css'
import axios from "axios";


function App() {
  const [phones, setPhones] = useState();
  const [isLoading, setIsLoading] = useState(true);
  
  const getAllPhones = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/phones`)
    .then((response) => {
      setPhones(response)
      setIsLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAllPhones()
  }, [])

  return  isLoading ? (
    <>
      <Loader color="#288BE2" />
    </>
  ) : (
    <>
      <h1>The best phones:</h1>
    </>
  )
}

export default App

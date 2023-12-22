import axios from 'axios'
import { useEffect, useState, navigate } from 'react'
import { useParams } from "react-router-dom"
import React from 'react'
import './index.css';


const API = "http://localhost:3000"


function AllPhones() {

 const {id} = useParams()

const [phones, setPhones] = useState([]);
const [phone, setPhone] = useState();

useEffect(()=>{
    axios
    .get(`${API}/phones`)
    .then((response)=>{
        const phonesData = response.data;
        setPhones(phonesData)
    })
    .catch((error)=>console.log(error))
}, [])



function showPhoneDetails (){
  useEffect(()=>{
    axios
    .get(`${API}/phones/${id}`)
    .then((response)=>{
        const phoneData = response.data;
        setPhone(phoneData)
        console.log(phone)
    })
    .catch((error)=>console.log)
  }, [id, setPhone])
  
}

  return (
    <div>
      <div>
        <h1>Your Phone Cave store</h1>
      </div>
      
      <div id="store">

      <div id="allPhones">
        {phones &&
        phones.map((phone, index) =>(
          <div key={index}>
            <button onClick={showPhoneDetails}><h4>Name: {phone.name}</h4></button>
            <p>Manufacturer: {phone.manufacturer}</p>
            <p>Description: {phone.description}</p>
            <p>Color: {phone.color}</p>
            <p>Price: {phone.price}</p>
            <img src={`./assets/images/${phone.imageFileName}`} alt={`${phone.name} image`} />
            <p>Screen: {phone.screen}</p>
            <p>Processor: {phone.processor}</p>
            <p>RAM: {phone.ram}</p>
            </div>
        ))}
      </div>

      <div>
        {phone &&
        <h3>{phone.name}</h3>
        }
      </div>

      </div>
    </div>
  )
}

export default AllPhones
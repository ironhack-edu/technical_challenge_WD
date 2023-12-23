import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import './index.css';
import Spinner from './spinner';


const API = "http://localhost:3000"


function PhoneList() {

const [phones, setPhones] = useState([]);
const [phoneId, setPhoneId] = useState();
const [loading, setLoading] = useState(false)

useEffect(()=>{
  setLoading(true)
    axios
    .get(`${API}/phones`)
    .then((response)=>{
        const phonesData = response.data;
        setPhones(phonesData)
        setLoading(false)
    })
    .catch((error)=>console.log(error))
}, [])




function showPhoneDetails (clickedId){
  setLoading(true)
  setPhoneId(clickedId)
};


useEffect(()=> {
  console.log("ID:", phoneId)
  setLoading(false)
}, [phoneId]);


  return (
    <div id="main">

      <div id="title">
        <h1>Your Phone Cave store</h1>
      </div>
      
      <div id="content">
        <div id="allPhones">
          {phones &&
            phones.map((phone, index) =>(
              <div key={index} id="allButtons">
              <button onClick={() => showPhoneDetails(phone.id)}><h4>{phone.name}</h4></button>
              </div>
          ))}
      </div>
        
      <div>
        {phoneId === undefined && !loading &&
            <p id="select">Please select a Phone</p> }
        {phoneId === undefined && loading ? (
            <Spinner/> ) : (
              <div id="onePhone">
              <div>
              <img src={`./../../../src/assets/images/${phones.find((phone) => phone.id === phoneId).imageFileName}`} alt="phone image" />
              </div>
              <div>
              <h2>{phones.find((phone) => phone.id === phoneId).name}</h2>
              <p><strong>Manufacturer: </strong>{phones.find((phone) => phone.id === phoneId).manufacturer}</p>
              <p><strong>Description: </strong>{phones.find((phone) => phone.id === phoneId).description}</p>
              <p><strong>Color: </strong> {phones.find((phone) => phone.id === phoneId).color}</p>
              <p><strong>Price: </strong> {phones.find((phone) => phone.id === phoneId).price}</p>
              <p><strong>Screen: </strong>{phones.find((phone) => phone.id === phoneId).screen}</p>
              <p><strong>Processor: </strong> {phones.find((phone) => phone.id === phoneId).processor}</p>
              <p><strong>RAM: </strong>{phones.find((phone) => phone.id === phoneId).ram}</p>
          </div>
            
            
      </div>
      )}
    </div>
  </div>

</div>
  );
}

export default PhoneList
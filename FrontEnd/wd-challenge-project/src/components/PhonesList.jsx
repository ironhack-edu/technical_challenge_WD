import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./PhonesList.css"


const backendURL = "http://localhost:3000"

function PhonesList (){
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPhone, setSelectedPhone] = useState(null);

    const selectPhone = phone => {
        console.log("Selected Phone:", phone);
        setSelectedPhone(phone);
    }

    useEffect(()=>{
        axios.get(`${backendURL}/phones`)
        .then((response)=>{
            setPhones(response.data);
            setLoading(false);
        })
        .catch((error)=> console.log("Error fetching data"))
    }, [])



    return(
        <div className="container">
        <div className="phones-list">
            <h1>Phones List</h1>
            <ul>
            {phones.map((phone)=>{
                return(
                    <li key = {phone.id} onClick={()=> selectPhone(phone)}>
                        <h2>{phone.name}</h2>
                        <img src={`/assets/images/${phone.imageFileName}`} alt={phone.name}/>
                    </li>
                )
            })}
            </ul>
        </div>
        
        {selectedPhone && (
            <div className="phone-details">
             <h2>{selectedPhone.name}</h2>
                <img src={`/assets/images/${selectedPhone.imageFileName}`} alt={selectedPhone.name} />  
                <p><span>Manufacturer:</span> {selectedPhone.manufacturer}</p>
                <p>{selectedPhone.description}</p>
                <p><span>Color:</span> {selectedPhone.color}</p>
                <p><span>Price:</span> {selectedPhone.price}</p>
                <p><span>Screen:</span> {selectedPhone.screen}</p>
                <p><span>Processor:</span> {selectedPhone.processor}</p>
                <p><span>Ram:</span> {selectedPhone.ram}</p>

            </div>
        )}
        </div>
    )
}

export default PhonesList;
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Phones(){
 
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  const REST_API = 'http://localhost:5005'

  useEffect(()=>{
    axios.get(`${REST_API}/phones`).then((response)=>{
        setPhones(response.data);
    })

    .catch((error)=> console.log(error));

});

  return (
    <div>
       {phones.map((phone)=>{
                return (
                    <div className = "phones-list" key={phone._id}>
                          <h2>{phone.name}</h2>
                    </div>
                )
            })}
    </div>
  );
};

export default Phones;

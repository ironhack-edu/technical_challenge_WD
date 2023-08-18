import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import { ClipLoader } from 'react-spinners';

const PhoneDetails = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5005/phones/${id}`)
      .then(response => {
        setPhone(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error( error);
      });
  }, [id]);

  if (loading) {
    return (
      <div >
        <ClipLoader size={40} color="#3498db" loading={loading} />
      </div>
    );
  }

  if (!phone) {
    return <div>Error fetching phone details...</div>;
  }

  return (
    <div >
      <h1 >Phone Details</h1>
      <div >
        <h2 >{phone.name}</h2>
        <p >Manufacturer: {phone.manufacturer}</p>
        <p >Screen: {phone.screen}</p>
        <p>Processor: {phone.processor}</p>
        <p>RAM: {phone.ram} GB</p>
        <p>{phone.description}</p>
        <img src={`/images/${phone.imageFileName}`} alt={phone.name} />
      </div>
    </div>
  );
};

export default PhoneDetails;
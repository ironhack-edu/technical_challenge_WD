import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PhoneDetails = () => {
    const { id } = useParams();
    const [phone, setPhone] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhoneDetails = async () => {
            try {
                const response = await axios.get(`http://localpost:3000/phones/${id}`);
                setPhone(response.data);
                console.log(response.data);
            } catch (error){
                console.error(`Error fetching phone details`)
            }
        }
    })
  return (
    <div>PhoneDetails</div>
  )
}
export default PhoneDetails;
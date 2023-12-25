import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PhoneDetails = (props) => {
    const { id } = useParams();
    const [phone, setPhone] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhoneDetails = async () => {
            try {
                const response = await axios.get(`http://localpost:5005/phones/${id}`);
                setPhone(response.data);
                console.log(response.data);
            } catch (error){
                console.error(`Error fetching phone details:`, error);
            } finally {
                setLoading(false);
            }
        };

        fetchPhoneDetails();
    }, [id]);

  return (
    <div>
      <h2>Phone Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : phone ? (
        <div>
          <h3>{phone.model}</h3>
          <p>Brand: {phone.brand}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Phone not found</p>
      )}
    </div>
  )
}
export default PhoneDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';


function PhoneDetails () {

    const [loading, setLoading] = useState(true);
    const [phone, setPhone] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // Make a GET request to fetch the phone data
        axios.get('/data/phones.json')
            .then(response => {
                // Find the phone with the matching id
                const selectedPhone = response.data.find(p => p.id === parseInt(id, 10));
                if (selectedPhone) {
                    setPhone(selectedPhone);
                } else {
                    console.error(`Phone with id ${id} not found.`);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching phone details:', error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <br></br>
            <h2 style={{textAlign:'center'}}>{phone.name}</h2>
            {loading ? (
                <Spinner/>
            ):(
                <>
            <img src={`/images/${phone.imageFileName}`} alt="phoneimage" style={{ width:"200px", height:"200px", textAlign:'center'}}/>       
            <p style={{textAlign:'center'}}>Price: {phone.price}€</p>
            <p style={{textAlign:'center'}}>Manufacturer: {phone.manufacturer}</p>
            <p style={{textAlign:'center'}}>Description: {phone.description}</p>
            <p style={{textAlign:'center'}}>Screen: {phone.screen}</p>
            <p style={{textAlign:'center'}}>Processor: {phone.processor}</p>
            <p style={{textAlign:'center'}}>RAM Memory: {phone.ram}</p>
            <p style={{textAlign:'center'}}>Color: {phone.color}</p>
            <div style={{textAlign:'center'}}>
                      <Link to={`/phones`}><h3 style={{textDecoration:'none', color:'orange'}}>Back</h3></Link>
                      </div>
            </>
        )}
        </div>
    );
}
 
export default PhoneDetails;
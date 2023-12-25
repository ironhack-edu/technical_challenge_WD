import React, { useState, useEffect }from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const PhoneList = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhones = async () => {
            try {
                const response = await axios.get('http://localhost:3000/phones');
                setPhones(response.data);
                console.log(response.data);
            } catch (error){
                console.error('Error fetching phones:', error);
            }finally {
                setLoading(false);
            }
        };

        fetchPhones();
    }, []);

  return (
    <div>
        <h2>Phone List</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
                {phones.map((phone) => (
                    <li key={phone.id}>
                        <Link to={`/phones/${phone.id}`}>{phone.model} </Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}
export default PhoneList;
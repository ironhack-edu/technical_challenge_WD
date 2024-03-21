
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './components/Spinner';


function App() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('http://localhost:3001/phones')
      .then(response => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Phone Catalog</h1>
      {loading ? ( 
        <Spinner />
      ) : (
        <ul>
          {phones.map(phone => (
            <li key={phone.id}>
               <img src={`../assets/images/${phone.imageFileName}`} alt={phone.name} />
              <p>{phone.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

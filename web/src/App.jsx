import { useState, useEffect } from 'react';
import axios from 'axios';
import "../public/styles.css";

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/phones')
      .then(response => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handlePhoneClick = (id) => {
    console.log('Clicked phone ID:', id);
    axios.get(`http://localhost:3001/phones/${id}`)
      .then(response => {
        const { name, description, price } = response.data;
        setSelectedPhone({ id, name, description, price });
      })
      .catch(error => console.error('Error fetching phone details:', error));
  };

  console.log('Renderizando componente:', selectedPhone);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className='column'>
            {phones.map(phone => (
              <li key={phone.id} onClick={() => handlePhoneClick(phone.id)}>
                {phone.name}
              </li>
            ))}
          </ul>
          {selectedPhone && (
            <div className='detail'>
              <h2>{selectedPhone.name}</h2>
              <p>{selectedPhone.description}</p>
              <strong>{selectedPhone.price}€</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [phonesDB, setPhonesDB] = useState([]);
  const [message, setMessage] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const showDetails = (id) => {
    // onclick show phone details
  };

  useEffect(() => {
		fetch(`http://localhost:5005/phones`, {mode: "cors", method: "GET"})
			.then((res) => res.json())
			.then((resJson) => {
        if (resJson.message)
          setMessage(resJson.message);
        else
          setPhonesDB(resJson);
      })
			.catch((err) => console.log(err));
	}, []);  

  return (
    <div id="wrapper">

      {/* SHOW MESSAGE  if message present */}

      <h1>Welcome to The Phone Cave</h1>
      <h2>Phones</h2>
      <ul className='phones-list'>
        { phonesDB.map((phone, index) => (
          <li key={index} id={phone.id}>
            <div onClick={showDetails} >
              <img src={`/assets/${phone.imageFileName}`} />
              <p className='title'>{`${phone.manufacturer} ${phone.name}`}</p>
              <p className='price'>{`${phone.price}€`}</p>
            </div>

            {/* Ternary: if phone.id is toggled in selectedProducts, show details div here */}

          </li>
        )) }
      </ul>
    </div>
  )
}

export default App

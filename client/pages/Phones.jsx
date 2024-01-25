import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const SERVER_URL = 'http://localhost:4004';

const Phones = () => {
  const [ phones, setPhones ] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get all the phones from the server
  const getPhones = () => {
    axios
      .get(`${SERVER_URL}/phones`)
      .then((response) => {
          console.log(response.data);
          setPhones(response.data);
      })
      .catch((error) => console.log(error));
      
    setLoading(false);
  }

  useEffect(() => {
    getPhones();
  }, []);

  // Get all the phones image from the assets
  const getImagePath = (imageName) => `../assets/images/${imageName}` || '';

  return (
    <div>
      <h1>Phone list</h1>

      {/* First it waits to get the inf the it displays all phones as links in the page */}
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="phoneList">
        
        {phones &&
        phones.map((phone, index) => (
          <div key={index}>
            <Link to={`/phones/${phone.id}`}>
              <div>
                <img src={getImagePath(phone.imageFileName)} alt={phone.name} width={'200vw'} height={'200vh'} />
              </div>
            </Link>
          </div>
        ))}
        </div>
      )}
    </div>
  )
}

export default Phones

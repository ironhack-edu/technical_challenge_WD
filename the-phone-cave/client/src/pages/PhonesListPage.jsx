import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../src/context/auth.context";


import PhoneCard from '../components/PhoneCard';
import Loading from '../components/Loading/Loading';

const API_URL = 'http://localhost:5005';

function PhonesListPage() {
  const { isLoading } = useContext(AuthContext);
  const [phones, setPhones] = useState([]);

  const getAllPhones = () => {
    axios
      .get(`${API_URL}/api/phones`)
      .then((response) => setPhones(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllPhones();
  }, []);

if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="PhonesListPage">
      {phones.length} phones in the database
      {phones.map((phone) => {
        return <PhoneCard key={phone.id} phone={phone} />;
      })}
    </div>
  );
}

export default PhonesListPage;

import { useEffect, useState } from "react";
import axios from "axios";

import Spiner from "../components/Spiner";
import PhoneList from "../components/PhoneList";
const PORT = 4000;

const HomePage = () => {
  const [allPhones, setAllPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:${PORT}/phones`)
      .then((response) => {
        setAllPhones(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home-page">
      {isLoading ? <Spiner /> : <PhoneList allPhones={allPhones} />}
    </div>
  );
};

export default HomePage;

import { useEffect, useState } from "react";
import axios from "axios";

function PhoneDetails() {
  const [phoneDetails, setPhoneDetails] = useState(null);

  const getPhoneDetails = () => {
    axios
      .get(`http://localhost:5005/phones`)
      .then((response) => {
        setPhoneDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPhoneDetails();
  }, []);

  return (
    <div>
      {phoneDetails.map((phone) => {
        return (
          <div>
            <img src={`../../assets/images/${phone.imageFileName}`} />
            <p>{phone.name}</p>
            <p>{phone.manufacturer}</p>
            <p>{phone.description}</p>
            <p>{phone.color}</p>
            <p>{phone.price}</p>
            <p>{phone.screen}</p>
            <p>{phone.ram}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PhoneDetails;

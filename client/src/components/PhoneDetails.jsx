import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "./PhonesList";

export default function PhoneDetails({ phoneId }) {
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    axios.get(`${URL}/phones/${phoneId}`).then((response) => {
      setPhone(response.data);
    });
  }, [phoneId]);
  console.log(phoneId);

  return (
    <div
      style={{
        display: "flex",
        borderLeft: "1px solid gray",
        flexDirection: "column",
      }}
    >
      <img
        src={`/images/${phone?.imageFileName}`}
        alt={phone?.name}
        style={{ width: "100%" }}
      />
      <div>
        <h2>{phone?.name}</h2>
        <h3>{phone?.manufacturer}</h3>
        <p>{phone?.description}</p>
      </div>
    </div>
  );
}

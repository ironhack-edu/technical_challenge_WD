import { useEffect, useState } from "react";
import axios from "axios";
import PhoneCard from "./PhoneCard";

export const URL = "http://localhost:5005";

export default function PhonesList({ showDetails }) {
  const [phones, setPhones] = useState(null);
  useEffect(() => {
    axios.get(`${URL}/phones`).then((response) => {
      setPhones(response.data);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {!phones ? (
        <h1>Loading..</h1>
      ) : (
        phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} showDetails={showDetails} />
        ))
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const PhoneList = () => {
  const [phoneList, setPhoneList] = useState([]);

  useEffect(() => {
    const getAllPhones = async () => {
      try {
        const response = await axios.get("http://localhost:8080/phones");
        if (response.status === 200) {
          console.log(response.data);
          setPhoneList(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllPhones();
  }, []);
  return phoneList.length ? (
    <div className="flex gap-4 justify-center items-center">
      {phoneList.map((phone) => (
        <Link to={`/${phone.id}`} key={phone.id}>
          <PhoneCard phone={phone} />
        </Link>
      ))}
    </div>
  ) : (
    <BeatLoader
      color="#2DCAAD"
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default PhoneList;

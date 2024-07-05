import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import axios from "axios";

const PhoneDescription = () => {
  const [phone, setPhone] = useState(null);
  const { phoneId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPhone = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/phones/${phoneId}`
        );
        if (response.status === 200) {
          setPhone(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getPhone();
  }, [phoneId]);

  return phone ? (
    <div className="flex flex-col gap-2 justify-center items-center p-4 shadow-md rounded-md bg-slate-600 text-slate-50">
      <img src={phone.imageFileName} alt="phone img" />
      <h1 className="text-2xl font-semibold">Model: {phone.name}</h1>
      <h3 className="text-xl">Brand: {phone.manufacturer}</h3>
      <p>Price: ${phone.price.toFixed(2)}</p>
      <p className="">Color: {phone.color}</p>
      <p className="">Description: {phone.description}</p>
      <p className="">Screen: {phone.screen}</p>
      <p className="">Processor: {phone.processor}</p>
      <p className="">RAM: {phone.ram}GB</p>
      <p
        className="cursor-pointer text-xl font-semibold hover:scale-110 hover:text-blue-500"
        onClick={() => navigate(-1)}
      >
        Back
      </p>
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

export default PhoneDescription;

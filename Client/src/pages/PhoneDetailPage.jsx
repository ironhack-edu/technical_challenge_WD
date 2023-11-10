import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PhoneDetailsPage() {
  const [phone, setPhone] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { Id } = useParams();

  const imagePath = `/images/${phone.imageFileName}`;

  const fetchPhone = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/phones/${Id}`
      );
      if (response.ok) {
        const onePhone = await response.json();
        setPhone(onePhone.phone);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhone();
  }, []);

  if (isLoading) {
    return (
      <div className="half-circle-spinner">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "1px 2px 7px 2px black",
        }}
      >
        <img src={imagePath} style={{ height: "200px" }} />
        <h3>{phone.name}</h3>
        <h4>{phone.manufacturer}</h4>
        <p>Description: {phone.description}</p>
        <p>Color: {phone.color}</p>
        <p>Screen: {phone.screen}</p>
        <p>Processor: {phone.processor}</p>
        <p>Ram: {phone.ram}</p>
        <p>Price: ${phone.price}</p>
      </div>
    </>
  );
}

export default PhoneDetailsPage;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spiner from "../components/Spiner";
import PhoneInfo from "../components/PhoneInfo";

const PORT = 4000;

const PhoneDetailsPage = () => {
  const { phoneId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:${PORT}/phones/${phoneId}`)
      .then((response) => {
        setSelectedProduct(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="phone-details-page">
      {isLoading ? <Spiner /> : <PhoneInfo selectedPhone={selectedProduct} />}
    </div>
  );
};

export default PhoneDetailsPage;

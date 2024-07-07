import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../api";
import { ClipLoader } from "react-spinners";

function DetailsPage({
  imageFileName,
  name,
  manufacturer,
  color,
  description,
  price,
}) {
  const [phone, setPhone] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getPhone = async () => {
      try {
        const response = await api.get(`/phones/${id}`);
        console.log("api response", response.data);
        setPhone(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPhone();
  }, []);
  return (
    <div>
      <h1>Phone</h1>
      {phone ? (
        <div key={id} className="PhoneCard" style={{ margin: "10rem" }}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={`../public/images/${phone.imageFileName}`}
              alt="Phone Img"
            />
            <div className="card-body">
              <h5 className="card-title">
                {phone.manufacturer} {phone.name}
              </h5>
              <p>Description: {phone.description}</p>
              <p>Color: {phone.color}</p>
              <p>Price: ${phone.price}</p>
              <Link to="/" className="btn btn-primary">
                Go To Home Page
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <ClipLoader />
      )}
    </div>
  );
}

export default DetailsPage;

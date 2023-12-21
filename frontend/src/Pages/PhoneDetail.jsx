import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import axios from "axios";
const API_URL = import.meta.env.VITE_SERVER_URL;

function PhoneDetail() {
  const { id } = useParams();
  const [phonesDetail, setPhonesDetail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const getPhones = async () => {
        try {
          const apiPhones = await axios.get(`${API_URL}/api/phones/${id}`);
          setPhonesDetail(apiPhones.data[0]);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      getPhones();
    }, 1000);
  }, [id]);
  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  console.log(phonesDetail);

  return (
    <>
      <div className="detailpagewrapper">
        <button
          className="buttondetail"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </button>
        <img
          className="img-detail"
          src={`../../public/images/${phonesDetail.imageFileName}`}
        />
        <h1>{phonesDetail.name}</h1>
        <p>{phonesDetail.manufacturer}</p>
        <p>Color : {phonesDetail.color.toUpperCase()}</p>
        <p
          style={{
            background: "pink",
            padding: "1rem",
            width: "25%",
            textAlign: "center",
          }}
        >
          {phonesDetail.price}$
        </p>
        <p style={{ padding: "0 10rem 0 10rem" }}>{phonesDetail.description}</p>
      </div>
    </>
  );
}

export default PhoneDetail;

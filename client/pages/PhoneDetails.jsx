import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../core/constants";
import { useParams } from "react-router-dom";

function PhoneDetails() {
  const [phoneDetails, setPhoneDetails] = useState();
  const [loading, setLoading] = useState(true);
  const { phoneId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/phones/${phoneId}`)
      .then((response) => {
        setPhoneDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return "Loading...";
  }

  return <span>{phoneDetails.name}</span>;
}

export default PhoneDetails;

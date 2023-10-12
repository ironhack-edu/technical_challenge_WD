import axios from "axios";
import { useState, useEffect } from "react";
import PhoneCard from "../components/PhoneCard";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const API_URL = "http://localhost:5005/api";

function PhoneDetailsPage({ phone }) {
    const [phoneDetails, setPhoneDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { phoneId } = useParams();

    useEffect(() => {
        axios
            .get(`${API_URL}/phones/${phoneId}`)
            .then((response) => {
                setPhoneDetails(response.data);
                setLoading(false);
            })
            .catch((error) => console.log(error))
    }, [phoneId]);

    return (
        <div className="ContainerDetails">
            {loading ? (
                // <p>Loading...</p>
                <Spinner />
            ) : (
                <PhoneCard phone={phoneDetails} /> 
            )}
           
        </div>
    )
}

export default PhoneDetailsPage;
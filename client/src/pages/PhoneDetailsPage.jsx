import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';



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
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [phoneId]);

    return (
        <div className="phone-details-container">
            <div className="all-phone-return">
                <Nav.Link href="/phones">
                    View all phones
                </Nav.Link>
            </div>
            {
                !loading &&
                <div className="phone-details">
                    <div className="phone-description ">
                        <div>
                            <img src={`/assets/images/${phoneDetails.imageFileName}`} alt={phoneDetails.name} />
                        </div>
                        <h2>{phoneDetails.name}</h2>
                        <p>{phoneDetails.description}</p>
                        <p>Screen: {phoneDetails.screen}</p>
                        <p>Colour: {phoneDetails.color}</p>
                        <p>Processor: {phoneDetails.processor}</p>
                        <h6><b>Price:</b> ${phoneDetails.price}</h6>
                    </div>
                </div>
            }
        </div>
    );
}

export default PhoneDetailsPage;
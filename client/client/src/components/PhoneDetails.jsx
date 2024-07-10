import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import axios from "axios";

function PhoneDetails() {
    const { id } = useParams();
    const [phone, setPhone] = useState(null);
    const API_URL = "http://localhost:5005/phones";


        const getPhone = async () => {
            try {
                const response = await axios.get(`${API_URL}/${id}`);
                setPhone(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        useEffect(() => {
            getPhone();
        }, []);

    return (
        <div id="phoneDetailsPage">
            <div id="phoneDetailsCard">
                {phone ? (
                    <div id="phoneDetails">
                        <h2>{phone.manufacturer} {phone.name}</h2>
                        <img
                        id="phoneImage"
                        src={`http://localhost:/assets/images/${phone.imageFileName}`}
                        alt={phone.name}
                        />
                        <p>{phone.price}</p>
                        <p>{phone.description}</p>
                        <Link to="/">
                            <button id="btn"> Back to Phones</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <ClimbingBoxLoader
                            color="#0000ff"
                            size={15}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                        <h1>Loading...</h1>
                    </div>
                )}
            </div>
        </div>
    );
}
export default PhoneDetails;
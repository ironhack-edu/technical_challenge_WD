import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClimbingBoxLoader } from "react-spinners";
import PhoneCard from "./PhoneCard";

function PhoneList() {
    const [phones, setPhones] = useState([]);
    const API_URL = "http://localhost:5005/";

        const getAllPhones = async () => {
            try {
                const response = await axios.get(API_URL);
                setPhones(response.data); 
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            getAllPhones();
        }, []);
    console.log(phones);
    return (
        <div id="phones">
            {phones ? (
                phones.map((phone) => {
                    return <PhoneCard key={phone.id} phone={phone} />;
                })
            ) : (
                <div>
                    <ClimbingBoxLoader
                        color="#0000ff"
                        size={15}
                        aria-label="Loading Spinner"
                        data-textid="loader"
                    />
                    <h1>Loading...</h1>
                </div>
                )}
            </div>
    );
}

export default PhoneList;
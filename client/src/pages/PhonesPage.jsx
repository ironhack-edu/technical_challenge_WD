import axios from "axios";
import { useState, useEffect } from "react";
import PhoneCard from "../components/PhoneCard";

const API_URL = "http://localhost:5005/api";

function PhonesPage() {

    const [phones, setPhones] = useState([]);

    const handleFetch = () => {
        axios
            .get(`${API_URL}/phones`)
            .then((response) => {
                console.log(response.data);
                setPhones(response.data);
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        handleFetch()
    }, []);

    return (
        <div className="phones-container">
            <div className="phone-list">

                {phones.map((phone) => (
                    <PhoneCard phone={phone} />
                ))}

            </div>
        </div>
    )
}

export default PhonesPage;
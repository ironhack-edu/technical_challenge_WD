import axios from "axios";
import { useState, useEffect } from "react";
import PhoneCard from "../components/PhoneCard";

const API_URL = "http://localhost:5005/api";

function PhonesPage() {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleFetch = () => {
        axios
            .get(`${API_URL}/phones`)
            .then((response) => {
                setPhones(response.data);
                setLoading(false)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        handleFetch()
    }, []);

    return (
        <div className="phones-container">
            {loading && <p>Fetching phones</p>}
            {!loading &&
                <div className="phone-list">
                    {phones.map((phone) => (
                        <PhoneCard phone={phone} />
                    ))}

                </div>
            }
        </div>
    )
}

export default PhonesPage;
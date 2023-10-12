import axios from "axios";
import { useState, useEffect } from "react";
import PhoneCard from "../components/PhoneCard";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const API_URL = "http://localhost:5005/api";

function PhonesListPage() {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllPhones = () => {
        axios
            .get(`${API_URL}/phones`)
            .then((response) => {
                setPhones(response.data)
                setLoading(false)
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllPhones();
    }, [])


    return (

        <div className="container">
            {loading && <p>Getting phones</p>}
            {!loading &&
                <div className="phone-list">
                    {phones.map((phone) => (
                        // <PhoneCard phone={phone} />
                        <Card key={phone.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`/assets/images/${phone.imageFileName}`} />
                            <Card.Body>
                                <Card.Title>{phone.name}</Card.Title>
                                    <Link to={`/phones/${phone.id}`}>Phone Detail</Link>
                            </Card.Body>  
                        </Card>
                    ))}

                </div>
            }

        </div>

    )
}

export default PhonesListPage;
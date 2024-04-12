import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SERVER_URL = 'http://localhost:4000';

function PhoneListPage() {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(false); //for the spinner component

    const getAllPhones = () => {
        setLoading(true)
        axios
            .get(`${SERVER_URL}/phones`)
            .then((response) => {
                setPhones(response.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            });
    }

    useEffect(() => {
        getAllPhones();
    }, []);

    const getImages = (image) => `../assets/images/${image}`;

    return (
        <div className="container mt-3">
            {/* <h1>List of Phones</h1> */}

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="row">
                    {phones &&
                        phones.map((phone, index) => (
                            <div key={index}>
                                <div className="card mt-3">
                                    <Link to={`/phones/${phone.id}`}>
                                        <div className="text-center">
                                            <img src={getImages(phone.imageFileName)} alt={phone.name} style={{ maxWidth: '150px' }}/>
                                        </div>
                                    </Link>

                                    <div>
                                        <h5>{phone.name}</h5>
                                        <p><strong>Manufacturer:</strong> {phone.manufacturer}</p>
                                        <p><strong>Price:</strong> ${phone.price}</p>
                                        <Link to={`/phones/${phone.id}`} className="btn btn-primary">
                                            View phone details
                                        </Link>
                                    </div>
                                </div>    
                            </div>    
                        ))
                    }
                </div>    
            )}
        </div>
    );
};

export default PhoneListPage;
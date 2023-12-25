import axios from "axios";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomePage() {
    const API = "http://localhost:3000/phones";

    const [phoneList, setPhoneList] = useState([]);
    const [loadingPage, setLoadingPage] = useState(true);
    const [loadingPhoneSimulation, setLoadingPhoneSimulation] = useState(true);
    const [phone, setPhone] = useState(null);

    useEffect(() => {
        getAllPhones();
    }, [])

    const getAllPhones = async () => {
        try {
            const response = await axios.get(API);
            console.log(response.data);
            setPhoneList(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setTimeout(() => {
                setLoadingPage(false);
            }, 1000);
        }
    }

    const getPhone = async (id) => {
        try {
            const response = await axios.get(`${API}/${id}`);
            setPhone(response.data[0]);
        } catch (error) {
            console.error(error);
        } finally {
            setTimeout(() => {
                setLoadingPhoneSimulation(false);
            }, 1000);
        }
    }

    return (
        <div className="container">
            <h1 className="mt-5">All Phones</h1>
            <div className="row">
                <div className="col-md-6">
                    <ul className="list-group">
                        {phoneList.map((phone, index) => (
                            <li key={index} className="list-group-item">
                                <p title={phone.name}>{phone.name}</p>
                                <img className="small-phone" src={`../${phone.imageFileName}`} alt={phone.name} />
                                <button className="btn btn-primary" onClick={() => getPhone(phone.id)}>Details</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-md-6">
                    {phone && (
                        <div className="card mt-4">
                            <img className="card-img-top" src={`/${phone.imageFileName}`} alt={phone.name} />
                            <div className="card-body">
                                <h5 className="card-title">{phone.name}</h5>
                                <p className="card-text">Manufacturer: {phone.manufacturer}</p>
                                <p className="card-text">Description: {phone.description}</p>
                                <p className="card-text">Color: {phone.color}</p>
                                <p className="card-text">Price: ${phone.price}</p>
                                <p className="card-text">Screen: {phone.screen}</p>
                                <p className="card-text">Processor: {phone.processor}</p>
                                <p className="card-text">RAM: {phone.ram} GB</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

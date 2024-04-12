import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SERVER_URL = 'http://localhost:4000';

function PhoneDetailsPage() {

    const [phone, setPhone] = useState([]);
    const { phoneId } = useParams();
    const navigate = useNavigate();

    const getPhone = () => {
        axios
            .get(`${SERVER_URL}/phones/${phoneId}`)
            .then((response) => {
                console.log(response.data)
                setPhone(response.data)
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getPhone();
    }, [phoneId]);

    const getImage = (image) => `../assets/images/${image}`;

    return(
        <div className="container mt-4">
            {phone && (
                <div className="card">
                    <img src={getImage(phone.imageFileName)} alt={phone.name} />

                    <div className="card-body">
                        <h3>{phone.name}</h3>
                        <p><strong>Manufacturer:</strong> {phone.manufacturer}</p>
                        <p><strong>Description:</strong> {phone.description}</p>
                        <p><strong>Color:</strong> {phone.color}</p>
                        <p><strong>Price:</strong> ${phone.price}</p>
                        <p><strong>Screen:</strong> {phone.screen}</p>
                        <p><strong>Processor:</strong> {phone.processor}</p>
                        <p><strong>RAM:</strong> {phone.ram}</p>
                    </div>
                    <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
                </div>    
            )}
        </div>
    )
}

export default PhoneDetailsPage;

// "id": 0,
// "name": "iPhone 7",
// "manufacturer": "Apple",
// "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
// "color": "black",
// "price": 769,
// "imageFileName": "IPhone_7.png",
// "screen": "4,7 inch IPS",
// "processor": "A10 Fusion",
// "ram": 2
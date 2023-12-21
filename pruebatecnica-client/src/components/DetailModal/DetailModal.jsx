import { useEffect, useState } from "react"
import Loader from "../Loader/Loader"
import phoneService from "../../services/phone.services";
import { Card } from "react-bootstrap";
// import image from `./../../assets/images/${phone.imageFileName}`;
import image from './../../assets/images/Honor_10.png'

const DetailModal = ({ id }) => {
    const [phone, setPhone] = useState();

    const loadPhone = () => {
        phoneService
            .getPhoneById(id)
            .then(({ data }) => setPhone(data[0]))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        loadPhone();
    }, []);

    return (
        <div className="DetailModal">
            {!phone
                ? <Loader />
                :
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={`./../../src/assets/images/${phone.imageFileName}`} />
                        <Card.Title className="text-center">
                            <p><strong>{phone.name}</strong></p>
                        </Card.Title>
                        <div className="my-3">
                            <Card.Text>
                                <strong>Manufacturer:</strong> {phone.manufacturer}
                            </Card.Text>
                            <Card.Text>
                                <strong>Description:</strong> {phone.description}
                            </Card.Text>
                            <Card.Text>
                                <strong>Color:</strong> {phone.color}
                            </Card.Text>
                            <Card.Text>
                                <strong>Screen:</strong> {phone.screen}
                            </Card.Text>
                            <Card.Text>
                                <strong>Processor:</strong> {phone.processor}
                            </Card.Text>
                            <Card.Text>
                                <strong>Ram:</strong> {phone.ram} GB
                            </Card.Text>
                            <Card.Text as="h3">
                                ${phone.price}
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>}
        </div >
    )
}

export default DetailModal
import { Card, ListGroup } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import phoneService from "../../services/phones.service"

const PhoneDetailedCard = () => {

    const [phone, setPhone] = useState({})
    const { id: phone_id } = useParams()


    const loadPhone = () => {
        phoneService
            .getPhoneDetails(phone_id)
            .then(({ data }) => setPhone(data))
    }

    useEffect(() => {
        loadPhone()
    }, [phone_id])



    return (

        <div className="PhoneDetailedCard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`./assets/images/${phone[0]?.imageFileName}`} />
                <Card.Body>
                    <Card.Title>{phone[0]?.name}</Card.Title>
                    <Card.Text>
                        {phone[0]?.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Color: {phone[0]?.color}</ListGroup.Item>
                    <ListGroup.Item>Make: {phone[0]?.manufacturer}</ListGroup.Item>
                    <ListGroup.Item>Processor: {phone[0]?.processor}</ListGroup.Item>
                    <ListGroup.Item>RAM: {phone[0]?.ram}</ListGroup.Item>
                    <ListGroup.Item>Screen: {phone[0]?.screen}</ListGroup.Item>
                    <ListGroup.Item>Price: {phone[0]?.price}$</ListGroup.Item>


                </ListGroup>
            </Card>
        </div>

    )
}

export default PhoneDetailedCard
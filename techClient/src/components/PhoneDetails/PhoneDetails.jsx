import { useEffect, useState } from "react"
import { Card, ListGroup } from "react-bootstrap"
import phoneService from "../../services/phone.services"

const PhoneDetails = (id) => {


    const [phone, setPhone] = useState({})



    useEffect(() => {
        detailsPhone()
    }, [])

    const detailsPhone = () => {
        phoneService
            .getPhoneDetails(id)
            .then(({ data }) => {
                setPhone(data)
            }
            )
            .catch(err => console.log(err))
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{phone?.name}</Card.Title>
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
    )


}
export default PhoneDetails
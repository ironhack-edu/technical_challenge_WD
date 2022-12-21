import { useState, useEffect } from "react"
import phonesService from "./../services/phone.services"
import Card from 'react-bootstrap/Card';



function PhoneListPage() {

    const [phones, setPhones] = useState()


    const loadPhones = () => {

        phonesService
            .getPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))

    }
    useEffect(() => {
        loadPhones()
    }, [])



    return (
        <div >
            {phones?.map((phone) => {
                return <div key={phone._id}>
                    <p>{phone.description}</p>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{phone.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{phone.color}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">{phone.price}</Card.Subtitle>
                            <Card.Text>
                                {phone.description}
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </div>
            }

            )}

        </div>
    )
}

export default PhoneListPage

    // .then(({ data }) => setPhone(data))
    // .then(([data]) => setPhones(data))
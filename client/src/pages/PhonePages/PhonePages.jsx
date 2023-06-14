
import { useEffect, useState } from 'react'
import phonesServices from '../../services/phones.services'
import { Row, Container, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const PhonePages = () => {

    const [phones, setPhones] = useState()

    useEffect(() => {
        loadPhones()
    }, [])

    const loadPhones = () => {
        phonesServices
            .getAllPhones()
            .then(({ data }) => {
                setPhones(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <h1>PhonePages</h1>

            <Container>
                <Row>
                    {
                        !phones
                            ?
                            <h1>Cargando...</h1>
                            :
                            phones.map(phone => {
                                return (
                                    <Col key={phone._id}>
                                        <Card>
                                            <p>{phone.name}</p>
                                            <Button className='btn btn-dark'>
                                                <Link to={`/phones/${phone._id}`}>
                                                    View Details
                                                </Link>
                                            </Button>
                                        </Card>
                                    </Col>
                                )
                            })
                    }
                </Row>
            </Container>


        </>

    )

}

export default PhonePages
import { useEffect, useState } from 'react';
import phoneServices from '../../services/phone.services';
import './DetailPage.css'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
const DetailPage = () => {
    const { id } = useParams()
    const [phone, setPhone] = useState({})

    useEffect(() => getDetails(), [])

    function getDetails() {
        phoneServices
            .getDetails(id)
            .then(({ data }) => setPhone(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="DetailPage">
            <Container>
                <Row className='mt-5'>
                    <Col sm={{ span: 8 }}>
                        <h1>{phone.name} in {phone.color} color</h1>
                        <h4>{phone.manufacturer}</h4>
                        <p>{phone.description}</p>
                        <hr />
                        <p> <strong>Screen: </strong> {phone.screen}</p>
                        <p> <strong>Processor: </strong> {phone.processor} </p>
                        <p> <strong>RAM: </strong> {phone.ram} </p>

                    </Col >
                    <Col className='text-center img-fluid' xs={{ order: 'first' }} md={{ order: 'last' }} sm={{ span: 4 }}>
                        <img src={`/src/assets/images/${phone.imageFileName}`} />
                        <h4> <strong>Price: </strong> {phone.price} € </h4>
                    </Col>
                </Row>


            </Container>
        </div >
    )
}
export default DetailPage
import { useEffect, useState } from "react"
import PhoneCard from "../PhoneCard/PhoneCard"
import phoneServices from "../../../services/phone.services"
import { Row, Col, Container } from 'react-bootstrap';
import './PhoneList.css'
const PhoneList = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => getData(), [])

    function getData() {

        phoneServices
            .getAllModels()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))

    }

    return (

        <div className="PhoneList">
            <Container>
                <Row>
                    {phones && phones.map(e =>
                        <Col className="customCol" md={{ span: 4 }} key={e.id}>
                            <PhoneCard data={e} />
                        </Col>)}
                </Row>
            </Container>
        </div >

    )
}
export default PhoneList
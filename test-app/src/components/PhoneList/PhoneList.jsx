import PhoneCard from "../PhoneCard/PhoneCard"
import { Col, Row } from "react-bootstrap"

const PhonesList = ({ phones }) => {

    return (
        <Row>
            {
                phones.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <PhoneCard {...elm} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default PhonesList
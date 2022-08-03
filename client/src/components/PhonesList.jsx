import  {Col, Row} from 'react-bootstrap'
import PhonesCard from './PhonesCard';


const PhonesList = ({phones}) => {

    return (
        <Row>
        {
            phones?.map(phones => {
                    return (
                        <Col md={3} key={phones._id} >
                           <PhonesCard {...phones} />
                        </Col>
                    );
        })}
        </Row>
        )
}

export default PhonesList
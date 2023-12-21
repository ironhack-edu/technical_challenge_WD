import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import DetailModal from './DetailModal/DetailModal';
import { useState } from 'react';

const PhoneList = ({ phones }) => {
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [id, setId] = useState(null);

    return (
        <div className="PhoneList my-3">
            <div className='text-center'>
                <h2>Best Phones EUWest 🚀</h2>
            </div>
            <hr />
            <Row>
                {phones.map(phone => (
                    <Col key={phone.id} sm={12} md={6} lg={4} xl={3} className='my-3'>
                        <Card className="rounded h-100">
                            <Card.Body>
                                <Card.Title as="div">
                                    <strong>{phone.name}</strong>
                                </Card.Title>
                                <Card.Text as="div">
                                    <div className="my-3">
                                        {phone.description}
                                    </div>
                                </Card.Text>
                                <Card.Text as="h3">
                                    ${phone.price}
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="text-center my-3">
                                        <Button variant="dark" onClick={() => { setShowDetailModal(true); setId(phone.id) }}>Details</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showDetailModal} onHide={() => setShowDetailModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DetailModal setShowDetailModal={setShowDetailModal} id={id} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PhoneList;
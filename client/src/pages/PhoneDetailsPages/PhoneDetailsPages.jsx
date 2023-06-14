
import { useEffect, useState } from 'react'
import phonesServices from '../../services/phones.services'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import EachPhone from '../../components/EachPhone/EachPhone'

const PhoneDetailsPages = () => {

    const [phoneDetails, setPhoneDetails] = useState()
    const { id } = useParams()

    useEffect(() => {
        loadPhoneDetails()
    }, [])

    const loadPhoneDetails = () => {
        phonesServices
            .getOneDetails(id)
            .then(({ data }) => {
                setPhoneDetails(data)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Container>
                <h1>PhoneDetailsPages</h1>
                <Row>
                    {
                        !phoneDetails
                            ?
                            <h1>Cargando ...</h1>
                            :
                            <Col>
                                <EachPhone {...phoneDetails} />
                            </Col>
                    }
                    <hr />
                    <Button className='btn btn-dark'>
                        <Link to={`/`}>
                            GO HOME
                        </Link>
                    </Button>

                </Row>


            </Container>


        </>

    )

}

export default PhoneDetailsPages
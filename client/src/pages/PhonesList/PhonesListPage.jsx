import { useEffect, useState } from "react"
import phonesServices from '../../services/phone.services'
import  {Container, Row} from 'react-bootstrap'
import PhonesList from "../../components/PhonesList"

const PhonesListPage = () => {

    const [ phones, setPhones ] = useState([])

    useEffect(() => {

        phonesServices
            .getPhones()
            .then(({data}) => setPhones(data))
            .catch(err => console.error(err))
    },[])



    return (
       
        <Container>

            <h1>Phones in stock</h1>
           <hr />
            <Row>

            <PhonesList phones={phones}/>
        
            </Row>

        </Container>
  
    )

}

export default PhonesListPage
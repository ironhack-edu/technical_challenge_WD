import { useEffect, useState } from "react"
import { Row, Spinner, Container } from "react-bootstrap"
import phoneService from "../../services/phone.services"
import PhoneCard from "../../components/PhoneCard/PhoneCard"

const PhoneListPage = () => {
    const [phoneList, setPhoneList] = useState([])

    useEffect(() => {
        getAllPhones()
    }, [])

    const getAllPhones = () => {
        phoneService
            .getPhoneList()
            .then(({ data }) => {
                setPhoneList(data)
            }
            )
            .catch(err => console.log(err))
    }

    return (
        !phoneList ? <Spinner /> :
            <Container>
                <Row className="justify-content-md-center">

                    {
                        phoneList.map(u => <PhoneCard {...u} key={u.id}></PhoneCard>)
                    }


                </Row>
            </Container>

    )
}
export default PhoneListPage
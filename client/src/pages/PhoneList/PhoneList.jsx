import { useEffect, useState } from "react"

import PhoneCard from "../../components/PhoneCard/PhoneCard"
import phoneServices from "../../services/phone.services"

import { Container, Row, Col } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"

const PhoneList = () => {
	const [phones, setPhones] = useState()

	const getPhonesData = () => {
		phoneServices
			.getAllPhones()
			.then(res => {
				setPhones(res.data)
			})
			.catch(err => console.error(err))
	}

	useEffect(() => {
		getPhonesData()
	}, [])

	return (
		<>
			{!phones ? (
				<Container className="d-flex justify-content-center pt-5">
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</Container>
			) : (
				<Container className="py-5">
					<Row className="pb-4">
						<h1>All our phones</h1>
					</Row>
					<Row>
						{phones.map(phone => {
							return (
								<Col key={phone._id} md={3} className="pb-4">
									<PhoneCard phone={phone} />
								</Col>
							)
						})}
					</Row>
				</Container>
			)}
		</>
	)
}

export default PhoneList

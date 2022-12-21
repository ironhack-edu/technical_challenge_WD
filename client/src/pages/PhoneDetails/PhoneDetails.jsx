import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import phoneServices from "../../services/phone.services"

import { Container, Row, Col, Button } from "react-bootstrap"
import Spinner from "react-bootstrap/Spinner"

function PhoneDetails() {
	const [phoneDetails, setPhoneDetails] = useState()

	const { phone_id } = useParams()

	const getPhoneDetails = () => {
		phoneServices
			.getOnePhone(phone_id)
			.then(res => {
				setPhoneDetails(res.data)
			})
			.catch(err => console.error(err))
	}

	useEffect(() => {
		getPhoneDetails()
	}, [])

	console.log(phoneDetails)

	return (
		<>
			{!phoneDetails ? (
				<Container className="d-flex justify-content-center pt-5">
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</Container>
			) : (
				<Container className="py-5">
					<Row className="pb-3">
						<Col md={{ span: 6, offset: 3 }}>
							<h1>Details of {phoneDetails.name}</h1>
						</Col>
					</Row>

					<Row>
						<Col md={{ span: 6, offset: 3 }} className="pb-3">
							<div className="d-flex justify-content-center">
								<img className="detailsImg" src={phoneDetails.imageFileName} alt={phoneDetails.name} />
							</div>
							<b>Description:</b>
							<p>{phoneDetails.description}</p>
							<p>
								<b>Manufacture:</b> {phoneDetails.manufacturer}
							</p>
							<p>
								<b>Price:</b> {phoneDetails.price} €
							</p>
							<p>
								<b>Screen:</b> {phoneDetails.screen}
							</p>
							<p>
								<b>Processor:</b> {phoneDetails.processor}
							</p>
							<p>
								<b>Ram:</b> {phoneDetails.ram}
							</p>
							<Link to={`/phones`}>
								<Button variant="dark" size="sm" as="div">
									Back to all phones
								</Button>
							</Link>
						</Col>
					</Row>
				</Container>
			)}
		</>
	)
}

export default PhoneDetails

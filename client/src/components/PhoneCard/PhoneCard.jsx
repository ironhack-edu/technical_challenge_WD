import { Link } from "react-router-dom"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function PhoneCard({ phone }) {
	const { name, price, _id, imageFileName } = phone

	return (
		<Card className="PhonesCard" style={{ minWidth: "200px" }}>
			<Card.Img variant="top" src={imageFileName} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{price} €</Card.Text>
				<Link to={`/phones/${_id}`} style={{ marginInline: "auto" }}>
					<Button variant="dark" size="sm" as="div">
						More Details
					</Button>
				</Link>
			</Card.Body>
		</Card>
	)
}

export default PhoneCard

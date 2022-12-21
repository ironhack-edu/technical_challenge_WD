import { Link } from "react-router-dom"

import { Button } from "react-bootstrap"

const HomePage = () => {
	return (
		<div className="homepage">
			<h1>¡Welcome to phontastic_!</h1>
			<Link to="/phones">
				<Button className="btn btn-dark" variant="dark">
					See our phones
				</Button>
			</Link>
		</div>
	)
}

export default HomePage

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="Navigation">
            <Navbar expand="lg" >
                <Container>
                    <Link to={'/phones'} className='homeLink'>Phone Cave</Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
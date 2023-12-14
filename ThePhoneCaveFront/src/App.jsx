import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import AppRoutes from './AppRoutes'
import { Link } from 'react-router-dom'

const App = () => {

  return (
    <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to={'/phones'}>The Phone Cave</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/phones">Phones</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <AppRoutes></AppRoutes>
    </div>
  )
}

export default App

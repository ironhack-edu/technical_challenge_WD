import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Container, Nav, Navbar } from 'react-bootstrap';



function AppNavbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar
        collapseOnSelect
        expanded={false}      
        expand="lg"
        style={{
          backgroundColor: '#ffdf38',
        }}
      >
        <Container>
          <Navbar.Brand
            className="navbar-link-hover"
            as={NavLink}
            style={{
              fontSize: '1.2em',
              fontWeight: 'bold',
            }}
            to="/"
          >
            The Phone Cave
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {isLoggedIn && (
                <>
                  <Nav.Link
                    className="navbar-link-hover"
                    as={NavLink}
                    to="/phones"
                  >
                    All Phones
                  </Nav.Link>
                </>
              )}
            </Nav>
            {isLoggedIn ? (
              <Nav>
                <Nav.Link
                  className="navbar-link-hover"
                  as={NavLink}
                  to="/profile"
                >
                  Profile
                </Nav.Link >
                <Nav.Link
                  disabled
                  style={{
                    color: "white",
                    display: 'flex',
                    alignItems: 'center',
                  }}>Hello {user && user.name}
                </Nav.Link>
                <Nav.Link
                  className="navbar-link-hover"
                  onClick={logOutUser}
                >
                  Logout
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link
                  className="navbar-link-hover"
                  as={NavLink}
                  to="/signup"
                >
                  Sign Up
                </Nav.Link>
                <Nav.Link
                  className="navbar-link-hover"
                  as={NavLink}
                  to="/login"
                >
                  Login
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
);

}

export default AppNavbar;

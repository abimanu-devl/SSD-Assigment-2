import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth0 } from '@auth0/auth0-react';


function Header(Props) {
  const { logout } = useAuth0();
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand >Document Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link >Features</Nav.Link>
            <Nav.Link >Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link >{Props.email}</Nav.Link>
            <Nav.Link eventKey={2} onClick={logout}>
            Log out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
import {NavLink} from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    <Navbar bg="primary" variant="dark" expand="lg"
    className="mt-4 mb-4 rounded">
    <Container>
      <Navbar.Brand as={NavLink} to="/">Blog.app</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
};
export default NavBar;

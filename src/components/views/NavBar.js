import {NavLink} from 'react-router-dom';
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return(
    <Navbar bg="primary" variant="dark" expand="lg"
      className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Blog.app</Navbar.Brand>
        <Nav className="flex-sm-column flex-md-row">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

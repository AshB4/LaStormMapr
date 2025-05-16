import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header>
    <Navbar expand="md" variant="dark" className="bg-primary text-white py-3 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo-transparent.png"
            alt="LAStormMapr Logo"
            height="40"
            className="me-2"
            style={{ position: "relative", left: "-6px" }}
          />
          <span className="fw-bold">LAStormMapr</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/tips">Tips</Nav.Link>
            <Nav.Link as={Link} to="/shelter">Shelters</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            {/* make this a special link only admins can see */}
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/admin/login">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;

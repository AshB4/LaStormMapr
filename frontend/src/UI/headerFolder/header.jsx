import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/LaStormState.png";
import text from "../../assets/LAStormText.png";

const Header = () => (
  <header>
    <Navbar expand="md" variant="dark" className="shadow-sm fw-bold text-white">

      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img
  src={logo}
  alt="LAStormMapr Icon"
  style={{
    height: "60px",
    width: "auto",
    maxWidth: "64px",
    objectFit: "contain"
  }}
/>
<img
  src={text}
  alt="LAStormMapr Text"
  style={{
    height: "42px",
    width: "auto",
    maxWidth: "140px",
    objectFit: "contain"
  }}
/>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/tips">Tips</Nav.Link>
            <Nav.Link as={Link} to="/shelter">Shelters</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;

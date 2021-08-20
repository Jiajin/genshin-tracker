import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect fixed="top">
      {" "}
      <Container>
        <Navbar.Brand href="/home">Genshin Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/preferences">Preferences</Nav.Link>
            <Nav.Link href="/characters">Characters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

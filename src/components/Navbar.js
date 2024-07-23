import React from "react";
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <BootstrapNavbar bg="light" expand="lg" fixed="top">
      <div className="container-fluid p-4">
        <BootstrapNavbar.Brand href="#">Offcanvas navbar</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="offcanvasNavbar" />
        <BootstrapNavbar.Collapse id="offcanvasNavbar">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
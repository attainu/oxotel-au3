import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginModal from "./Modal";


const NavbarComponent = () => {
    return (
        <>
            {/* <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <p className="h2">Oxotel</p>
        </Navbar.Brand>
        <Nav className="collapse navbar-collapse">
          <Nav.Link href="#deets">Home</Nav.Link>
          <Nav.Link href="#deets">Our Rooms</Nav.Link>
          <Nav.Link href="#deets">About Us</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Contact Us
          </Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <LoginModal />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar> */}

            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                    <p className="h2">Oxotel</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/app">Home</Nav.Link>
                        <Nav.Link href="/ourRooms">Our Rooms</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <LoginModal />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
export default NavbarComponent;

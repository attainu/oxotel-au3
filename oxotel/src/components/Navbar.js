import React, { useEffect, useState } from "react";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import LoginModal from "./Modal";


const NavbarComponent = () => {

    const [state, setstate] = useState({ userLogin: false })

    useEffect(() => {
        let LoggedIn = localStorage.getItem("signupData");
        if (LoggedIn) {
            setstate({ userLogin: true })
        } else setstate({ userLogin: false })
    }, [])

    const profile = (<DropdownButton id="dropdown-basic-button" variant="info" drop="left" title="&#8801;">
        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="/logout">Logout</Dropdown.Item>
    </DropdownButton>)


    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="shadow-sm">
                <Navbar.Brand href="/home">
                    <p className="h2">Oxotel</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/ourRooms">Our Rooms</Nav.Link>
                        <Nav.Link href="/locations">Our Locations</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link> */}
                        {state.userLogin ? (profile)
                            : (<Nav.Link><LoginModal /></Nav.Link>)}
                        {/* </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
export default NavbarComponent;

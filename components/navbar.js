import { Navbar,Container } from 'react-bootstrap';
import React, { Component } from 'react'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';


class NavbarSharepro extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#" class="font-navbar">Share Pro</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarSharepro;
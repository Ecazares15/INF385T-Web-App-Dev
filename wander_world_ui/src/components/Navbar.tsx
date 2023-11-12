import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import wanderWorldLogo from '../assets/wanderworld_logo.svg'

const NavBar: React.FC<{}> = () => {

    return (
        <Navbar variant="dark" expand="lg" style={{backgroundColor: "#1f4098"}}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={wanderWorldLogo} 
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"/>{'  '}
                    WanderWorld
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <LinkContainer to="/feed">
                            <Nav.Link>Feed</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/community">
                            <Nav.Link>Community</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
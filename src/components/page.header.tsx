'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/navigation'

function PageHeader() {
    const router = useRouter()
    const ClickHP = () => {
        router.push("/")
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary" >
            <Container>
                <Navbar.Brand onClick={() => ClickHP()}>vnbaodev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                        <NavDropdown title="Social " id="basic-nav-dropdown">
                            <NavDropdown.Item target="_blank" href="https://www.instagram.com/">
                                Instagram
                            </NavDropdown.Item>
                            <NavDropdown.Item target="_blank" href="https://www.facebook.com/">
                                Facebook
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item target="_blank" href="https://mail.google.com/">
                                My Email
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PageHeader;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./header.scss";

function Header() {
    return (
        <Navbar bg="primary" expand="lg" className='header-wrapper'>
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://cdn-icons-png.flaticon.com/128/4762/4762153.png?ga=GA1.1.172831833.1696532775&track=ais"
                        className='logo' alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/user-dashboard">Dashoard</Nav.Link>
                        <Nav.Link href="/transactions">Transactions</Nav.Link>
                        <Nav.Link href="/challenges">Challanges</Nav.Link>
                        <Nav.Link href="/initiatives">Initiatives</Nav.Link>
                        <Nav.Link href="">User positions</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="/user/register">Register</Nav.Link>
                        <Nav.Link href="/user/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
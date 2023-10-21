import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, } from 'react-router-dom';
import Header from './header/Header';
import "./Layout.scss";

function Layout() {
    return (<>
        <Container fluid className='menu-wrapper'>
            <Header />
        </Container>

        <Outlet />

    </>
    );
}

export default Layout;

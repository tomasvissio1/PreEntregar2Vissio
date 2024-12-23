

import Container from 'react-bootstrap/Container';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Link to='/'>CelusVissio</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link  to="/category/iphone">iphone</Link></Nav.Link>
            <Nav.Link><Link to="/category/samsung">samsung</Link></Nav.Link>
            <Nav.Link><Link to="/category/motorola">motorola</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>


      <CartWidget/>
    </Navbar>
    )
}


export default NavBar;
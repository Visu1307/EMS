import { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  const [email,setEmail] = useState()
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="/" className='text-white'>Employee Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='text-white'>Home</Nav.Link>
            <NavDropdown title={<span style={{ color: 'white' }}>Login</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/emp-login'>Employee</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/hr-login'>HR</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/admin-login'>Admin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;
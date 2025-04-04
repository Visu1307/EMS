import { useContext } from 'react';
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './Auth_Context';

function Header() {
  const {authData} = useContext(AuthContext)
  console.log(authData.fnm)
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="/" className='text-white'>Employee Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='text-white'>Home</Nav.Link>
            {authData.fnm===null ? ( 
            <>
            <NavDropdown title={<span style={{ color: 'white' }}>Login</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/Emp/Login'>Employee</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Login'>HR</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Login'>Admin</NavDropdown.Item>
            </NavDropdown>
            </>
            ) : ( 
              <>
            <NavDropdown title={<span style={{ color: 'white' }}>Hii {authData.fnm}</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={'/Logout'}>Logout</NavDropdown.Item>
            </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;
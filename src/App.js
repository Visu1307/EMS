import { Button, Col, Container, Row, Image} from "react-bootstrap";
import Hero from './images/HOME.gif'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./pages/Auth_Context";
function App() {
  const {authData} = useContext(AuthContext)
  return (
    <div className="App">
      <Container className="my-5">
        <Row>
          <Col>
            <Image src={Hero} />
          </Col>
          <Col className="mt-5">
            <h1>Hii {authData.fnm}, Your Role Is : {authData.role}</h1>
            <h1>Effortless Employee Management</h1>
            <p>Streamline your HR operations with our powerful Employee Management System. Track attendance, manage payroll, monitor performance, and simplify employee records—all in one place. Boost productivity and efficiency with ease!</p>
            {authData.fnm===null ? (             
            <Link to={'/Role'}><Button className="btn-lg" variant="primary">Checkout Now!</Button></Link>
            ) : (
            <Link to={'/Dashboard'}><Button className="btn-lg" variant="primary">Checkout Now!</Button></Link>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

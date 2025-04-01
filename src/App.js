import { Button, Col, Container, Row, Image} from "react-bootstrap";
import Hero from './images/HOME.gif'
function App() {
  return (
    <div className="App">
      <Container className="my-5">
        <Row>
          <Col>
            <Image src={Hero} />
          </Col>
          <Col className="mt-5">
            <h1>Effortless Employee Management</h1>
            <p>Streamline your HR operations with our powerful Employee Management System. Track attendance, manage payroll, monitor performance, and simplify employee records—all in one place. Boost productivity and efficiency with ease!</p>
            <Button href="/login" className="btn-lg" variant="primary">Checkout Now!</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

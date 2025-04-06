import { Button, Col, Container, Row, Image, Card, Badge } from "react-bootstrap";
import Hero from './images/HOME.gif';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./pages/Auth_Context";
import './App.css'; // Custom CSS for styling

function App() {
  const { authData } = useContext(AuthContext);

  return (
    <div className="landing-page">
      <Container className="py-5">
        <Card className="landing-card p-4 shadow-lg border-0 rounded-5">
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-4 mb-lg-0">
              <Image src={Hero} fluid className="hero-image" />
            </Col>
            <Col lg={6}>
              <h1 className="fw-bold mb-2">Hi, {authData.email}</h1>
              <h4 className="mb-4 text-muted">Your Role:
                <Badge bg="info" className="ms-2 text-uppercase">{authData.role}</Badge>
              </h4>
              <h2 className="mb-3 text-primary fw-bold">Effortless Employee Management</h2>
              <p className="lead mb-4">
                Simplify HR operations with our all-in-one Employee Management System. From attendance to payroll, everything is at your fingertips.
              </p>
              <Link to="/Role">
                <Button className="cta-button btn-lg px-4 py-2">Go to Dashboard</Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default App;

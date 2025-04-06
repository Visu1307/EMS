import React, { useContext, useState } from 'react';
import { Button, Container, Row, Col, Form, Alert, Spinner } from 'react-bootstrap';
import loginImage from '../images/Login.gif';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './Auth_Context';

function Emp_Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const role = 'emp';

  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateForm = () => {
    return email.trim() !== '' && pass.trim() !== '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:3001/Emp_Login', { email, pass });

      if (res.data === 'Success') {
        setAuthData({ email, role });
        navigate('/employee-dashboard');
      } else {
        setError(res.data);
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="vh-100">
      <Container fluid className="h-custom my-5">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xs={12} md={9} lg={6} xl={5}>
            <img src={loginImage} className="img-fluid" alt="Login illustration" />
          </Col>
          <Col xs={12} md={8} lg={6} xl={4} className="offset-xl-1">
            <Form onSubmit={handleSubmit}>
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                <p className="fs-1">Employee Login</p>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              {/* Email input */}
              <Form.Group className="mb-4" controlId="form3Example3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>

              {/* Password input */}
              <Form.Group className="mb-3" controlId="form3Example4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
              </Form.Group>

              <div className="text-center text-lg-start mt-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  type="submit"
                  disabled={!validateForm() || loading}
                >
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" /> Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </Button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{' '}
                  <Link to="/emp-register" className="link-primary">
                    Register
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Emp_Login;

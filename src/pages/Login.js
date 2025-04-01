import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import loginImage from '../images/Login.gif';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [unm,setUnm] = useState('')
  const [pass,setPass] = useState('')
  const [role,setRole] = useState('')
  const navigate = useNavigate()
  const validateForm = () => {
    return(
      unm.trim() !== '' &&
      pass.trim() !== ''
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/login",{unm,pass,role})
    .then(res => {
      if(res.data==="Success"){
        navigate('/')
      }
      else{
        alert("Login Failed")
      }
    })
  }
  return (
    <div>
      <section className="vh-100">
        <Container fluid className="h-custom">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={12} md={9} lg={6} xl={5}>
              <img
                src={loginImage}
                className="img-fluid"
                alt="Login illustration"
              />
            </Col>
            <Col xs={12} md={8} lg={6} xl={4} className="offset-xl-1">
              <Form onSubmit={handleSubmit}>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in as </p>
                  <select className='bg-primary text-white' onChange={(e)=>setRole(e.target.value)}>
                    <option value={'emp'}>Employee</option>
                    <option value={'hr'}>HR</option>
                    <option value={'admin'}>Admin</option>
                  </select>
                </div>

                {/* Email input */}
                <Form.Group className="mb-4" controlId="form3Example3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUnm(e.target.value)}
                  />
                </Form.Group>

                {/* Password input */}
                <Form.Group className="mb-3" controlId="form3Example4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </Form.Group>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                    type='submit'
                    disabled={!validateForm()}
                  >
                    Login
                  </Button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? <Link to="/EmpRegister" className="link-primary">Register</Link>
                  </p>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Login;






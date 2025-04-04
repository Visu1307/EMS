import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import loginImage from './images/Login.gif';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Auth_Context';

function Emp_Login() {
  const {authData} = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{
    if(authData.fnm!==null){
      alert('You have been already logged in')
      navigate('/')
    }
  })
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const role = 'emp'
  const {setAuthData} = useContext(AuthContext)
  const validateForm = () => {
    return(
      email.trim() !== '' &&
      pass.trim() !== ''
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/Emp_Login",{email,pass})
    .then(res => {
      if(res.data.status==="Success"){
        const fnm=res.data.firstName;
        setAuthData({fnm,email,role})
        navigate('/')
      }
      else{
        alert(res.data)
      }
    })
  }
  return (
    <div>
      <section className="vh-100">
        <Container fluid className="h-custom my-5">
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
                  <p className="fs-1">Employee Login</p>
                </div>

                {/* Email input */}
                <Form.Group className="mb-4" controlId="form3Example3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    Don't have an account? <Link to="/Emp_Register" className="link-primary">Register</Link>
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

export default Emp_Login;






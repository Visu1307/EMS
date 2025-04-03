import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Emp_Register = () => {
  const[fnm,setFnm] = useState()
  const[lnm,setLnm] = useState()
  const[email,setEmail] = useState()
  const[phone,setPhone] = useState()
  const[dob,setDOB] = useState()
  const[gender,setGender] = useState()
  const[pass,setPass] = useState()
  const[confPass,setconfPass] = useState()
  const navigate = useNavigate()

  const validateForm = () => {
    return (
      fnm.trim() !== '' &&
      lnm.trim() !== '' &&
      email.trim() !== '' &&
      phone.trim() !== '' &&
      dob.trim() !== '' &&
      gender.trim() !=='' &&
      pass.trim() !== '' &&
      confPass.trim() !== '' &&
      pass === confPass
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!validateForm()){
      alert('Please fill out all fields and make sure passwords does match')
      return
    }

    axios
      .post('http://localhost:3001/EmpRegister',{fnm,lnm,email,phone,dob,gender,pass,confPass})
      .then((result)=>console.log('Employee Registered Successfully',result.data))
      alert('Employee Registered Successfully')
      navigate('/Login')
  }

  return (
    <Container className="my-5">
      <h2 className="text-center text-primary my-3">Employee Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" value={fnm} onChange={(e) => setFnm(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" value={lnm} onChange={(e) => setLnm(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="dateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dateOfBirth" value={dob} onChange={(e) => setDOB(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        {/* <Row> */}
          {/* <Col md={6}>
            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" name="department" value={formData.department} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="designation">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" name="designation" value={formData.designation} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="dateOfJoining">
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="employmentType">
              <Form.Label>Employment Type</Form.Label>
              <Form.Select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="salary">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="number" name="salary" value={formData.salary} onChange={handleChange} required />
        </Form.Group> */}
        <Row>
          <Col md={6}>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={pass} onChange={(e) => setPass(e.target.value)} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" value={confPass} onChange={(e) => setconfPass(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mt-3 w-100">Register</Button>
      </Form>
    </Container>
  );
};

export default Emp_Register;

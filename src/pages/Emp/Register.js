import React, { useState } from "react"; 
import { Form, Button, Container, Row, Col } from "react-bootstrap"; 
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
const Emp_Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    pass: '',
    confPass: '',
  });
  const role = 'emp';
  const navigate = useNavigate();

  const validateForm = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.dob.trim() !== '' &&
      formData.gender.trim() !== '' &&
      formData.pass.trim() !== '' &&
      formData.confPass.trim() !== '' &&
      formData.pass === formData.confPass
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Retain existing data
      [name]: value, // Update the specific field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Append the role to formData
    const updatedFormData = { ...formData, role };

    if (!validateForm()) {
      alert('Please fill out all fields and make sure passwords match');
      return;
    }

    axios
      .post('http://localhost:3001/Emp/Register', updatedFormData)
      .then((result) => {
        console.log('Employee Registered Successfully', result.data);
        alert('Employee Registered Successfully');
        navigate('/Emp/Login');
      })
      .catch((error) => {
        console.error('Error registering employee:', error);
      });
  };

  return (
    <Container className="my-5">
      <h2 className="text-center text-primary my-3">Employee Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="pass"
                value={formData.pass}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confPass"
                value={formData.confPass}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Emp_Register;

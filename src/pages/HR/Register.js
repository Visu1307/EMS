import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const HRRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    qualification: "",
    skills: [],
    resume: null,
  });

  const [error, setError] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);

  const qualifications = ["Diploma", "Bachelor's", "Master's", "Ph.D."];
  const skillsList = ["HR Management", "Recruitment", "Payroll", "Employee Relations", "Training & Development"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        skills: checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skill) => skill !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Only PDF files are allowed.");
        return;
      }
      setFormData({ ...formData, resume: file });
      setResumePreview(file.name);
      setError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (!formData.resume) {
      setError("Please upload your resume.");
      return;
    }
    setError(null);
    console.log("HR Registration Data:", formData);
    alert("HR Registration Successful! Your resume is sent for Admin Approval.");
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <Row className="w-100 d-flex align-items-center justify-content-center">
        <Col xs={12} sm={11} md={10} lg={9} xl={8} className="d-flex justify-content-center my-4">
          <div className="p-4 shadow rounded bg-white w-100" style={{ maxWidth: "1100px" }}>
            <h2 className="text-center mb-3">HR Registration</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} className="d-flex flex-column">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Qualification</Form.Label>
                    <Form.Select name="qualification" value={formData.qualification} onChange={handleChange} required>
                      <option value="">Select Qualification</option>
                      {qualifications.map((qual, index) => (
                        <option key={index} value={qual}>{qual}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-2">
                <Form.Label>Skills</Form.Label>
                <div className="d-flex flex-wrap">
                  {skillsList.map((skill, index) => (
                    <Form.Check key={index} type="checkbox" label={skill} value={skill} checked={formData.skills.includes(skill)} onChange={handleChange} className="me-2" />
                  ))}
                </div>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Upload Resume (PDF only)</Form.Label>
                <Form.Control type="file" accept=".pdf" onChange={handleFileChange} required />
                {resumePreview && <p className="mt-1 text-success">Selected File: {resumePreview}</p>}
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-2">Register</Button>
            </Form>

            <p className="mt-2 text-center">
              Already have an account? <Link to="/HR/Login">Login here</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HRRegister;

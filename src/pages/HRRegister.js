import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Plus, Trash } from "lucide-react";

const HRRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    password: "",
    confirmPassword: "",
    dob: "",
    qualifications: [{ degree: "", score: "" }],
    resume: null,
  });

  const [error, setError] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);

  const degreeOptions = ["Diploma", "Bachelor's", "Master's", "Ph.D."];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQualificationChange = (index, field, value) => {
    const updatedQualifications = [...formData.qualifications];
    updatedQualifications[index][field] = value;
    setFormData({ ...formData, qualifications: updatedQualifications });
  };

  const addQualification = () => {
    setFormData((prevData) => ({
      ...prevData,
      qualifications: [...prevData.qualifications, { degree: "", score: "" }],
    }));
  };

  const removeQualification = (index) => {
    const updatedQualifications = [...formData.qualifications];
    updatedQualifications.splice(index, 1);
    setFormData({ ...formData, qualifications: updatedQualifications });
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
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center bg-light py-5"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={11} lg={10} xl={9} xxl={8}>
          <div
            className="p-5 shadow rounded bg-white w-100"
            style={{ maxWidth: "1400px" }}
          >
            <h2 className="text-center mb-4">HR Registration</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      required
                    />
                    <Form.Text muted>10-digit number only</Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Qualifications</Form.Label>
                {formData.qualifications.map((qual, index) => (
                  <Row key={index} className="mb-2">
                    <Col md={5}>
                      <Form.Select
                        value={qual.degree}
                        onChange={(e) =>
                          handleQualificationChange(index, "degree", e.target.value)
                        }
                        required
                      >
                        <option value="">Select Degree</option>
                        {degreeOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col md={5}>
                      <Form.Control
                        type="text"
                        placeholder="Enter CGPA / Percentage"
                        value={qual.score}
                        onChange={(e) =>
                          handleQualificationChange(index, "score", e.target.value)
                        }
                        required
                      />
                    </Col>
                    <Col md={2} className="d-flex align-items-center">
                      {index === 0 ? (
                        <Button variant="outline-success" onClick={addQualification}>
                          <Plus size={18} />
                        </Button>
                      ) : (
                        <Button
                          variant="outline-danger"
                          onClick={() => removeQualification(index)}
                        >
                          <Trash size={18} />
                        </Button>
                      )}
                    </Col>
                  </Row>
                ))}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Upload Resume (PDF only)</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                />
                {resumePreview && (
                  <p className="mt-1 text-success">Selected File: {resumePreview}</p>
                )}
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Register
              </Button>
            </Form>

            <p className="mt-3 text-center">
              Already have an account? <Link to="/hr-login">Login here</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HRRegister;

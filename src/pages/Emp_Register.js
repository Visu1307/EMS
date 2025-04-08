import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";

const EmployeeRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
    dob: "",
    qualifications: [{ degree: "", score: "", scoreType: "CGPA" }],
    resume: null,
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      const file = files[0];
      if (file && file.type !== "application/pdf") {
        setError("Only PDF files are allowed for resume.");
        return;
      }
      setFormData({ ...formData, resume: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleQualificationChange = (index, field, value) => {
    const updatedQualifications = [...formData.qualifications];
    updatedQualifications[index][field] = value;
    setFormData({ ...formData, qualifications: updatedQualifications });
  };

  const addQualification = () => {
    setFormData({
      ...formData,
      qualifications: [
        ...formData.qualifications,
        { degree: "", score: "", scoreType: "CGPA" },
      ],
    });
  };

  const removeQualification = (index) => {
    const updatedQualifications = [...formData.qualifications];
    updatedQualifications.splice(index, 1);
    setFormData({ ...formData, qualifications: updatedQualifications });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      role,
      password,
      confirmPassword,
      dob,
      resume,
      qualifications,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !role ||
      !password ||
      !confirmPassword ||
      !dob ||
      !resume
    ) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);
    console.log("Employee Registration Data:", formData);
    alert("Employee Registered Successfully!");
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light py-5"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={10} lg={10} xl={9} xxl={8}>
          <Card className="shadow-lg p-4 border-0">
            <h2 className="text-center mb-4 text-primary">
              Employee Registration
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
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
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Manager">Manager</option>
                  <option value="HR">HR</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Intern">Intern</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h5 className="mt-4">Qualifications</h5>
              {formData.qualifications.map((q, idx) => (
                <Row key={idx} className="align-items-end mb-3">
                  <Col md={5}>
                    <Form.Group>
                      <Form.Label>Degree</Form.Label>
                      <Form.Control
                        type="text"
                        value={q.degree}
                        onChange={(e) =>
                          handleQualificationChange(idx, "degree", e.target.value)
                        }
                        placeholder="e.g., B.Tech, M.Sc"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={2}>
                    <Form.Group>
                      <Form.Label>Score</Form.Label>
                      <Form.Control
                        type="text"
                        value={q.score}
                        onChange={(e) =>
                          handleQualificationChange(idx, "score", e.target.value)
                        }
                        placeholder="e.g., 8.5 or 75%"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Type</Form.Label>
                      <Form.Select
                        value={q.scoreType}
                        onChange={(e) =>
                          handleQualificationChange(idx, "scoreType", e.target.value)
                        }
                        required
                      >
                        <option value="CGPA">CGPA</option>
                        <option value="Percentage">Percentage</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={2}>
                    {formData.qualifications.length > 1 && (
                      <Button
                        variant="outline-danger"
                        onClick={() => removeQualification(idx)}
                        className="mt-4"
                      >
                        <FaTrash />
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}

              <Button
                variant="outline-primary"
                type="button"
                onClick={addQualification}
                className="mb-4"
              >
                <FaPlus className="me-2" /> Add Qualification
              </Button>

              <Form.Group className="mb-4">
                <Form.Label>Upload Resume (PDF Only)</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  accept=".pdf"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 py-2">
                Register Employee
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeRegistration;

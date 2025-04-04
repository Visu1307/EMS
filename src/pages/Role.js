import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Role = () => {
  return (
    <Container className="my-5 text-center">
      <h1 className="my-5">Select Your Role</h1>
      <Row>
        <Col md={4}>
          <Link to={'/Emp/Login'}>
            <Button variant="primary" className="btn-lg">Employee</Button>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/Login">
            <Button variant="primary" className="btn-lg">HR</Button>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/Login">
            <Button variant="primary" className="btn-lg">Admin</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Role;

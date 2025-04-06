import React from 'react';
import { Container, Row, Col, Card, Button, Image, ListGroup } from 'react-bootstrap';
import { FaUsers, FaClipboardList, FaMoneyCheckAlt, FaUserTie, FaPlus, FaSignOutAlt } from 'react-icons/fa';
import './HRDashboard.css';

function HRDashboard() {
  return (
    <div className="dashboard-container">
      <Container fluid>
        {/* Welcome Banner */}
        <div className="banner text-white p-4 rounded mb-4 shadow">
          <h2 className="fw-bold">Welcome back, HR Manager!</h2>
          <p>Here's what's happening with your employees today 📊</p>
        </div>

        {/* Statistics Cards */}
        <Row className="g-4 mb-4">
          <Col md={6} lg={3}>
            <Card className="text-center p-4 shadow card-stat">
              <FaUsers className="icon mb-2" />
              <h3>120</h3>
              <p>Total Employees</p>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="text-center p-4 shadow card-stat">
              <FaClipboardList className="icon mb-2" />
              <h3>98%</h3>
              <p>Today’s Attendance</p>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="text-center p-4 shadow card-stat">
              <FaMoneyCheckAlt className="icon mb-2" />
              <h3>$88K</h3>
              <p>Monthly Payroll</p>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="text-center p-4 shadow card-stat">
              <FaUserTie className="icon mb-2" />
              <h3>12</h3>
              <p>Pending Reviews</p>
            </Card>
          </Col>
        </Row>

        {/* Main Panel */}
        <Row className="g-4">
          <Col md={8}>
            <Card className="p-4 shadow h-100">
              <h5 className="mb-3">Recent Activities</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>📝 John updated his profile</ListGroup.Item>
                <ListGroup.Item>📤 Payroll processed for March</ListGroup.Item>
                <ListGroup.Item>✅ New employee Mary added to Sales</ListGroup.Item>
                <ListGroup.Item>📊 Performance review submitted by Ramesh</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-4 shadow text-center h-100">
              <h5>Quick Actions</h5>
              <Button variant="primary" className="w-100 my-2">
                <FaPlus className="me-2" /> Add Employee
              </Button>
              <Button variant="success" className="w-100 my-2">
                📥 Generate Report
              </Button>
              <Button variant="danger" className="w-100 my-2">
                <FaSignOutAlt className="me-2" /> Logout
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HRDashboard;

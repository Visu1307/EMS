import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Image, Table, Tab, Tabs } from 'react-bootstrap';
import { FaUsers, FaChartBar, FaCogs, FaSignOutAlt, FaTasks, FaBell, FaUserTie, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

function AdminDashboard() {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: '250px' }}>
        <h4 className="text-center mb-4">Admin Panel</h4>
        <Nav className="flex-column gap-3">
          <Nav.Link href="#" className="text-white">
            <FaUsers className="me-2" /> Manage Users
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <FaTasks className="me-2" /> Tasks
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <FaChartBar className="me-2" /> Analytics
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <FaCogs className="me-2" /> Settings
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <FaCalendarAlt className="me-2" /> Calendar
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <FaFileAlt className="me-2" /> Files
          </Nav.Link>
          <div className="mt-auto pt-3 border-top">
            <Nav.Link href="#" className="text-danger">
              <FaSignOutAlt className="me-2" /> Logout
            </Nav.Link>
          </div>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light">
        {/* Navbar */}
        <Navbar bg="white" className="px-4 shadow-sm">
          <Navbar.Brand className="fw-bold">Admin Dashboard</Navbar.Brand>
          <Nav className="ms-auto d-flex align-items-center">
            <FaBell className="me-4 fs-5 text-secondary" />
            <Image
              src="https://via.placeholder.com/40"
              roundedCircle
              className="me-2"
              alt="Admin"
              style={{ width: '40px', height: '40px' }}
            />
          </Nav>
        </Navbar>

        {/* Overview Cards */}
        <Container className="mt-4">
          <h4 className="fw-bold mb-4">Dashboard Overview</h4>
          <Row className="g-4">
            <Col md={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="text-muted">Total Employees</h6>
                    <h4 className="fw-bold">120</h4>
                  </div>
                  <FaUserTie className="fs-1 text-primary" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="text-muted">Tasks Today</h6>
                    <h4 className="fw-bold">36</h4>
                  </div>
                  <FaTasks className="fs-1 text-success" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <div>
                    <h6 className="text-muted">Pending Requests</h6>
                    <h4 className="fw-bold">8</h4>
                  </div>
                  <FaChartBar className="fs-1 text-danger" />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Quick Actions */}
          <div className="mt-5">
            <h5 className="mb-3">Quick Actions</h5>
            <div className="d-flex flex-wrap gap-3">
              <Button variant="primary">Add Employee</Button>
              <Button variant="outline-dark">Generate Report</Button>
              <Button variant="outline-success">Assign Task</Button>
              <Button variant="outline-danger">Remove User</Button>
            </div>
          </div>

          {/* Tabbed Section */}
          <div className="mt-5">
            <Tabs defaultActiveKey="users" id="admin-tabs" className="mb-3">
              <Tab eventKey="users" title="Users">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Alice</td>
                      <td>alice@example.com</td>
                      <td>Manager</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Bob</td>
                      <td>bob@example.com</td>
                      <td>HR</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="calendar" title="Calendar">
                <p>Upcoming meetings and events...</p>
              </Tab>
              <Tab eventKey="files" title="Files">
                <p>File repository and uploads...</p>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AdminDashboard;
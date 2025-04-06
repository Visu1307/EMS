import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ProgressBar,
  Table,
  Dropdown,
  Badge,
} from "react-bootstrap";
import {
  FaUserCircle,
  FaCalendarCheck,
  FaTasks,
  FaClock,
  FaEllipsisV,
} from "react-icons/fa";

const EmployeeDashboard = () => {
  return (
    <Container fluid className="bg-light py-4 px-5" style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <h3 className="fw-bold">Welcome Back, Alex Johnson 👋</h3>
          <p className="text-muted">Here’s what’s happening with your work today</p>
        </Col>
      </Row>

      {/* Top Cards */}
      <Row className="g-4 mb-4">
        <Col md={3}>
          <Card className="shadow-sm border-0">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="text-muted">Attendance</h6>
                <h4 className="fw-bold">96%</h4>
              </div>
              <FaCalendarCheck size={30} className="text-success" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm border-0">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="text-muted">Hours This Week</h6>
                <h4 className="fw-bold">38h</h4>
              </div>
              <FaClock size={30} className="text-primary" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm border-0">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="text-muted">Pending Tasks</h6>
                <h4 className="fw-bold">3</h4>
              </div>
              <FaTasks size={30} className="text-warning" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm border-0">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="text-muted">Profile</h6>
                <h4 className="fw-bold">Complete</h4>
              </div>
              <FaUserCircle size={30} className="text-info" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* My Tasks Section */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Header className="bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">My Tasks</h5>
              <Dropdown>
                <Dropdown.Toggle variant="light" size="sm">
                  <FaEllipsisV />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>View All</Dropdown.Item>
                  <Dropdown.Item>Add Task</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <Table hover responsive className="mb-0">
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th>Deadline</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Design onboarding screen</td>
                    <td><Badge bg="warning">In Progress</Badge></td>
                    <td><ProgressBar now={60} label="60%" /></td>
                    <td>Apr 10, 2025</td>
                    <td><Button size="sm" variant="outline-primary">View</Button></td>
                  </tr>
                  <tr>
                    <td>Weekly Team Report</td>
                    <td><Badge bg="success">Completed</Badge></td>
                    <td><ProgressBar now={100} variant="success" label="100%" /></td>
                    <td>Apr 1, 2025</td>
                    <td><Button size="sm" variant="outline-primary">View</Button></td>
                  </tr>
                  <tr>
                    <td>Client feedback revisions</td>
                    <td><Badge bg="danger">Pending</Badge></td>
                    <td><ProgressBar now={20} variant="danger" label="20%" /></td>
                    <td>Apr 12, 2025</td>
                    <td><Button size="sm" variant="outline-primary">View</Button></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Links */}
      <Row>
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-semibold mb-3">Quick Actions</h5>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="outline-dark">Apply Leave</Button>
                <Button variant="outline-dark">Download Payslip</Button>
                <Button variant="outline-dark">Update Profile</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-semibold mb-3">Upcoming Holiday 🎉</h5>
              <p className="text-muted mb-1">Good Friday</p>
              <h6 className="fw-bold">Friday, April 18, 2025</h6>
              <p className="text-success mt-2">Enjoy your day off!</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeDashboard;

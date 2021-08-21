import React from "react";
import { useSelector } from "react-redux";
import { Row, Card, Col,Nav,Navbar,Container } from "react-bootstrap";
export const TopNav = () => {
    const product = useSelector((state)=>state.productReducers.product)
  return (
    <Card className="topnav">
      <Row>
        <Col md={10}>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </Col>
        <Col md={2} className="call">cart:{product.length}</Col>
      </Row>
    </Card>
  );
};

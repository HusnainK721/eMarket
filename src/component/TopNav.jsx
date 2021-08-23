import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Navbar, Container, Nav, Form } from "react-bootstrap";

export const TopNav = ({ setSearchTxt }) => {
  const products = useSelector((state) => state.productReducer.product);

  return (
    <Card className="topnav">
      <Row>
        <Col md={8}>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Ecart</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
        <Col md={2}>
          <Form.Control
            type="text"
            onChange={(e) => setSearchTxt(e.target.value)}
          ></Form.Control>
        </Col>
        <Col md={2} className="nav">
          <h3>Cart: {products.length}</h3>
        </Col>
      </Row>
    </Card>
  );
};

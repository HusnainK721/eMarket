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
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="kk2.png"
                  width="60"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
        <Col md={2}>
          <Form.Control
            type="text"
            onChange={(e) => setSearchTxt(e.target.value)}
            placeholder="Search Here..."
          ></Form.Control>
        </Col>
        <Col md={2} className="nav">
          <h3>Cart: {products.length}</h3>
        </Col>
      </Row>
    </Card>
  );
};

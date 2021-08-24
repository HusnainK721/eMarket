import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export const ProductsDetails = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>image</Col>
          <Col md={8}>description</Col>
        </Row>
      </Card>
    </div>
  );
};

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";
import "../component/Product.css"

export const Productlist = () => {
  return (
      <Card className="productlist">
    <Row>
      <Col>
        <ProductItem />
      </Col>
      <Col>
        <ProductItem />
      </Col>
      <Col>
        <ProductItem />
      </Col>
    </Row>
    </Card>
  );
};

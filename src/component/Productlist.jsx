import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";
import "../component/Product.css";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Productlist = () => {
  const myProducts = useSelector((state) => state.productReducers.product);
  const [prod, setProd] = useState([...myProducts]); 
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

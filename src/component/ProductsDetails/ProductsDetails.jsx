import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductsDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const myproduct = useSelector((state) => state.productReducer.product);
  const selectedId = useSelector((state) => state.productReducers.selectedId);

  useEffect(() => {
    const filteredProd = myproduct.filter((item) => item.id === selectedId);
    console.log(selectedId);
    setSelectedProduct([...filteredProd]);
  }, [selectedId]);
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>image</Col>
          <Col md={8}>description</Col>
        </Row>
        <Row>
          <Col md={1}>
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const ProductsDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState();
  const myproduct = useSelector((state) => state.productReducers.ProductItem);
  const selectedId = useSelector(
    (state) => state.productReducers.selectedprodid
  );

  useEffect(() => {
    const filteredProd = myproduct.filter((item) => item.id === selectedId);
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
            <Button>Back</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

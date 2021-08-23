import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import { useEffect } from "react";

export const ProductList = ({ searchTxt }) => {
  const myProducts = useSelector((state) => state.productReducer.product);
  const [prods, setProds] = useState([]);
  useEffect(() => {
    if (searchTxt !== "") {
      const filteredproducts = myProducts.filter((item) =>
        item.title.toUpperCase().includes(searchTxt.toUpperCase())
      );
      setProds([...filteredproducts]);
    }
  }, [searchTxt]);

  useEffect(() => {
    setProds([...myProducts]);
  }, [myProducts]);
  return (
    <Card className="productlist">
      <Row>
        {prods.map((item) => (
          <Col md={3}>
            <ProductItem item={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

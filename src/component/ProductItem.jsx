import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../component/Product.css";

const ProductItem = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card className="productitem">
        <Row>
          <Col>
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_PRODUCT",
                  data: ["soap", "tata namak"],
                })
              }
            >
              +
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() =>
                dispatch({
                  type: "REMOVE_PRODUCT",
                  data: ["soap"],
                })
              }
            >
              -
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductItem;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "./Productlist";
import { getProducts } from "../Services/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TopNav } from "./TopNav";
import "./Product.css";
import { ProductsDetails } from "./ProductsDetails/ProductsDetails";

export const Home = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const dispatch = useDispatch();
  const allProducts = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });
  };

  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <Router>
        <TopNav setSearchTxt={setSearchTxt} />

        <Switch>
          <Route path="/">
            <ProductList searchTxt={searchTxt} />
          </Route>
          <Route path="/details">
            <ProductsDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

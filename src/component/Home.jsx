import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "./Productlist";
import { getProducts } from "../Services/Products";
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
        <ProductList searchTxt={searchTxt} />
        <ProductsDetails />
      </Router>
    </div>
  );
};

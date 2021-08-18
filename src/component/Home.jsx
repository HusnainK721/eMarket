import React from "react";
import ProductItem from "./ProductItem";
import { Productlist } from "./Productlist"
import "../component/Product.css"
import { TopNav } from "./TopNav";

export const Home = () => {
  return (
    <div>
      {/* <ProductItem /> */}
      <TopNav/>
      <Productlist/>
      
    </div>
  );
};

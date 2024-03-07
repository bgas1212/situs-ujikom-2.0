import React from "react";
import ProductList from "./ProductList";
import ProductNav from "./ProductNav";
import Navbar from "../homePage/Navbar";

export default function ProductPage() {
  return (
    <div>
      <Navbar/>
      <ProductNav />
      <ProductList />
    </div>
  );
}

import React from "react";
import Products from "../components/ProductsPage/Products";
import Faced from "../components/Faced";
import productsBcg from "../images/productsBcg.png";

export default function ProductsPage() {
  return (
    <>
      <Faced img={productsBcg} />
      <Products />
    </>
  );
}

import React from "react";
import { ProductConsumer } from "../context";

export default function SingleProductPage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          const { singleProduct } = value;
          return <h2>{singleProduct.price}</h2>;
        }}
      </ProductConsumer>
    </>
  );
}

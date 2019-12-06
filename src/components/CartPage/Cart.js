import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartTotals from "./CartTotals";
import CartList from "./CartList";

export default function Cart() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center="true" />
      </div>
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
}

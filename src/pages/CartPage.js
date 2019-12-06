import React from "react";
import CartSection from "../components/CartPage/";
import Faced from "../components/Faced";
import cartBkg from "../images/cartBkg.png";
export default function CartPage() {
  return (
    <>
      <Faced img={cartBkg} />
      <CartSection />
    </>
  );
}

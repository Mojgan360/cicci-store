import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context";
export default function CartList() {
  return (
    <div className="container-fluider">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { cart, decrement, increment, removeItem } = value;

              if (cart.length === 0) {
                return (
                  <h1 className="text-center text-title my-4">
                    your cart is courentlly empty.
                  </h1>
                );
              } else {
                return (
                  <>
                    {cart.map(item => (
                      <CartItem
                        key={item.id}
                        cartItem={item}
                        increment={increment}
                        decrement={decrement}
                        removeItem={removeItem}
                      />
                    ))}
                  </>
                );
              }
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}

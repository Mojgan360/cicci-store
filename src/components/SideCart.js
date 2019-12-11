import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, handlecloseCart, cart, cartTotal } = value;
        return (
          <SideCartWrapper show={cartOpen} onClick={handlecloseCart}>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    {/* <img width="35" src={`../${item.image}`} alt="cart item" /> */}
                    <img width="35" src={item.image} alt="cart item" />
                    <div className="mt-s">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-capitalize text-title">
                        amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart total: ${cartTotal}
            </h4>
            <div className="text-center my-4">
              <Link to="/cart" className="main-link">
                cart page
              </Link>
            </div>
          </SideCartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideCartWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 102px;
  right: 0;
  bottom: 0;
  background: #ccc;
  width: 100%;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  background: var(--mainColor);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;

import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, handlecloseCart } = value;
        return (
          <SideCartWrapper show={cartOpen} onClick={handlecloseCart}>
            this is side cart ...
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
`;

import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import Faced from "../components/Faced";

export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          return (
            <Faced title="awesome gatgets" max>
              <Link to="products"> our products</Link>
            </Faced>
          );
        }}
      </ProductConsumer>
    </>
  );
}

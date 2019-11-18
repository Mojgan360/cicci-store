import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import Faced from "../components/Faced";
import Services from "../components/HomePage/Services";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          return (
            <Faced title="awesome gatgets" max>
              <Link
                className="main-link"
                style={{ margin: "2.5rem" }}
                to="products"
              >
                {" "}
                our products
              </Link>
            </Faced>
          );
        }}
      </ProductConsumer>
      <Services />
      <FeaturedProducts />
    </>
  );
}

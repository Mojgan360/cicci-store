import React from "react";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import Product from "../Product";

export default function Products() {
  return (
    <div>
      <ProductConsumer>
        {value => {
          const { filteredProducts } = value;

          return (
            <section className="py-5">
              <div className="container">
                <Title title="our products" center="true" />

                <div className="row py-5">
                  {filteredProducts.map(product => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </div>
  );
}

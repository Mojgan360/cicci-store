import React from "react";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import Product from "../Product";
import ProductsFilter from "./ProductsFilter";

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
                {/* ProductsFilter */}
                <ProductsFilter />
                {/*    total products */}
                <div className="row">
                  <div className="col-10 mx-auto">
                    <h6 className="text-title">
                      total products: {filteredProducts.length}
                    </h6>
                  </div>
                </div>
                {/* products */}

                <div className="row py-5">
                  {filteredProducts.length === 0 ? (
                    <div className="col text-center text-title ">
                      sorry, no items matched your search
                    </div>
                  ) : (
                    filteredProducts.map(product => (
                      <Product key={product.id} product={product} />
                    ))
                  )}
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </div>
  );
}

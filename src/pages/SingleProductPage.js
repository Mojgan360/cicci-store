import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import singleProductBkg from "../images/singleProductBkg.png";
import Faced from "../components/Faced";

export default function SingleProductPage() {
  return (
    <>
      <Faced img={singleProductBkg} />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;

          if (loading) {
            console.log("loading.......");
            return <h1>loading . . . </h1>;
          } else {
            const {
              company,
              id,
              title,
              price,
              description,
              image
            } = singleProduct;
            return (
              <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 max-auto col-sm-8 col-md-6 my-3">
                      <img
                        //src={`../${image}`}
                        src={image}
                        alt="single product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-10 max-auto col-sm-8 col-md-6 my-3">
                      <h5 className=" text-title mb-4">model: {title}</h5>
                      <h5 className="text-capitalize text-muted mb-4">
                        company: {company}
                      </h5>
                      <h5 className="text-capitalize text-main mb-4">
                        price: ${price}
                      </h5>
                      <p className="text-capitalixe text-title mt-3">
                        some information about product
                      </p>
                      <p>{description}</p>
                      <button
                        className="main-link"
                        style={{ margin: "0.75rem" }}
                        onClick={() => addToCart(id)}
                      >
                        add to cart
                      </button>
                      <Link
                        to="/products"
                        className="main-link"
                        style={{ margin: "0.75rem" }}
                      >
                        back to products
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
        }}
      </ProductConsumer>
    </>
  );
}

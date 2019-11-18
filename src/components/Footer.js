import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        const { socialDataIcon } = value;
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize icons">
                    copyright &copy; Cicci tech store {new Date().getFullYear()}
                    . all rights reserved{" "}
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {socialDataIcon.map(item => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkColor);
  color: var(--mainColor);

  .icons {
    color: var(--mainColor);
    font-size: 1rem;
    transition: var(--mainTranstion);
  }
  .icons:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <ProductConsumer>
      {value => {
        const { link, sidebarOpen, handleSidebar } = value;

        return (
          <SideBarWrapper show={sidebarOpen}>
            <ul>
              {link.map(item => {
                return (
                  <li key={item.id} onClick={() => handleSidebar()}>
                    <Link to={item.path} className="sidebar-link">
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideBarWrapper>
        );
      }}
    </ProductConsumer>
  );
}
const SideBarWrapper = styled.nav`
  background: var(--mainColor);
  position: fixed;
  z-index: 1;
  top: 102px;
  left: 0;
  width: 100%;
  height: 100%;
  border-right: 5px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};

  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    /* background: transparent; */
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    text-decoration: none;
    background: var(--primaryColor);
    color: var(--mainColor);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;

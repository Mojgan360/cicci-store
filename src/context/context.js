import React, { Component } from "react";
import { linkData } from "../context/linkData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 10,
    link: linkData
  };
  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  // hanldle sart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.sidebarOpen });
  };
  //close cart
  handlecloseCart = () => {
    this.setState({ cartOpen: false });
  };
  // open
  handleOpenCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          handlecloseCart: this.handlecloseCart,
          handleOpenCart: this.handleOpenCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

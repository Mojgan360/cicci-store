import React, { Component } from "react";
import { linkData } from "../context/linkData";
import { socialData } from "../context/sosialData.js";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    link: linkData,
    socialDataIcon: socialData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false
  };
  componentDidMount() {
    this.setProducts(items);
  }

  //set Products
  setProducts = products => {
    const storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;

      const product = { id, ...item.fields, image };
      return product;
    });
    //console.log(storeProducts);

    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      // cart: this.getStorageCart(),
      // singleProduct: this.getStorageProduct(),
      loading: false
    });
    // console.log(featuredProducts);
  };

  getStorageCart = () => {
    return [];
  };

  getStorageProduct = () => {};

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
  setSingleProduct = id => {
    console.log(`single product ID is: ${id}`);
  };
  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    console.log(tempCart);
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        //console.log(this.state.cart);
        // this.addTotals();
        // this.syncStorage();
        // this.openCart();
      }
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          handlecloseCart: this.handlecloseCart,
          handleOpenCart: this.handleOpenCart,
          setSingleProduct: this.setSingleProduct,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

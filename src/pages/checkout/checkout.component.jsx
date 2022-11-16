import React, { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block['header-block:last-child']">Remove</div>
      </div>
      {cartItems.map((checkoutItem) => (
        <CheckoutItem checkoutItem={checkoutItem} key={checkoutItem.id} />
      ))}
      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default Checkout;

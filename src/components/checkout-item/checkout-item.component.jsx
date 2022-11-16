import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { addItemToCart, decreaseItemQuantity, removeItem } =
    useContext(CartContext);

  const { imageUrl, name, price, quantity } = checkoutItem;

  const decreaseQuantity = () => decreaseItemQuantity(checkoutItem);
  const increaseQuantity = () => addItemToCart(checkoutItem);
  const removeCartItem = () => removeItem(checkoutItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span onClick={decreaseQuantity} className="arrow">
          &#x3c;
        </span>{" "}
        <span className="quantity">{quantity}</span>
        <span onClick={increaseQuantity} className="arrow">
          &#x3e;
        </span>
      </span>
      <span className="price">{price}</span>
      <div onClick={removeCartItem} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

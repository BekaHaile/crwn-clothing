import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { addItemToCart, decreaseItemQuantity, removeItem } =
    useContext(CartContext);

  const { imageUrl, name, price, quantity } = checkoutItem;

  const decreaseQuantityHandler = () => decreaseItemQuantity(checkoutItem);
  const increaseQuantityHandler = () => addItemToCart(checkoutItem);
  const removeCartItemHandler = () => removeItem(checkoutItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={decreaseQuantityHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={increaseQuantityHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={removeCartItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

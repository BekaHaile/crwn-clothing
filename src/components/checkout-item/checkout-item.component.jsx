import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Quantity,
  RemoveButton,
  SpanContainer,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ checkoutItem }) => {
  const { addItemToCart, decreaseItemQuantity, removeItem } =
    useContext(CartContext);

  const { imageUrl, name, price, quantity } = checkoutItem;

  const decreaseQuantityHandler = () => decreaseItemQuantity(checkoutItem);
  const increaseQuantityHandler = () => addItemToCart(checkoutItem);
  const removeCartItemHandler = () => removeItem(checkoutItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <SpanContainer>{name}</SpanContainer>
      <Quantity>
        <Arrow onClick={decreaseQuantityHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQuantityHandler}>&#10095;</Arrow>
      </Quantity>
      <SpanContainer>{price}</SpanContainer>
      <RemoveButton onClick={removeCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

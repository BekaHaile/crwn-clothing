import React from "react";

import "./cart-item.styles.jsx";
import {
  CartItemContainer,
  Img,
  ItemDetails,
  Name,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity}X{price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

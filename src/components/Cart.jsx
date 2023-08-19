import React, { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext";

function Cart() {
  const {cart, removeFromCart} = useApi();
  

  return (
    <div>
      <ul>
        {cart.map((cartProduct) => (
          <li key={cartProduct.id}>{cartProduct.title}
          <button onClick={() => removeFromCart(cartProduct.id)}>DELETE FROM CART</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default Cart;

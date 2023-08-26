import React, { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext";

function Cart() {
  const { cart, removeFromCart, removeAllFromCart, updateProductQuantity } =
    useApi();
  const [total, setTotal] = useState(0);

  const handleAdd = (productId) => {
    updateProductQuantity(productId, 1);
  };

  const handleRemove = (productId) => {
    updateProductQuantity(productId, -1);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    if(cart.length === 1){
      setTotal(0);
    }
  }

  const handleRemoveAllFromCart = () => {
    removeAllFromCart();
    setTotal(0);
  }

  useEffect(() => {
    let totalPay = 0;

    if (cart !== null) {
      cart.forEach((product) => {
        totalPay += product.price * product.quantity;

        setTotal(totalPay);
      });
    }
    else{
      return 0;
    }
  }, [cart]);

  return (
    <div className="cart w-100 h-100">
      <div className="cart-container container">
        <div className="cart-body">
          <div className="cart-products">
            {cart.map((cartProduct) => (
              <div key={cartProduct.id} className="cart-product">
                <div className="product-cart-img">
                  <img src="" alt="" />
                </div>
                <div className="product-cart-info">
                  <p>{cartProduct.title}</p>
                  <p>${cartProduct.price}</p>
                  <div className="addMore">
                    <button onClick={() => handleRemove(cartProduct.id)}>
                      -
                    </button>
                    <p>{cartProduct.quantity}</p>
                    <button onClick={() => handleAdd(cartProduct.id)}>+</button>
                  </div>
                </div>
                <button onClick={() => handleRemoveFromCart(cartProduct.id)}>
                  DELETE FROM CART
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <div className="cart-total">
              <p>TOTAL: ${total.toFixed(2)} </p>
              <p></p>
              <div className="deleteAll">
                <button onClick={() => handleRemoveAllFromCart()}>DELETE ALL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

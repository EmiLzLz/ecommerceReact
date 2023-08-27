import React, { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext";
import { Icon } from "@iconify/react";

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
    if (cart.length === 1) {
      setTotal(0);
    }
  };

  const handleRemoveAllFromCart = () => {
    removeAllFromCart();
    setTotal(0);
  };

  useEffect(() => {
    let totalPay = 0;

    if (cart !== null) {
      cart.forEach((product) => {
        totalPay += product.price * product.quantity;

        setTotal(totalPay);
      });
    } else {
      return 0;
    }
  }, [cart]);

  return (
    <div className="cart w-full">
      <div className="cart-container container mx-auto w-full h-full flex justify-end border border-red-500">
        <div className="cart-body bg-white h-4/5 p-4 rounded-lg flex flex-col items-center justify-between">
          <div className="cart-products w-full overflow-y-scroll">
            {cart.map((cartProduct) => (
              <div
                key={cartProduct.id}
                className="cart-product flex items-center justify-between py-6 px-1"
              >
                <div className="product-cart-img flex justify-center">
                  <img
                    src={cartProduct.image}
                    alt={cartProduct.title}
                    className="h-full"
                  />
                </div>
                <div className="product-cart-info px-2 w-full">
                  <p className="smallText font-normal">{cartProduct.title}</p>
                  <p className="mediumText font-medium">${cartProduct.price}</p>
                  <div className="addMore flex items-center gap-4">
                    <button onClick={() => handleRemove(cartProduct.id)}>
                      <Icon
                        icon="pepicons-pencil:line-x"
                        style={{ fontSize: "20px", color: "#610F7F" }}
                      />
                    </button>
                    <p className="smallText font-medium text-[#610F7F]">
                      {cartProduct.quantity}
                    </p>
                    <button onClick={() => handleAdd(cartProduct.id)}>
                      <Icon
                        icon="clarity:add-line"
                        style={{ fontSize: "20px", color: "#610F7F" }}
                      />
                    </button>
                  </div>
                </div>
                <button onClick={() => handleRemoveFromCart(cartProduct.id)}>
                  <Icon
                    icon="mdi:close-box"
                    style={{ fontSize: "30px", color: "#C52233" }}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions w-full flex flex-col items-center">
            <div className="cart-total w-full flex items-center justify-between py-8">
              <div className="total-number flex items-center justify-start gap-4">
                <p className="text-regular">TOTAL:</p>
                <p className="text-regular font-medium">${total.toFixed(2)} </p>
              </div>
              <div className="deleteAll">
                <button onClick={() => handleRemoveAllFromCart()}>
                  <Icon
                    icon="heroicons:trash-solid"
                    style={{ fontSize: "30px", color: "#C52233" }}
                  />
                </button>
              </div>
            </div>
            <button className="checkout-btn rounded-lg mediumText font-medium">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

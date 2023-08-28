import React, { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsInCart from "./ProductsInCart";

function Cart() {
  const { cart, removeFromCart, removeAllFromCart, updateProductQuantity } =
    useApi();
  const [total, setTotal] = useState(0);
  const notify = () => {
    if (total === 0) {
      toast.warn("There are no products to checkout.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      toast.success("Products sent it to checkout section!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

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

  const handleModalContainerClick = (e) => e.stopPropagation();

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
    <div className="cart-container container mx-auto w-full h-full flex items-center justify-end">
      <div onClick={handleModalContainerClick} className="cart-body bg-white h-4/5 p-4 rounded-lg flex flex-col items-center justify-between">
        <ProductsInCart
          cart={cart}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          handleRemoveFromCart={handleRemoveFromCart}
        />
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
          <button
            onClick={notify}
            className="checkout-btn rounded-lg mediumText font-medium"
          >
            Checkout
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Cart;

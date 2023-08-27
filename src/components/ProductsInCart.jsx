import React from "react";
import { Icon } from "@iconify/react";

function ProductsInCart({
  cart,
  handleRemove,
  handleAdd,
  handleRemoveFromCart,
}) {
  return (
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
  );
}

export default ProductsInCart;

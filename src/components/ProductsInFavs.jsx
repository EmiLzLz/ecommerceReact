import React from "react";
import { Icon } from "@iconify/react";

function ProductsInFavs({ favs, addToCart, openModal, removeAFav }) {
  return (
    <div className="fav-products w-full overflow-y-scroll">
      {favs.map((favProduct) => (
        <div
          key={favProduct.id}
          className="fav-product flex items-center justify-between py-6 px-1"
        >
          <div className="product-fav-img flex justify-center">
            <img
              src={favProduct.image}
              alt={favProduct.title}
              className="h-full"
            />
          </div>
          <div className="product-fav-info px-2 w-full">
            <p className="smallText font-normal">{favProduct.title}</p>
            <p className="mediumText font-medium">${favProduct.price}</p>
            <div className="add-view flex items-center gap-4 py-3">
              <button onClick={() => openModal(favProduct)}>
                <Icon
                  icon="carbon:view-filled"
                  style={{ fontSize: "30px", color: "#610F7F" }}
                />
              </button>
              <button onClick={() => addToCart(favProduct)}>
                <Icon
                  icon="icomoon-free:cart"
                  style={{ fontSize: "30px", color: "#610F7F" }}
                />
              </button>
            </div>
          </div>
          <button onClick={() => removeAFav(favProduct.id)}>
            <Icon
              icon="icon-park-outline:unlike"
              style={{ fontSize: "30px", color: "#E06C9F" }}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductsInFavs;

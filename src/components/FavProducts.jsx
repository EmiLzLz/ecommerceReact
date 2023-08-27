import React from "react";
import { useApi } from "../context/ApiContext";
import { Icon } from "@iconify/react";

function FavProducts() {
  const { favs, removeAllFavs, removeAFav, addToCart, handleViewClick } = useApi();
  return (
    <div className="favs w-full">
      <div className="favs-container container mx-auto w-full h-full flex justify-end border border-red-500">
        <div className="fav-body bg-white h-4/5 p-4 rounded-lg flex flex-col items-center justify-between">
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
                    <button onClick={() => handleViewClick(favProduct)}>
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

          <div className="fav-actions w-full flex flex-col items-center gap-4">
            <button
              className="unmark-btn rounded-lg mediumText font-medium"
              onClick={() => removeAllFavs()}
            >
              Unmark all
            </button>
            <button className="addAll-btn rounded-lg mediumText font-medium">
              Add all to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavProducts;

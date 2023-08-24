import React from "react";
import { useApi } from "../context/ApiContext";

function FavProducts() {
  const { favs, removeAllFavs, removeAFav } = useApi();
  return (
    <div className="favs">
      <div className="favs-container">
        <div className="fav-body">
          <div className="fav-products">
            {favs.map((favProduct) => (
              <div key={favProduct.id} className="fav-product">
                <div className="product-fav-img">
                  <img src="" alt="" />
                </div>
                <div className="product-fav-info">
                  <p>{favProduct.title}</p>
                  <p>${favProduct.price}</p>
                  <div className="add-view">
                    <button>VIEW</button>
                    <button>ADD TO CART</button>
                  </div>
                </div>
                <button onClick={() => removeAFav(favProduct.id)}>
                  REMOVE FROM FAVS
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button onClick={() => removeAllFavs()}>UNMARK ALL</button>
            <button>ADD ALL TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavProducts;

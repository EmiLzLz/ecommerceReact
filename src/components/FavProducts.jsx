import React from "react";

function FavProducts() {
  return (
    <div className="favs">
      <div className="favs-container">
        <div className="fav-body">
          <div className="fav-products">
            {cart.map((cartProduct) => (
              <div key={cartProduct.id} className="fav-product">
                <div className="product-fav-img">
                  <img src="" alt="" />
                </div>
                <div className="product-fav-info">
                  <p>{cartProduct.title}</p>
                  <p>${cartProduct.price}</p>
                  <div className="add-view">
                    <button>VIEW</button>
                    <button>ADD TO CART</button>
                  </div>
                </div>
                <button>
                  REMOVE FROM FAVS
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button>UNMARK ALL</button>
            <button>ADD ALL TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavProducts;

import React from "react";

function ProductCard({ product, addToCart, addToFavs, handleViewClick }) {
  return (
    <>
      <div className="product-card border border-red-600 rounded-lg overflow-hidden">
        <div className="card-head">
          <div className="product-img">
            <img src="" alt="" />
          </div>
          <button
            className={`${product.isInFavs ? "fav-btn-active" : "fav-btn"}`}
            onClick={() => addToFavs(product)}
          >
            FAV
          </button>
        </div>
        <div className="card-body p-2">
          <div className="product-description">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis">
              {product.title}
            </p>
            <h3>${product.price}</h3>
            <div className="actions">
              <button onClick={() => handleViewClick(product)}>VIEW</button>
              <button onClick={() => addToCart(product)}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

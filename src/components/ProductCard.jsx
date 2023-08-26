import React from "react";
import { Icon } from '@iconify/react';

function ProductCard({ product, addToCart, addToFavs, handleViewClick }) {
  return (
    <>
      <div className="product-card w-full border border-red-600 rounded-lg overflow-hidden">
        <div className="card-head relative">
          <div className="product-img w-full py-1 flex items-center justify-center">
            <img src={product.image} alt=""  className=" h-full"/>
          </div>
          <button
            className={`${product.isInFavs ? "fav-btn-active" : "fav-btn"} absolute top-0 right-0`}
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

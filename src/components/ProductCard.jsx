import React from "react";
import { Icon } from '@iconify/react';

function ProductCard({ product, addToCart, addToFavs, handleViewClick }) {
  return (
    <>
      <div className="product-card w-full border border-red-600 rounded-lg overflow-hidden bg-white">
        <div className="card-head relative">
          <div className="product-img w-full py-1 flex items-center justify-center">
            <img src={product.image} alt=""  className=" h-full"/>
          </div>
          <button
            className={`${product.isInFavs ? "fav-btn-active" : "fav-btn"} absolute top-0 right-0`}
            onClick={() => addToFavs(product)}
          >
            <Icon icon="material-symbols:favorite" style={{ fontSize: "30px" }} />
          </button>
        </div>
        <div className="card-body p-2">
          <div className="product-description">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis mediumText">
              {product.title}
            </p>
            <h3 className="mediumText font-medium">${product.price}</h3>
            <div className="actions pt-10 w-full flex items-center justify-start gap-8">
              <button onClick={() => handleViewClick(product)}><Icon icon="carbon:view-filled" style={{ fontSize: "30px", color: "#610F7F" }} /></button>
              <button onClick={() => addToCart(product)}><Icon icon="icomoon-free:cart" style={{ fontSize: "30px", color: "#610F7F" }} /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

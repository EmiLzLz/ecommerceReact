import React from "react";
import { Icon } from "@iconify/react";
import { useApi } from "../context/ApiContext";

function ProductView({ closeModal, product }) {
  const { addToFavs, addToCart } = useApi();
  const { title, description, image } = product;
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <div
      className="product-view-card rounded-lg bg-white flex flex-col items-center justify-start"
      onClick={handleModalContainerClick}
    >
      <div className="close-card w-full py-4 px-4 text-right">
        <button onClick={closeModal} className="close-view">
          <Icon
            icon="mdi:close-box"
            style={{ fontSize: "40px", color: "#C52233" }}
          />
        </button>
      </div>
      <div className="product-view-card-content w-full p-4 flex items-center justify-center">
        <div className="product-view-img w-full h-96 flex items-center justify-center">
          <img src={image} alt={title} className="h-full" />
        </div>
        <div className="product-info w-full h-full">
          <div className="description">
            <h3 className="subtitle">{title}</h3>
            <p className="product-description text-regular font-normal">
              {description}
            </p>
            <div className="product-rate flex w-full items-center justify-start py-6 gap-4">
              <p className="text-regular font-normal">Rate: </p>
              <p className="text-regular font-medium">{product.rating.rate}</p>
            </div>
          </div>
          <div className="actions flex items-center gap-8">
            <button onClick={() => addToFavs(product)}>
              <Icon
                icon="material-symbols:favorite"
                style={{ fontSize: "30px", color: "#610F7F" }}
              />
            </button>
            <button onClick={() => addToCart(product)} >
              <Icon
                icon="icomoon-free:cart"
                style={{ fontSize: "30px", color: "#610F7F" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;

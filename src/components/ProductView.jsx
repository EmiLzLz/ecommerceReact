import React from "react";
import { Icon } from '@iconify/react';

function ProductView({ closeModal, product }) {
  const {title, description, image} = product
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <div className="product-view-card rounded-lg bg-white flex flex-col items-center justify-start" onClick={handleModalContainerClick}>
      <div className="close-card py-8">
        <button onClick={closeModal} className="close-view">
          CLOSE CARD
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
          <div className="actions">
            <button>ADD TO FAVS</button>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;

import React from "react";

function ProductView({ closeModal, product }) {
  const {title, description, price, } = product
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <div className="product-view-card" onClick={handleModalContainerClick}>
      <div className="close-card">
        <button onClick={closeModal} className="close-view">
          CLOSE CARD
        </button>
      </div>
      <div className="product-view-card-content">
        <div className="product-img">
          <img src="" alt="" />
        </div>
        <div className="product-info">
          <div className="description">
            <h3>{title}</h3>
            <p>
              {description}
            </p>
            <div className="product-rate">
              <p>Rate: </p>
              <p>10</p>
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

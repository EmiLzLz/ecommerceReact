import React, { useState } from "react";
import { useApi } from "../context/ApiContext";
import Modal from "./Modal";
import ProductView from "./ProductView";
import { useModal } from "../hooks/useModal";

function ProductSlider({ category }) {
  const { getProductsByCategory, addToCart, addToFavs } = useApi();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = getProductsByCategory(category);

  const handleViewClick = (product) => {
    openModal();
    setSelectedProduct(product);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-card">
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
          <div className="card-body">
            <div className="product-description">
              <p>{product.title}</p>
              <h3>${product.price}</h3>
              <div className="actions">
                <button onClick={() => handleViewClick(product)}>VIEW</button>
                <button onClick={() => addToCart(product)}>ADD TO CART</button>
              </div>
            </div>
          </div>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            {selectedProduct && (
              <ProductView closeModal={closeModal} product={selectedProduct} />
            )}
          </Modal>
        </div>
      ))}
    </div>
  );
}

export default ProductSlider;

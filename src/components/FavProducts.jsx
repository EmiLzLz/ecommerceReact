import React from "react";
import { useApi } from "../context/ApiContext";
import { ToastContainer } from "react-toastify";
import Modal from "./Modal";
import ProductView from "./ProductView";
import ProductsInFavs from "./ProductsInFavs";

function FavProducts() {
  const {
    favs,
    removeAllFavs,
    removeAFav,
    addToCart,
    addAllFavsToCart,
    openModal,
    closeModal,
    isOpen,
    selectedProduct,
  } = useApi();
  return (
    <div className="favs w-full">
      <div className="favs-container container mx-auto w-full h-full flex justify-end border border-red-500">
        <div className="fav-body bg-white h-4/5 p-4 rounded-lg flex flex-col items-center justify-between">
          <ProductsInFavs
            favs={favs}
            addToCart={addToCart}
            removeAFav={removeAFav}
            openModal={openModal}
          />
          <div className="fav-actions w-full flex flex-col items-center gap-4">
            <button
              className="unmark-btn rounded-lg mediumText font-medium"
              onClick={() => removeAllFavs()}
            >
              Unmark all
            </button>
            <button
              onClick={() => addAllFavsToCart()}
              className="addAll-btn rounded-lg mediumText font-medium"
            >
              Add all to cart
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {selectedProduct && (
          <ProductView closeModal={closeModal} product={selectedProduct} />
        )}
      </Modal>
    </div>
  );
}

export default FavProducts;

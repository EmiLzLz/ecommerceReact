import React, { useState } from "react";
import { useApi } from "../context/ApiContext";
import Modal from "./Modal";
import ProductView from "./ProductView";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import { ToastContainer } from "react-toastify";

function ProductSlider({ category }) {
  const {
    getProductsByCategory,
    addToCart,
    addToFavs,
    selectedProduct,
    openModal,
    closeModal,
    isOpen,
  } = useApi();
  const products = getProductsByCategory(category);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="products-slider">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        showDots={true}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            openModal={openModal}
            addToCart={addToCart}
            addToFavs={addToFavs}
          />
          
        ))}
       
      </Carousel>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {selectedProduct && (
          <ProductView closeModal={closeModal} product={selectedProduct} />
        )}
      </Modal>
      
    </div>
  );
}

export default ProductSlider;

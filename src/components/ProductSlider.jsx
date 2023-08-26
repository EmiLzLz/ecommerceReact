import React, { useState } from "react";
import { useApi } from "../context/ApiContext";
import Modal from "./Modal";
import ProductView from "./ProductView";
import { useModal } from "../hooks/useModal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

function ProductSlider({ category }) {
  const { getProductsByCategory, addToCart, addToFavs } = useApi();
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = getProductsByCategory(category);

  const handleViewClick = (product) => {
    openModal();
    setSelectedProduct(product);
  };

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
            handleViewClick={handleViewClick}
            addToCart={addToCart}
            addToFavs={addToFavs}
          />
        ))}
      </Carousel>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        {selectedProduct && (
          <ProductView closeModal={closeModal} product={selectedProduct} />
        )}
      </Modal>
    </div>
  );
}

export default ProductSlider;

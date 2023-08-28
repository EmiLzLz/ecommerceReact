import React, { useState } from "react";
import { useApi } from "../context/ApiContext";
import Modal from "./Modal";
import ProductView from "./ProductView";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

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
  //max: 3000, min: 1300- max: 1300, min: 900 - max: 900, min: 600 - max: 600, min: 320

  return (
    <div className="products-slider">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-padding-bottom"
        dotListClass=""
        draggable
        focusOnSelect
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 500,
              min: 320,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 500,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
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

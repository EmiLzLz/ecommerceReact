import React from "react";
import ProductSlider from "../components/ProductSlider";

function Home() {
  return (
    <div className="home">
      <div className="banner w-100 border border-red-600">
        <div className="banner-description p-6">
          <h2 className="title-2 text-white">BANNER TITLE</h2>
          <p className="text-regular font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            libero assumenda necessitatibus...
          </p>
          <a
            href="javascript:void(0)"
            className="smallText font-medium text-white"
          >
            View more
          </a>
        </div>
      </div>
      <main className="marketplace-products w-100">
        <div className="products-categories container mx-auto">
          <h1>WE HAVE WHAT YOUR ARE LOOKING FOR</h1>
          <div className="category-1 w-100 flex items-center justify-between">
            <div className="category-name-img w-56">
              <img src="" alt="" />
              <h4>ELECTRONICS</h4>
            </div>
            <ProductSlider category={"electronics"} />
          </div>
          <div className="category-2 w-100 flex items-center justify-between">
            <div className="category-name-img w-56">
              <img src="" alt="" />
              <h4>JEWELERY</h4>
            </div>
            <ProductSlider category={"jewelery"} />
          </div>
          <div className="category-3 w-100 flex items-center justify-between">
            <div className="category-name-img w-60">
              <img src="" alt="" />
              <h4>MENS</h4>
            </div>
            <ProductSlider category={"men's clothing"} />
          </div>
          <div className="category-4 w-100 flex items-center justify-between">
            <div className="category-name-img w-60">
              <img src="" alt="" />
              <h4>WOMENS</h4>
            </div>
            <ProductSlider category={"women's clothing"} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

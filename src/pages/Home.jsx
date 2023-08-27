import React from "react";
import ProductSlider from "../components/ProductSlider";
import categoryImg1 from "../assets/images/electronics.jpg";
import categoryImg2 from "../assets/images/jewelry.jpg";
import categoryImg3 from "../assets/images/mens.jpg";
import categoryImg4 from "../assets/images/womens.jpg";

function Home() {
  return (
    <div className="home">
      <div className="banner w-100 border border-red-600">
        <div className="banner-description p-6">
          <h2 className="title-2 text-white">BANNER TITLE</h2>
          <p className="text-regular font-medium text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            libero assumenda necessitatibus...
          </p>
          <a
            href="javascript:void(0)"
            className="text-regular font-medium"
          >
            View more
          </a>
        </div>
      </div>
      <main className="marketplace-products w-100 py-24 bg-[#F5F3F5]">
        <div className="products-categories container mx-auto">
          <h1 className="title-1">WE HAVE WHAT YOUR ARE LOOKING FOR</h1>
          <div className="category-1 w-100 flex items-center justify-between relative">
            <div className="category-name-img w-60 flex flex-col items-center">
              <img src={categoryImg1} alt="electronics" className="category-img"  />
              <h4 className="text-regular font-medium py-2 px-6 rounded-full -mt-4 bg-white">ELECTRONICS</h4>
            </div>
            <ProductSlider category={"electronics"} />
          </div>
          <div className="category-2 w-100 flex items-center justify-between relative">
            <div className="category-name-img w-60 flex flex-col items-center">
              <img src={categoryImg2} alt="jewelry" className="category-img"  />
              <h4 className="text-regular font-medium py-2 px-6 rounded-full -mt-4 bg-white">JEWELRY</h4>
            </div>
            <ProductSlider category={"jewelery"} />
          </div>
          <div className="category-3 w-100 flex items-center justify-between relative">
            <div className="category-name-img w-60 flex flex-col items-center">
              <img src={categoryImg3} alt="mens clothes" className="category-img" />
              <h4 className="text-regular font-medium py-2 px-6 rounded-full -mt-4 bg-white">MENS</h4>
            </div>
            <ProductSlider category={"men's clothing"} />
          </div>
          <div className="category-4 w-100 flex items-center justify-between relative">
            <div className="category-name-img w-60 flex flex-col items-center">
              <img src={categoryImg4} alt="womens clothes" className="category-img" />
              <h4 className="text-regular font-medium py-2 px-6 rounded-full -mt-4 bg-white">WOMENS</h4>
            </div>
            <ProductSlider category={"women's clothing"} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

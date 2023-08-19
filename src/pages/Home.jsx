import React from "react";
import ProductSlider from "../components/ProductSlider";
import Cart from "../components/Cart";

function Home() {
  return (
    <div>
      <div className="banner"></div>
      <main>
        <div className="products-categoriess">
          <div className="category-1">
            <div className="category-name-img">
              <img src="" alt="" />
              <h4>Category name</h4>
            </div>
            <ProductSlider category={"electronics"} />
          </div>
          <div className="category-2">
            <div className="category-name-img">
              <img src="" alt="" />
              <h4>Category name</h4>
            </div>
            <ProductSlider category={"jewelery"} />
          </div>
          <div className="category-3">
            <div className="category-name-img">
              <img src="" alt="" />
              <h4>Category name</h4>
            </div>
            <ProductSlider category={"men's clothing"} />
          </div>
          <div className="category-4">
            <div className="category-name-img">
              <img src="" alt="" />
              <h4>Category name</h4>
            </div>
            <ProductSlider category={"women's clothing"} />
          </div>
        </div>
      </main>
      <h2>CART PRODUCTS</h2>
      <Cart/>
    </div>
  );
}

export default Home;

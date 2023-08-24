import React from "react";
import { useApi } from "../context/ApiContext";

function ProductSlider({ category }) {
  const { getProductsByCategory, addToCart } = useApi();

  const products = getProductsByCategory(category);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="card-head">
            <div className="product-img">
              <img src="" alt="" />
            </div>
            <button>FAV</button>
          </div>
          <div className="card-body">
            <div className="product-description">
              <p>{product.title}</p>
              <h3>${product.price}</h3>
              <div className="actions">
                <button>VIEW</button>
                <button onClick={() => addToCart(product)}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSlider;

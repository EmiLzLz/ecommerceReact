import React from "react";

function ProductView() {
  return (
    <div className="product-view">
      <div className="product-view-container">
        <div className="product-view-card">
          <div className="close-card">
            <button>CLOSE CARD</button>
          </div>
          <div className="product-view-card-content">
            <div className="product-img">
                <img src="" alt="" />
            </div>
            <div className="product-info">
                <div className="description">
                    <h3>PRODUCT NAME</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam architecto nulla nesciunt, ex nihil doloribus inventore nostrum, quos consequatur reiciendis reprehenderit esse quaerat, nobis quia aut tenetur assumenda maiores molestiae.</p>
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
      </div>
    </div>
  );
}

export default ProductView;

import React, { useState } from "react";
import Cart from "./Cart";
import FavProducts from "./FavProducts";

function Menu() {
  const [showCart, setShowCart] = useState(false);
  const [showFavs, setShowFavs] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleFavs = () => {
    setShowFavs(!showFavs);
  };

  return (
    <nav>
      <div className="app-sections">
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>

      <div className="app-actions">
        <button onClick={toggleCart}>YOUR CART</button>
        <button onClick={toggleFavs}>YOUR FAVS</button>
        <a href="#">Your account</a>
      </div>

      { showCart && <Cart /> }
      { showFavs && <FavProducts /> }
    </nav>
  );
}

export default Menu;

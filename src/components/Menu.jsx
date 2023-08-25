import React, { useState } from "react";
import Cart from "./Cart";
import FavProducts from "./FavProducts";
import { Link } from "react-router-dom";

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
        <Link to={"/"} >Home</Link>
        <Link to={"/about"} >About</Link>
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

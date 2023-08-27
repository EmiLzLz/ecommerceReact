import React, { useState } from "react";
import Cart from "./Cart";
import FavProducts from "./FavProducts";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

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
    <nav className="sections-actions flex items-center justify-center gap-16">
      <div className="app-sections flex items-center gap-6">
        <Link to={"/"} className="text-regular" >Home</Link>
        <Link to={"/about"} className="text-regular" >About</Link>
      </div>

      <div className="app-actions w-32 py-2 bg-[#0D0A0B] flex items-center justify-around rounded-full">
        <button onClick={toggleCart}><Icon icon="icomoon-free:cart" style={{ fontSize: "30px", color: "white" }} /></button>
        <button onClick={toggleFavs}><Icon icon="material-symbols:favorite" style={{ fontSize: "30px", color: "white" }} /></button>
      </div>

      { showCart && <Cart /> }
      { showFavs && <FavProducts /> }
    </nav>
  );
}

export default Menu;

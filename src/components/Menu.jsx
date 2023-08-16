import React from "react";

function Menu() {
  return (
    <nav>
      <div className="app-sections">
        <a href="#">Home</a>
        <a href="#">About</a>
      </div>

      <div className="app-actions">
        <a href="#">Cart</a>
        <a href="#">Your favs</a>
        <a href="#">Your account</a>
      </div>
    </nav>
  );
}

export default Menu;

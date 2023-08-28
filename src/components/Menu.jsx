import React, { useState } from "react";
import Cart from "./Cart";
import FavProducts from "./FavProducts";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Modal from "./Modal";

function Menu() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isFavsModalOpen, setIsFavsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const openFavsModal = () => {
    setIsFavsModalOpen(true);
  };

  const closeFavsModal = () => {
    setIsFavsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`menu w-auto flex items-center justify-center gap-16 ${
        isMobileMenuOpen ? "mobile-open" : ""
      }`}
    >
      <button className="mobile-button hidden" onClick={toggleMobileMenu}>
        <Icon
          icon="ic:round-menu-open"
          style={{ fontSize: "30px", color: "#610f7f" }}
        />
      </button>
      <div
        className={`menu-options flex items-center justify-center gap-8 ${
          isMobileMenuOpen ? "mobile-open" : ""
        }`}
      >
        <div className="app-sections flex items-center gap-6">
          <Link to={"/"} className="text-regular">
            Home
          </Link>
          <Link to={"/about"} className="text-regular">
            About
          </Link>
        </div>
        <div className="app-actions w-32 py-2 bg-[#0D0A0B] flex items-center justify-around rounded-full">
          <button onClick={() => openCartModal()}>
            <Icon
              icon="icomoon-free:cart"
              style={{ fontSize: "30px", color: "white" }}
            />
          </button>
          <button onClick={() => openFavsModal()}>
            <Icon
              icon="material-symbols:favorite"
              style={{ fontSize: "30px", color: "white" }}
            />
          </button>
        </div>
      </div>

      <Modal isOpen={isCartModalOpen} closeModal={closeCartModal}>
        <Cart />
      </Modal>

      <Modal isOpen={isFavsModalOpen} closeModal={closeFavsModal}>
        <FavProducts />
      </Modal>
    </nav>
  );
}

export default Menu;

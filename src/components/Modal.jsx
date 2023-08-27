import React from "react";

function Modal({ children, closeModal, isOpen }) {
  return (
    <article className={`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
      {children}
    </article>
  );
}

export default Modal;

import React from "react";

function Modal({ children, isOpen, closeModal }) {
  return (
    <article className={`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
      {children}
    </article>
  );
}

export default Modal;

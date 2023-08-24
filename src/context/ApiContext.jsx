import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

function ApiProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const initialState = [];

  useEffect(() => {
    try {
      async function getData() {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      }

      getData();
    } catch (err) {
      console.log("Error in api fetch", err);
    }
  }, []);

  useEffect(() => {
    // Initialize cart state from local storage
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartProducts);
  }, []); // Only run this effect on component mount

  // get products by category
  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const productIndex = cart.findIndex((p) => p.id === product.id);

    if (productIndex === -1) {
      // Product is not in the cart, add it with quantity 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Product is already in the cart, increment its quantity
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (productId) => {
    //remove the element
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);

    //save the updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return { ...cart, updatedCart };
  };

  const removeAllFromCart = () => {
    setCart(initialState);
    localStorage.setItem("cart", JSON.stringify(initialState));
    return cart;
  };

  const updateProductQuantity = (productId, quantityChange) => {
    const updatedCart = cart.map((cartProduct) => {
      if (cartProduct.id === productId) {
        const newQuantity = cartProduct.quantity + quantityChange;
        if (newQuantity >= 1 && newQuantity <= cartProduct.rating.count) {
          return { ...cartProduct, quantity: newQuantity };
        }
        console.log(cartProduct.quantity);
      }
      return cartProduct;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // expose function
  const contextValue = {
    getProductsByCategory,
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    updateProductQuantity,
  };

  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
}

function useApi() {
  return useContext(ApiContext);
}

export { ApiProvider, useApi };

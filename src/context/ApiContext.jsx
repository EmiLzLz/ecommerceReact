import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

function ApiProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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
    if(cart.some((cartProduct) => cartProduct.id === product.id)){
      return;
    }

    // add product to the cart state
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    //save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    //remove the element
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);

    //save the updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return{...cart, updatedCart}
  };

  // expose function
  const contextValue = {
    getProductsByCategory,
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
}

function useApi() {
  return useContext(ApiContext);
}

export { ApiProvider, useApi };

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchProducsFromApi } from "../helpers/fetchApi";
import { initializeCartProducts, initializeFavProducts } from "../helpers/localStorageFunctions"

const ApiContext = createContext();

function ApiProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // to cart
  const [favs, setFavs] = useState([]); // to favs
  const [selectedProduct, setSelectedProduct] = useState(null); // to modal
  const [isOpen, setIsOpen] = useState(false); // to modal
  const initialState = [];

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducsFromApi();
        setProducts(data);
      } catch (err) {
        console.log("Error in component...", err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    // Initialize cart state from local storage
    initializeCartProducts(setCart);
  }, []); // Only run this effect on component mount

  useEffect(() => {
    // Initialize cart state from local storage
    initializeFavProducts(setFavs);
  }, []); // Only run this effect on component mount

  // get products by category
  const getProductsByCategory = (category) => {
    /* map products and add the isInFavs property.
    favs.some check if the product is in the favs array, to change isInFavs to true.
    */
    return products
      .map((product) => ({
        ...product,
        isInFavs: favs.some((fav) => fav.id === product.id),
      }))
      .filter((product) => product.category === category);
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

  const addToFavs = (product) => {
    // Check if the product is already in favorites
    const isAlreadyInFavs = favs.some((p) => p.id === product.id);

    if (!isAlreadyInFavs) {
      // Product is not in favorites, add it
      const updatedFavs = [...favs, { ...product }];
      setFavs(updatedFavs);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
    }
  };

  const addAllFavsToCart = () => {
    // Check if there are any products in favs
    if (favs.length === 0) {
      toast.warn("No favorite products to add to the cart.", {
        // Toast configuration for the error message
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return; // Exit the function early if there are no favorite products
    } else {
      // copy of current cart
      const updatedCart = [...cart];

      // iterate productcs
      favs.forEach((product) => {
        // check if the product is already in the cart
        const productIndex = updatedCart.findIndex((p) => p.id === product.id);

        if (productIndex === -1) {
          // product not in cart
          updatedCart.push({ ...product, quantity: 1 });
        } else {
          // update quantity of product in cart
          updatedCart[productIndex].quantity += 1;
        }
      });

      // update cart state
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // clear favs array and localStorage
      setFavs([]);
      localStorage.removeItem("favs");

      toast.success("All products send it to cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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

  const removeAFav = (productId) => {
    const updatedFavs = favs.filter((product) => product.id !== productId);
    setFavs(updatedFavs);

    localStorage.setItem("favs", JSON.stringify(updatedFavs));

    return { ...favs, updatedFavs };
  };

  const removeAllFromCart = () => {
    setCart(initialState);
    localStorage.setItem("cart", JSON.stringify(initialState));
    return cart;
  };

  const removeAllFavs = () => {
    setFavs(initialState);
    localStorage.setItem("favs", JSON.stringify(initialState));
    return favs;
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

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsOpen(false);
  };

  // expose function
  const contextValue = {
    getProductsByCategory,
    cart,
    favs,
    addToCart,
    addToFavs,
    removeFromCart,
    removeAFav,
    removeAllFromCart,
    removeAllFavs,
    updateProductQuantity,
    selectedProduct,
    openModal,
    closeModal,
    isOpen,
    addAllFavsToCart,
  };

  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
}

function useApi() {
  return useContext(ApiContext);
}

export { ApiProvider, useApi };

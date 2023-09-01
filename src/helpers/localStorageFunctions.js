export function initializeCartProducts(setCart) {
  const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  setCart(cartProducts);
}

export function initializeFavProducts(setFavs) {
  const favProducts = JSON.parse(localStorage.getItem("favs")) || [];
  setFavs(favProducts);
}

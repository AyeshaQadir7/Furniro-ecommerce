import { Product } from "../types/product";

export const addToCart = (product: Product) => {
  const cart: Product[] =
    JSON.parse(localStorage.getItem("cart") || "[]") || [];

  const existingProduct = cart.find((item) => item._id === product._id);

  if (existingProduct) {
    if (existingProduct.inventory !== undefined) {
      existingProduct.inventory += 1;
    }
  } else {
    cart.push({ ...product, inventory: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
  const cart: Product[] =
    JSON.parse(localStorage.getItem("cart") || "[]") || [];

  const updatedCart = cart.filter((product) => product._id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] =
    JSON.parse(localStorage.getItem("cart") || "[]") || [];

  const product = cart.find((item) => item._id === productId);

  if (product) {
    product.inventory = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]") || [];
};

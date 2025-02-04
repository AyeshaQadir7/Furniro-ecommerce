"use client";

import React from "react";
import { Product } from "@/app/types/product";
import Swal from "sweetalert2";
import { addToCart as saveToCart } from "@/app/action/action"; // Make sure this function exists

interface AddToCartProps {
  product: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();

    // Add product to local storage or global state
    saveToCart(product);

    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.title} added to cart!`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <button
      className=" text-PrimaryColor border-2 px-6 py-2 font-semibold hover:bg-PrimaryColor hover:text-white transition-all duration-300"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;

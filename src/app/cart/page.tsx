"use client";

import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
import Image from "next/image";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../action/action";
import Swal from "sweetalert2";
import HeroSection from "@/components/Cart/HeroSection";
import Link from "next/link";
import { ChevronRight, Trash } from "lucide-react";
import IconsSection from "@/components/IconSection/IconSection";
import { useRouter } from "next/navigation";

function CartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory !== undefined) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory !== undefined && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.inventory ?? 0),
      0
    );
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <>
      <HeroSection />

      {/* Banner */}
      <div className="bg-PrimaryColor  flex items-center gap-6 px-8 py-6">
        <div className="flex gap-4 ">
          <Link href={"/"} className="opacity-60 ">
            <h3>Home</h3>
          </Link>
          <ChevronRight strokeWidth={1.5} />
          <Link href={"/cart"} className="opacity-60">
            <h3>Cart</h3>
          </Link>
          <ChevronRight strokeWidth={1.5} />
        </div>
        <div className="text-4xl font-extralight opacity-80 ">|</div>
        <div>Shopping Cart</div>
      </div>

      {/* Cart */}
      <div className="container mx-auto p-6 max-w-4xl my-6">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white p-2 border-b-2 border-gray-200"
              >
                <div className="flex items-center space-x-4 w-2/4">
                  {item.productImage && (
                    <Image
                      src={item.productImage}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded-md border border-gray-300"
                    />
                  )}

                  <div>
                    <h3 className="font-semibold text-md text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity selector */}
                <div className="flex items-center align-middle space-x-2">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="font-semibold text-gray-900">
                    {item.inventory}
                  </span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                {/* Trash button  */}
                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <Trash color="#c21919" strokeWidth={1.25} />
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center  mt-6 p-4 rounded-lg shadow-sm border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Total: ${calculateTotal().toFixed(2)}
              </h3>
              <button
                onClick={handleProceed}
                className="px-6 py-3 bg-PrimaryColor text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Icons Section */}
      <IconsSection />
    </>
  );
}

export default CartPage;

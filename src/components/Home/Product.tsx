"use client";

import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "@/app/types/product";
import { addToCart } from "@/app/action/action";
import Swal from "sweetalert2";

const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc)[0...8] { 
          _id, 
          title, 
          price, 
          description, 
          "productImage": productImage.asset->url, 
          dicountPercentage,
          "slug": slug.current,
          isNew 
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.title} added to cart!`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  return (
    <section className="my-28">
      <h2 className="flex justify-center mt-14 mb-8 text-gray-900 text-4xl font-semibold">
        Our Products
      </h2>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 px-4 sm:px-16">
          {products.map((product) => (
            <div
              key={product._id}
              className="relative group w-full max-w-sm justify-center overflow-hidden bg-zinc-100 rounded-md transition-all duration-300 ease-in-out md:mb-6 mb-4"
            >
              <Link href={`/product/${product.slug.current}`}>
                {/* Product Image */}
                <div className="relative w-full h-68 cursor-pointer">
                  {/* Conditional Discount Tag */}
                  {product.dicountPercentage && (
                    <div className="absolute top-4 right-4 bg-rose-500 leading-tight text-white text-sm font-normal py-[14px] px-[10px] rounded-full">
                      {product.dicountPercentage}%
                    </div>
                  )}

                  {/* Conditional New Tag */}
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-teal-500 leading-tight text-white text-sm font-normal py-[14px] px-[8px] rounded-full">
                      New
                      {product.isNew}
                    </div>
                  )}

                  <Image
                    src={product.productImage}
                    alt={product.title}
                    width={300}
                    height={400}
                    className="object-cover w-full h-56 md:64 md:h-80 transition-transform duration-300 ease-in-out"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-DarkBrown opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>

                {/* Add to Cart Button Hover Icons (Like and Share) */}
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-16">
                  <button
                    className="bg-white text-PrimaryColor px-6 py-2 font-semibold hover:bg-PrimaryColor hover:text-white transition-all duration-300"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </button>
                  <div className="flex justify-center gap-6">
                    <button className="text-white hover:text-Gold transition-colors duration-300">
                      <Heart color="#ffffff" />
                    </button>
                    <button className="text-white hover:text-PrimaryColor transition-colors duration-300">
                      <Share2 color="#ffffff" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4 text-start">
                  <h3 className="text-xl font-medium mb-2 text-zinc-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 md:line-clamp-1">
                    {product.description}
                  </p>
                  <p className="md:mb-4 mb-2 text-zinc-800 font-medium text-lg">
                   $ {product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button className="border-2 font-medium text-PrimaryColor border-PrimaryColor py-3 px-8 hover:bg-PrimaryColor hover:text-white transition-all duration-300">
          <Link href="/shop">Show More</Link>
        </button>
      </div>
    </section>
  );
};

export default ProductSection;

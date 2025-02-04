// "use client";

import { Product } from "@/app/types/product";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
// import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/components/AddToCart/addToCart";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == "wood-chair"][0] {
    _id,
    _type,
    title,
    price,
    description,
    productImage,
    tags,
    sku,
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  // const [product, setProduct] = useState<Product | null>(null);
  // const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     console.log("Fetching product with slug:", slug);
  //     const fetchedProduct = await getProduct(slug);
  //     setProduct(fetchedProduct);
  //   };

  //   fetchProduct();
  // }, [slug]);

  if (!product) {
    return <div className="flex justify-center my-20">Product not found</div>;
  }

  // const handleQuantityChange = (type: string) => {
  //   if (type === "increment") {
  //     setQuantity(quantity + 1);
  //   } else if (type === "decrement" && quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  return (
    <>
      {/* Banner */}
      <div className="bg-PrimaryColor  flex items-center gap-6 px-8 py-6">
        <div className="flex gap-4 ">
          <Link href={"/"} className="opacity-60 ">
            <h3>Home</h3>
          </Link>
          <ChevronRight strokeWidth={1.5} />
          <Link href={"/shop"} className="opacity-60">
            <h3>Shop</h3>
          </Link>
          <ChevronRight strokeWidth={1.5} />
        </div>
        <div className="text-4xl font-extralight opacity-80 ">|</div>
        <div>{product.title}</div>
      </div>

      {/* Product Detail */}
      <div className="container my-8 mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-DarkBrown">
        {/* Product Images Section */}
        <div className="flex gap-6">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={500}
              height={500}
            />
          )}
        </div>

        {/* Product Details Section */}
        <div className="text-start">
          <h1 className="text-4xl font-semibold mb-4">{product.title}</h1>
          <p className="text-2xl text-DarkBrown opacity-80 mb-6">
            $ {product.price}
          </p>
          <p className="text-md text-gray-700 mb-6 line-clamp-4">
            {product.description}
          </p>

          {/* Colors */}
          {/* <div className="mb-6">
            <h3 className="text-md font-medium opacity-80">Colors</h3>
            <div className="flex gap-4 mt-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                    selectedColor === color ? "border-Gold" : "border-gray-400"
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div> */}

          {/* Quantity Selector */}
          {/* <div className="mb-6 flex items-center gap-6 "> */}
          {/* <div className="flex items-center gap-2 border border-DarkBrown rounded-lg border-opacity-60">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-2 py-2">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className=" px-3 py-1 "
              >
                +
              </button>
            </div> */}
            
          {/* Add to Cart */}
          <AddToCart product={product} />

          <div className="border-b-2 my-14"></div>

          {/* Additional Details */}
          <div className="text-DarkBrown opacity-65">
            <p>
              <span className="mr-3 text-PrimaryColor">SKU:</span>
              {product.sku}
            </p>
            <p>
              <span className="mr-3 text-PrimaryColor">Category:</span>N/A
            </p>
            <p>
              <span className="mr-3 text-PrimaryColor">Tags:</span>{" "}
              {product.tags.join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b-2 my-14"></div>

      <div className="grid grid-flow-row ">
        <h1 className="flex justify-center text-xl font-medium mb-4">
          Description
        </h1>
        <p className="flex justify-center md:text-start text-center mx-8 md:mx-28 text-sm text-gray-700 mb-6 ">
          {product.description}
        </p>
      </div>
    </>
  );
}

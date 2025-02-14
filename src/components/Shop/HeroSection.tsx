"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import {
  AlignVerticalSpaceAround,
  Grip,
  SlidersHorizontal,
} from "lucide-react";

const Login = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const query = `*[_type == "shopPage"][0].backgroundImage.asset->url`;
        const data = await client.fetch(query);
        setBackgroundImage(data);
      } catch (error) {
        console.error("Error fetching background image from Sanity:", error);
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <>
      <section className="relative w-full ">
        {/* Image container */}
        <div className="relative w-full h-64">
          <Image
            src={backgroundImage || "/assets/blog/heroImage.png"}
            alt="Background"
            fill
            objectFit="cover"
          />
          {/* Text overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
            <h2 className="text-4xl font-semibold">Shop</h2>
            <p className="mt-2 text-xl">
              <Link href="/">Home &gt; </Link>
              <span className="opacity-70">Shop</span>
            </p>
          </div>
        </div>
      </section>
      <div className="py-8 px-4 sm:px-8 w-full bg-PrimaryColor items-center">
        {/* Filter and sorting section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:space-y-0 ">
          {/* Filter */}
          <div className="flex items-center gap-4">
            <SlidersHorizontal
              size={24}
              className="text-DarkBrown cursor-pointer"
            />
            <p className=" text-md text-DarkBrown">Filter</p>

            {/* View options */}
            <Grip strokeWidth={1.5} size={24} className="cursor-pointer" />
            <AlignVerticalSpaceAround
              strokeWidth={1.5}
              size={24}
              className="cursor-pointer"
            />

            <div className="text-4xl font-thin mr-3 ml-2">|</div>

            {/* Show results */}
            <div className="flex items-start space-x-2">
              <p className="text-sm">
                Showing <span className="font-semibold">1-10</span> of{" "}
                <span className="font-semibold">100</span> results
              </p>
            </div>
          </div>

          {/* Sort By */}
          <div className="flex items-center space-x-2 mt-6 mb-[-10px] gap-3 ">
            <p className="text-md ">Show</p>
            <select className=" p-2  text-sm bg-white ring-0 focus:ring-0 cursor-pointer">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <p className="text-md ">Sort By</p>
            <select className=" p-2 text-sm bg-white cursor-pointer">
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

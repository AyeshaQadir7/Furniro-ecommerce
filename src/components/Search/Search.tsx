"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
// import Image from "next/image";

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      alert(`Searching for: ${searchTerm}`); // Replace with your search logic
    } else {
      alert("Please enter a product name.");
    }
  };

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const query = `*[_type == "search"][0].backgroundImage.asset->url`;
        const data = await client.fetch(query);
        setBackgroundImage(data);
      } catch (error) {
        console.error("Error fetching background image from Sanity:", error);
      }
    };

    fetchBackgroundImage();
  }, []);
  return (
    <section
      className="flex items-center justify-center min-h-[300px] bg-cover bg-center bg-no-repeat py-8"
      style={{
        backgroundImage: `url(${backgroundImage || "/assets/blog/heroImage.png"})`,
      }}
    >
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-sm md:backdrop-blur-md border border-white/20 py-8 mx-4 sm:py-12 px-6 sm:px-8 rounded-md text-white md:max-w-lg lg:max-w-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-DarkBrown text-center mb-4">
          Search for Products
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-3 bg-PrimaryColor text-white font-medium rounded-md hover:bg-yellow-600 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductSearch;

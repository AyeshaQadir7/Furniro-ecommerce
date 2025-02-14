"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Fetch data from Sanity
async function fetchShareSetup() {
  const query = `*[_type == "shareSetup"][0]`;
  const data = await client.fetch(query);
  return data;
}

function ShareSetup() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [setupData, setSetupData] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchShareSetup();
      setSetupData(fetchedData);
    }
    getData();
  }, []);

  return (
    <section className="relative py-8 px-4 sm:px-8 w-full md:min-h-screen md:my-8">
      <p className="text-gray-600 font-medium text-center">
        {setupData?.tagline || "Share your setup with"}
      </p>
      <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-gray-900 text-center">
        {setupData?.hashtag || "#FurniroFurniture"}
      </h2>
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={
            setupData?.image
              ? urlFor(setupData.image).url()
              : "/placeholder-image.jpg"
          }
          alt="Share your setup"
          fill
          objectFit="cover"
        />
      </div>
    </section>
  );
}

export default ShareSetup;

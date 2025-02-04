"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const Login = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const query = `*[_type == "login"][0].backgroundImage.asset->url`;
        const data = await client.fetch(query);
        setBackgroundImage(data);
      } catch (error) {
        console.error("Error fetching background image from Sanity:", error);
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <section className="relative w-full bg-Creame">
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
          <h2 className="text-4xl font-semibold">Login</h2>
          <p className="mt-2 text-xl">
            <Link href="/">Home &gt; </Link>
            <span className="opacity-70">Login</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

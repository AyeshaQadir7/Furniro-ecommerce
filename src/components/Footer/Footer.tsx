/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Send } from "lucide-react";

function Footer() {
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "footer"][0]{
          brandName,
          address,
          links,
          help,
          newsletterText
        }`
      );
      setFooterData(data);
    };
    fetchData();
  }, []);

  if (!footerData) return <div>Loading...</div>;

  return (
    <>
      <hr className="my-8 border-gray-300" />
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-6 md:px-16 py-6">
        {/* Brand and Address */}
        <div className="text-center md:text-start ">
          <h1 className="text-3xl font-bold text-PrimaryColor mb-4">
            {footerData.brandName || "Furniro."}
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            {footerData.address || "Default address"}
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-DarkBrown mb-4">Links</h2>
          <div className="flex flex-col gap-y-3">
            {footerData.links?.map((link: any, index: number) => (
              <Link
                key={index}
                className="hover:text-gray-900 text-gray-600"
                href={link.href || "/"}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-semibold text-DarkBrown mb-4">Help</h2>
          <div className="flex flex-col gap-y-3">
            {footerData.help?.map((item: any, index: number) => (
              <Link
                key={index}
                className="hover:text-gray-900 text-gray-600"
                href={item.href || "/"}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold text-DarkBrown mb-4">
            Newsletter
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            {footerData.newsletterText ||
              "Subscribe to stay updated on our latest news and offers."}
          </p>
          <form className="flex items-center justify-start gap-2">
            <input
              type="email"
              className="w-60 py-2 pl-4 bg-neutral-100 text-DarkBrown focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="px-2 py-2 font-semibold bg-PrimaryColor ">
              <Send strokeWidth={1.25} color="white" />
            </button>
          </form>
        </div>
      </section>

      <hr className="my-6 border-gray-300" />
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 px-6 md:px-16 py-2 text-gray-600">
        <p>
          © {new Date().getFullYear()} {footerData.brandName || "Furniro"}. All
          rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;

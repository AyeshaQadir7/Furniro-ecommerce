"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface RangeSection {
  title: string;
  description: string;
  images: { image?: { asset?: { _ref: string } }; caption?: string }[]; // Allow optional fields
}

const RangeSection = () => {
  const [data, setData] = useState<RangeSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "rangeSection"][0]`;
      const result = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <section className="text-center my-12 px-4 sm:px-8 lg:px-16">
      {/* Title & Description */}
      <h2 className="text-gray-900 text-3xl font-bold ">{data.title}</h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{data.description}</p>

      {/* Image Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-end">
        {data.images?.map((item, index) => {
          const imageUrl = item.image?.asset ? urlFor(item.image).url() : null;

          return (
            <div
              key={index}
              className={`relative overflow-hidden flex flex-col items-center ${
                index === 0 ? "" : index === 2 ? "" : ""
              }`}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-3/4 h-2/3 rounded-lg"
                />
              ) : (
                <p className="text-red-500">Image not found</p>
              )}
              {/* Image Caption */}
              <p className="mt-8 text-2xl font-semibold text-neutral-800">
                {item.caption || "No caption"}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RangeSection;

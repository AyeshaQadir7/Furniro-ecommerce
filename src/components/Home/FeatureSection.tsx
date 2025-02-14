"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface FeatureSectionData {
  title: string;
  description: string;
  buttonText: string;
  image?: { asset?: { _ref: string } };
}

const FeatureSection = () => {
  const [data, setData] = useState<FeatureSectionData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "featureSection"][0]`;
      const result = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Text */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-gray-900">{data.title}</h2>
          <p className="text-gray-600 mt-4">{data.description}</p>
          <button className="mt-6 px-6 py-3 bg-PrimaryColor text-white hover:bg-SecondryColor transition duration-300">
            {data.buttonText}
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="relative flex-1">
          <div className="absolute -right-28 sm:-right-2 top-16 md:w-36 md:h-36 w-28 h-28 bg-PrimaryColor rounded-full lg:block"></div>
          <div className="absolute top-32 -right-12 sm:right-24 md:top-36 w-36 h-36 border-[10px] border-gray-100 bg-AccentColor rounded-md lg:block"></div>

          {data.image?.asset && (
            <Image
              src={urlFor(data.image).url()}
              alt="Feature Image"
              width={300}
              height={400}
              className="relative z-10 rounded-tl-3xl rounded-br-3xl md:-right-10"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

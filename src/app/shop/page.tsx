import Product from "@/components/Home/Product";
import IconsSection from "@/components/IconSection/IconSection";
import HeroSection from "@/components/Shop/HeroSection";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <Product />
      <IconsSection />
    </>
  );
};

export default page;

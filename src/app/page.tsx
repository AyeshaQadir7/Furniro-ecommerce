
import FeatureSection from "@/components/Home/FeatureSection";
import HeroSection from "@/components/Home/HeroSection";
import RangeSection from "@/components/Home/RangeSection";
import IconsSection from "@/components/IconSection/IconSection";
import React from "react";
import ShareSetup from "@/components/Home/ShareSetup";
import Product from "@/components/Home/Product";

function page() {
  return (
    <>
      <HeroSection />
      <IconsSection />
      <RangeSection />
      <Product />
      <FeatureSection />
      <ShareSetup />
    </>
  );
}

export default page;

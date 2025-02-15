import BlogSection from "@/components/Blog/BlogSection";
import HeroSection from "@/components/Blog/HeroSection";
import IconsSection from "@/components/IconSection/IconSection";
import React from "react";

function page() {
  return (
    <div>
      <HeroSection />
      <BlogSection />
      <IconsSection />
    </div>
  );
}

export default page;

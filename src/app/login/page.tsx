import IconsSection from "@/components/IconSection/IconSection";
import HeroSection from "@/components/Login/HeroSection";
import Login from "@/components/Login/Login";
import React from "react";

function page() {
  return (
    <div>
      <HeroSection />
      <Login />
      <IconsSection />
    </div>
  );
}

export default page;

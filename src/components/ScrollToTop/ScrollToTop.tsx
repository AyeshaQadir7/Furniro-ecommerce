"use client";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-white/10 backdrop-blur-sm md:backdrop-blur-sm border border-white/20 fixed bottom-6 right-6 hover:bg-PrimaryColor text-white p-2 rounded-full shadow-xl transition-all duration-300 z-50"
        >
          <ChevronUp strokeWidth={1.5} size={30} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;

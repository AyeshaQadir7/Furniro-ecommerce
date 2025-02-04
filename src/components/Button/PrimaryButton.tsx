import Link from "next/link";
import React from "react";

function PrimaryButton() {
  return (
    <div className="flex justify-center items-center mb-10">
      <button className="text-PrimaryColor border-2 border-PrimaryColor px-12 py-3 hover:bg-PrimaryColor hover:text-white">
        <Link href="/shop">Show More</Link>
      </button>
    </div>
  );
}

export default PrimaryButton;

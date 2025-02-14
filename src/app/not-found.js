// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-semibold text-PrimaryColor">
        404 - Page Not Found
      </h1>
      <p className="mt-2">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-PrimaryColor text-white hover:bg-SecondryColor">
          Go Home
        </button>
      </Link>
    </div>
  );
}

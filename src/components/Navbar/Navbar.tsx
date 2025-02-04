"use client";
import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import React from "react";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

function Navbar() {
  return (
    <>
      {/* Navbar for large screens */}
      <nav className="hidden lg:flex items-center justify-between px-10 py-4 max-w-screen-[1300px]">
        {/* Logo */}
        <Image
          src={"/assets/logo.png"}
          alt="furniro"
          width={200}
          height={200}
        />

        {/* Navigation Links */}
        <ul className="flex gap-14 text-lg">
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-8">
            <button aria-label="signin">
              <Link
                href="/login"
                className="text-DarkBrown hover:text-neutral-500"
              >
                <UserRound />
              </Link>
            </button>
            <button aria-label="search">
              <Link
                href="/search"
                className="text-DarkBrown hover:text-neutral-500"
              >
                <Search />
              </Link>
            </button>
            <button aria-label="wish list">
              <Link
                href="/wishlist"
                className="text-DarkBrown hover:text-neutral-500"
              >
                <Heart />
              </Link>
            </button>
            <button aria-label="shopping cart">
              <Link
                href="/cart"
                className="text-DarkBrown hover:text-neutral-500"
              >
                <ShoppingCart />
              </Link>
            </button>
          </div>
        </div>
      </nav>

      {/* Navbar for small screens */}
      <nav className="flex justify-between items-center px-4 py-6 lg:hidden">
        {/* Logo */}
        <Image
          src={"/assets/logo.png"}
          alt="furniro"
          width={150}
          height={150}
        />

        {/* Hamburger Menu */}
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* Sheet Logo */}
              <SheetTitle className="mt-8 uppercase font-bold text-xl">
                {/* Logo */}
                <Image
                  src={"/assets/logo.png"}
                  alt="furniro"
                  width={150}
                  height={150}
                  className="my-12"
                />
              </SheetTitle>
              <SheetDescription>
                {/* Navigation Links */}
                <ul className="flex flex-col items-start gap-6 text-lg">
                  <li className="hover:text-gray-600 cursor-pointer">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer">
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>

                {/* Icons */}
                <div className="flex gap-6 my-6">
                  <button aria-label="signin">
                    <Link
                      href="/login"
                      className="text-DarkBrown hover:text-neutral-500"
                    >
                      <UserRound />
                    </Link>
                  </button>
                  <button aria-label="search">
                    <Link
                      href="/search"
                      className="text-DarkBrown hover:text-neutral-500"
                    >
                      <Search />
                    </Link>
                  </button>
                  <button aria-label="wish list">
                    <Link
                      href="/wishlist"
                      className="text-DarkBrown hover:text-neutral-500"
                    >
                      <Heart />
                    </Link>
                  </button>
                  <button aria-label="shopping cart">
                    <Link
                      href="/cart"
                      className="text-DarkBrown hover:text-neutral-500"
                    >
                      <ShoppingCart />
                    </Link>
                  </button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

export default Navbar;

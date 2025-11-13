"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getNavbar } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface NavLink {
  label: string;
  url: string;
}

interface NavbarData {
  logo?: any;
  links?: NavLink[];
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [navData, setNavData] = useState<NavbarData | null>(null);

  useEffect(() => {
    getNavbar().then(setNavData);
  }, []);

  // Fallback data while loading
  const links = navData?.links || [
    { label: "About", url: "#about" },
    { label: "What's Included", url: "#whats-included" },
    { label: "Pricing", url: "#pricing" },
    { label: "Contact", url: "#contact" },
  ];

  const logoUrl = navData?.logo ? urlFor(navData.logo).url() : "/logo.jpg";

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoUrl}
            alt="Logo"
            width={80}
            height={80}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map(({ label, url }) => (
            <a
              key={url}
              href={url}
              className="text-gray-700 hover:text-[#1347e5] transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-700 hover:text-[#1347e5] transition-colors focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        } bg-white shadow-md`}
      >
        <nav className="flex flex-col px-4 py-2 space-y-2">
          {links.map(({ label, url }) => (
            <a
              key={url}
              href={url}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-[#1347e5] transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

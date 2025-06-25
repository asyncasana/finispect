"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Finispect Logo"
            width={80}
            height={80}
            className="h-18 w-auto"
            priority
          />
        </a>
        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:block">
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            About
          </a>
          <a
            href="#included"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            What&apos;s Included
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-700 font-medium"
          >
            Contact
          </a>
        </nav>
        {/* Hamburger */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-blue-700 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white shadow px-4 py-2 space-y-2">
          <a
            href="#about"
            className="block text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#included"
            className="block text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setOpen(false)}
          >
            What&apos;s Included
          </a>
          <a
            href="#pricing"
            className="block text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-blue-700 font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { getFooter } from "@/sanity/lib/queries";
import ScrollReveal from "./ScrollReveal";

interface FooterData {
  companyName?: string;
  registeredName?: string;
  servingArea?: string;
  madeByText?: string;
  madeByLink?: string;
}

export default function Footer() {
  const [data, setData] = useState<FooterData | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(2025);

  useEffect(() => {
    getFooter().then(setData);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const companyName = data?.companyName || "Finispect";
  const registeredName = data?.registeredName || "Finispect Ltd";
  const servingArea =
    data?.servingArea || "Proudly serving clients across the UK";
  const madeByText = data?.madeByText || "Made by";
  const madeByLink = data?.madeByLink || "#";

  return (
    <footer className="bg-white shadow-md py-6 px-4">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-700 mb-2">
            © {currentYear} {companyName} - {registeredName}. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-600 mb-3">{servingArea}</p>
          <p className="text-xs text-gray-500">
            {madeByText}{" "}
            <a
              href={madeByLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              PixelMyst Studio
            </a>
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}

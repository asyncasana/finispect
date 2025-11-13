"use client";

import { useState, useEffect } from "react";
import { getFooter } from "@/sanity/lib/queries";
import ScrollReveal from "./ScrollReveal";

interface LegalPage {
  _id: string;
  title: string;
  slug?: { current: string } | string;
}

interface FooterData {
  companyName?: string;
  registeredName?: string;
  servingArea?: string;
  legalPages?: LegalPage[];
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
  const legalPages = data?.legalPages || [];

  return (
    <footer className="bg-white shadow-md py-6 px-4">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-700 mb-2">
            © {currentYear} {companyName} - {registeredName}. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-600 mb-3">{servingArea}</p>
          {legalPages.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {legalPages.map((page) => {
                const slug =
                  typeof page.slug === "string"
                    ? page.slug
                    : page.slug?.current;
                return slug ? (
                  <a
                    key={page._id}
                    href={`/legal/${slug}`}
                    className="text-xs text-gray-500 hover:text-blue-700 underline"
                  >
                    {page.title}
                  </a>
                ) : null;
              })}
            </div>
          )}
        </div>
      </ScrollReveal>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { getPricingSection } from "@/sanity/lib/queries";
import ScrollReveal from "./ScrollReveal";

interface PricingItem {
  label: string;
  price: string;
}

interface PricingData {
  sectionTitle?: string;
  pricingItems?: PricingItem[];
  optionalExtrasTitle?: string;
  optionalExtras?: string[];
}

export default function PricingSection() {
  const [data, setData] = useState<PricingData | null>(null);

  useEffect(() => {
    getPricingSection().then(setData);
  }, []);

  const sectionTitle = data?.sectionTitle || "Pricing";
  const pricingItems = data?.pricingItems || [];
  const optionalExtrasTitle = data?.optionalExtrasTitle || "Optional Extras";
  const optionalExtras = data?.optionalExtras || [];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            {sectionTitle}
          </h2>

          {/* Pricing Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <table className="w-full">
              <tbody>
                {pricingItems.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 text-gray-700 font-medium">
                      {item.label}
                    </td>
                    <td className="py-4 px-6 text-right text-blue-900 font-bold">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Optional Extras */}
          {optionalExtras.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {optionalExtrasTitle}
              </h3>
              <ul className="space-y-3">
                {optionalExtras.map((extra, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 shrink-0" />
                    <span className="text-gray-700">{extra}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}

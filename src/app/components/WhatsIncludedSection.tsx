"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { getWhatsIncludedSection } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import ScrollReveal from "./ScrollReveal";

interface WhatsIncludedData {
  sectionTitle?: string;
  sectionIcon?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  items?: string[];
}

export default function WhatsIncludedSection() {
  const [data, setData] = useState<WhatsIncludedData | null>(null);

  useEffect(() => {
    getWhatsIncludedSection().then(setData);
  }, []);

  const sectionTitle = data?.sectionTitle || "What's Included";
  const items = data?.items || [];

  return (
    <section className="py-12 bg-white" id="included">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              {data?.sectionIcon ? (
                <Image
                  src={urlFor(data.sectionIcon).url()}
                  alt="Section Icon"
                  width={128}
                  height={128}
                  className="w-32 h-32 object-contain"
                />
              ) : (
                <CheckCircleIcon className="w-32 h-32 text-[#1347e5]" />
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                {sectionTitle}
              </h2>
              <ul className="space-y-3 max-w-md mx-auto">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

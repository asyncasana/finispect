"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { getWhyChooseUsSection } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import ScrollReveal from "./ScrollReveal";

interface WhyChooseUsData {
  sectionTitle?: string;
  sectionIcon?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  reasons?: string[];
}

export default function WhyChooseUsSection() {
  const [data, setData] = useState<WhyChooseUsData | null>(null);

  useEffect(() => {
    getWhyChooseUsSection().then(setData);
  }, []);

  const sectionTitle = data?.sectionTitle || "Why Choose Us";
  const reasons = data?.reasons || [];

  return (
    <section className="py-12 pb-16 px-4 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <ScrollReveal>
          {data?.sectionIcon ? (
            <Image
              src={urlFor(data.sectionIcon).url()}
              alt="Section Icon"
              width={128}
              height={128}
              className="w-32 h-32 object-contain mb-6"
            />
          ) : (
            <CheckCircleIcon className="w-32 h-32 text-[#1347e5] mb-6" />
          )}
        </ScrollReveal>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            {sectionTitle}
          </h2>
          <ul className="space-y-3 max-w-md mx-auto">
            {reasons.map((reason, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-400 shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

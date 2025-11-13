"use client";

import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  getWhatsIncludedSection,
  getWhyChooseUsSection,
} from "@/sanity/lib/queries";
import ScrollReveal from "./ScrollReveal";

interface WhatsIncludedData {
  sectionTitle?: string;
  items?: string[];
}

interface WhyChooseUsData {
  sectionTitle?: string;
  reasons?: string[];
}

export default function ServicesSection() {
  const [whatsIncludedData, setWhatsIncludedData] =
    useState<WhatsIncludedData | null>(null);
  const [whyChooseUsData, setWhyChooseUsData] =
    useState<WhyChooseUsData | null>(null);

  useEffect(() => {
    getWhatsIncludedSection().then(setWhatsIncludedData);
    getWhyChooseUsSection().then(setWhyChooseUsData);
  }, []);

  const whatsIncludedTitle =
    whatsIncludedData?.sectionTitle || "What's Included";
  const whatsIncludedItems = whatsIncludedData?.items || [];

  const whyChooseUsTitle = whyChooseUsData?.sectionTitle || "Why Choose Us";
  const whyChooseUsReasons = whyChooseUsData?.reasons || [];

  return (
    <section className="py-12 pb-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What's Included */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                {whatsIncludedTitle}
              </h2>
              <ul className="space-y-3 flex-1">
                {whatsIncludedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                {whyChooseUsTitle}
              </h2>
              <ul className="space-y-3 flex-1">
                {whyChooseUsReasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
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

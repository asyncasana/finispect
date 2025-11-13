"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getContactSection } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import ScrollReveal from "./ScrollReveal";

interface FormLabels {
  nameLabel?: string;
  emailLabel?: string;
  phoneLabel?: string;
  messageLabel?: string;
  submitButton?: string;
}

interface ContactData {
  sectionTitle?: string;
  introText?: string;
  backgroundImage?: any;
  formLabels?: FormLabels;
}

export default function ContactSection() {
  const [data, setData] = useState<ContactData | null>(null);

  useEffect(() => {
    getContactSection().then(setData);
  }, []);

  const sectionTitle = data?.sectionTitle || "Contact Us";
  const introText = data?.introText || "Get in touch with us";
  const formLabels = data?.formLabels || {};

  const backgroundImage = data?.backgroundImage
    ? urlFor(data.backgroundImage).url()
    : "";

  return (
    <section className="py-16 px-4 bg-linear-to-b from-blue-50 to-white relative">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Contact Background"
          fill
          className="absolute inset-0 object-cover opacity-30"
        />
      )}
      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
            {sectionTitle}
          </h2>
          <p className="text-gray-700 text-center mb-8 whitespace-pre-line">
            {introText}
          </p>

          {/* Contact Form */}
          <form className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                {formLabels.nameLabel || "Your Name"}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                {formLabels.emailLabel || "Your Email"}
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                {formLabels.phoneLabel || "Your Phone"}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                {formLabels.messageLabel || "Your Message"}
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {formLabels.submitButton || "Send Message"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getHeroSection } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import ScrollReveal from "./ScrollReveal";

interface HeroData {
  backgroundType?: "image" | "video";
  backgroundImage?: any;
  backgroundVideo?: any;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export default function HeroSection() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    getHeroSection().then(setHeroData);
  }, []);

  const title = heroData?.title || "Finispect: New Build Snagging Inspections";
  const subtitle =
    heroData?.subtitle ||
    "Protect your investment with a professional, independent inspection";
  const ctaText = heroData?.ctaText || "Request a Quote";
  const ctaUrl = heroData?.ctaUrl || "#contact";

  const backgroundUrl = heroData?.backgroundImage
    ? urlFor(heroData.backgroundImage).url()
    : "/hero.webp";

  return (
    <section className="relative flex items-center justify-center min-h-[60vh] pt-24 px-4 bg-linear-to-b from-blue-50 to-white text-center overflow-hidden">
      {heroData?.backgroundType === "video" &&
      heroData?.backgroundVideo?.asset?.url ? (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-[1.15]"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{ objectPosition: "center" }}
        >
          <source src={heroData.backgroundVideo.asset.url} type="video/mp4" />
        </video>
      ) : heroData?.backgroundImage ? (
        <Image
          src={backgroundUrl}
          alt="Hero Background"
          fill
          priority
          className="absolute inset-0 object-cover opacity-30"
        />
      ) : null}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <ScrollReveal>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-blue-900 drop-shadow">
            {title}
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-lg md:text-2xl mb-6 text-gray-700 max-w-2xl">
            {subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <a
            href="#contact"
            className="bg-[#1347e5] hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow transition mb-8"
          >
            {ctaText}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

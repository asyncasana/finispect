"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAboutSection } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import ScrollReveal from "./ScrollReveal";

interface Card {
  icon?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  title?: string;
  content?: string;
}

interface AboutData {
  sectionTitle?: string;
  cards?: Card[];
}

export default function AboutSection() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    getAboutSection().then(setAboutData);
  }, []);

  const sectionTitle = aboutData?.sectionTitle || "About";
  const cards = aboutData?.cards || [];

  if (cards.length === 0) return null;

  const handleSlideChange = (newIndex: number) => {
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isTransitioning) return;

    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left - next slide
      handleSlideChange((currentSlide + 1) % cards.length);
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right - previous slide
      handleSlideChange((currentSlide - 1 + cards.length) % cards.length);
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            {sectionTitle}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 flex flex-col md:flex-row items-center justify-center gap-8 px-4"
                >
                  <div className="w-full md:w-1/2 flex justify-center">
                    {card.icon && (
                      <Image
                        src={urlFor(card.icon).url()}
                        alt={card.title || "Icon"}
                        width={400}
                        height={400}
                        className="w-full max-w-md h-auto object-contain"
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      {card.title}
                    </h3>
                    <div className="text-gray-700 whitespace-pre-line">
                      {card.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {cards.length > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

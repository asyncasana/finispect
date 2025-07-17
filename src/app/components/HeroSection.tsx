import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] mt-6 px-4 bg-gradient-to-b from-blue-50 to-white text-center overflow-hidden">
      <Image
        src="/hero.webp"
        alt="Finispect Hero"
        fill
        priority
        className="absolute inset-0 object-cover opacity-30"
        style={{ zIndex: 0, width: '100%', height: '100%' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1
          className="text-3xl md:text-5xl font-extrabold mb-4 text-blue-900 drop-shadow"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Finispect: New Build Snagging Inspections
        </h1>
        <p
          className="text-lg md:text-2xl mb-6 text-gray-700 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Protect your investment with a professional, independent inspection
        </p>
        <a
          href="#contact"
          className="bg-[#1347e5] hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow transition mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
}

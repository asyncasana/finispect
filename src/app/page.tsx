import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 bg-gradient-to-b from-blue-50 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
          Finispect - Snagging Inspections for New Builds
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-700 max-w-2xl">
          Protect your investment with a professional, independent inspection
        </p>
        <a
          href="#contact"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow transition mb-8"
        >
          Request a Quote
        </a>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-4 py-12" id="about">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">About</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm <span className="font-semibold">Danylo Boyev</span>, founder of
          Finispect – an independent inspection service focused on delivering
          professional, defect-led snagging and quality assurance for new homes.
          <br />
          <br />
          With over a decade of experience in the construction industry, I've
          worked as a Clerk of Works and Quality Assurance Lead on some of
          London's most high-profile developments, including Kensington Olympia,
          Whiteley London, and Greenford Quay.
          <br />
          <br />
          My background spans both residential and commercial projects – from
          high-rise towers to luxury hotels – giving me a sharp understanding of
          what quality looks like on-site, and what developers are expected to
          deliver.
          <br />
          <br />
          At Finispect, I apply that same standard to private homebuyers. Every
          inspection is approached with the same rigour, clarity, and
          independence – so whether you're buying your first flat or handing
          over an entire block, you're protected by expertise that developers
          take seriously.
        </p>
      </section>

      {/* What's Included */}
      <section className="bg-blue-50 py-12 px-4" id="included">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          What's Included
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-2xl mx-auto">
          <li>Full walk-through of your property</li>
          <li>
            Check of doors, windows, walls, ceilings, floors, skirtings, stairs
          </li>
          <li>Visual MEP (plumbing, heating, electrics) inspection</li>
          <li>Professional, photo-based PDF snag list</li>
          <li>Optional re-inspection after snags are fixed</li>
          <li>Typical snag counts range from 30 to 90+ defects per home*</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-3xl mx-auto px-4 py-12" id="why">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Us</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Experienced QA Lead on major projects</li>
          <li>Clear, photo-based snagging reports</li>
          <li>100% independent – I work for the buyer</li>
          <li>Report turnaround in 24-48 hours</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="bg-blue-50 py-12 px-4" id="pricing">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Pricing – Premium Snagging Inspections
        </h2>
        <div className="max-w-2xl mx-auto">
          <ul className="text-gray-700 space-y-1">
            <li>
              1-Bed Flat – from <span className="font-semibold">£295</span>
            </li>
            <li>
              2-Bed Flat – from <span className="font-semibold">£345</span>
            </li>
            <li>
              3-Bed Flat – from <span className="font-semibold">£395</span>
            </li>
            <li>
              House (up to 4 bedrooms) – from{" "}
              <span className="font-semibold">£475</span>
            </li>
            <li>
              Larger / high-spec homes –{" "}
              <span className="font-semibold">Contact for Quote</span>
            </li>
          </ul>
          <div className="mt-6">
            <div className="font-semibold mb-2">Optional Extras:</div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Re-inspection visit – £75</li>
              <li>24-hour report delivery – £50</li>
              <li>Same-day slot (if available) – £100</li>
              <li>
                Discounts available for multiple properties or investor
                portfolios. Contact me for a tailored quote.*
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-2xl mx-auto px-4 py-12" id="contact">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact</h2>
        <div className="mb-4 text-gray-700">
          <div>
            Email:{" "}
            <a
              href="mailto:hello@finispect.co.uk"
              className="text-blue-700 underline"
            >
              hello@finispect.co.uk
            </a>
          </div>
          <div>
            Phone/WhatsApp:{" "}
            <a href="tel:07XXXXXXXXX" className="text-blue-700 underline">
              07XXX XXXXXX
            </a>
          </div>
        </div>
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Property Type
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded transition"
          >
            Send
          </button>
        </form>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

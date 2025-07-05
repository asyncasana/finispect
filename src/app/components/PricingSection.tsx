import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function PricingSection() {
  return (
    <section className="bg-[#f5fafe] py-12 px-4 relative" id="pricing">
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className="text-2xl font-bold text-blue-800 mb-8 text-center relative z-10"
          data-aos="fade-up"
        >
          Pricing: Premium Snagging Inspections
        </h2>
        <ul
          className="max-w-xl mx-auto divide-y divide-gray-200 bg-white rounded-lg shadow relative z-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li className="flex justify-between px-6 py-4">
            <span>1-Bed Flat</span>
            <span className="font-semibold text-blue-800">from £295</span>
          </li>
          <li className="flex justify-between px-6 py-4">
            <span>2-Bed Flat</span>
            <span className="font-semibold text-blue-800">from £345</span>
          </li>
          <li className="flex justify-between px-6 py-4">
            <span>3-Bed Flat</span>
            <span className="font-semibold text-blue-800">from £395</span>
          </li>
          <li className="flex justify-between px-6 py-4">
            <span>House (up to 4 bedrooms)</span>
            <span className="font-semibold text-blue-800">from £475</span>
          </li>
          <li className="flex justify-between px-6 py-4">
            <span>Larger / high-spec homes</span>
            <span className="font-semibold text-blue-800">
              Contact for Quote
            </span>
          </li>
        </ul>
        <div
          className="max-w-2xl mx-auto mt-8 relative z-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-blue-100 rounded-lg p-6 shadow flex flex-col gap-2">
            <div className="font-semibold text-blue-800 mb-2 text-lg">
              Optional Extras
            </div>
            <ul className="list-none text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                Re-inspection visit £75
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                24-hour report delivery £50
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                Same-day slot (if available) £100
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                Discounts for multiple properties or investor portfolios.
                Contact for a quote.*
              </li>
            </ul>
          </div>
        </div>
        <div className="z-0 pointer-events-none absolute left-0 bottom-0 w-full h-32">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(to bottom, #f5fafe 0%, #fff 70%, #f5fafe 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

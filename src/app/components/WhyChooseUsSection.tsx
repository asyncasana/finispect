import { StarIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WhyChooseUsSection() {
  const reasons = [
    "Experienced QA Lead on major projects",
    "Clear, photo-based snagging reports",
    "100% independent – I work for the buyer",
    "Report turnaround in 24-48 hours",
  ];

  return (
    <section className="py-12 px-4 flex flex-col md:flex-row items-center justify-center">
      <div
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
        data-aos="fade-right"
      >
        <StarIcon className="w-32 h-32 text-[#1347e5] mb-6" />
      </div>
      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-center"
        data-aos="fade-left"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Why Choose Us
        </h2>
        <ul className="space-y-3 max-w-md mx-auto">
          {reasons.map((reason, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

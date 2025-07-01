import {
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function WhatsIncludedSection() {
  const items = [
    "Full walk-through of your property",
    "Check of doors, windows, walls, ceilings, floors, skirtings, stairs",
    "Visual MEP (plumbing, heating, electrics) inspection",
    "Professional, photo-based PDF snag list",
    "Optional re-inspection after snags are fixed",
    "Typical snag counts range from 30 to 90+ defects per home*",
  ];

  return (
    <section className="py-12 bg-white" id="included">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center justify-center">
        {/* Icon Column */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <ClipboardDocumentCheckIcon className="w-32 h-32 text-blue-400 mb-8" />
        </div>
        {/* Text/List Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-center justify-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center md:text-left">
            What&apos;s Included
          </h2>
          <ul className="space-y-3 max-w-md w-full px-8">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-gray-700 flex-1 min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

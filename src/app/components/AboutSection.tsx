import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function AboutSection() {
  return (
    <section className="py-12 px-4 flex flex-col md:flex-row items-center justify-center" id="about">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <UserCircleIcon className="w-32 h-32 text-blue-400" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">About</h2>
          <div className="text-gray-700">
            <p>
              I&apos;m <span className="font-semibold">Danylo Boyev</span>,
              founder of Finispect – an independent inspection service focused
              on delivering professional, defect-led snagging and quality
              assurance for new homes.
              <br />
              <br />
              With over a decade of experience in the construction industry,
              I&apos;ve worked as a Clerk of Works and Quality Assurance Lead on
              some of London&apos;s most high-profile developments, including
              Kensington Olympia, Whiteley London, and Greenford Quay.
              <br />
              <br />
              My background spans both residential and commercial projects –
              from high-rise towers to luxury hotels – giving me a sharp
              understanding of what quality looks like on-site, and what
              developers are expected to deliver.
              <br />
              <br />
              At Finispect, I apply that same standard to private homebuyers.
              Every inspection is approached with the same rigour, clarity, and
              independence – so whether you&apos;re buying your first flat or
              handing over an entire block, you&apos;re protected by expertise
              that developers take seriously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-12 px-4"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #eff6ff 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.8) 100%), url('/contact-bg-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute left-0 top-0 w-full overflow-hidden leading-none pointer-events-none"
        style={{ height: "60px" }}
      >
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#eff6ff" d="M0,0 C480,60 960,0 1440,60 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      <h2 className="relative z-10 text-3xl font-bold text-blue-800 mb-6 text-center">
        Contact
      </h2>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <p className="text-center text-lg text-gray-700 mb-6">
          For a quick quote or to discuss your inspection, please fill out the
          form below. We aim to respond within 24 hours.
        </p>
        {/* <p className="text-center text-lg text-gray-700 mb-8">
          Email{" "}
          <a
            href="mailto:hello@finispect.co.uk"
            className="text-blue-700 underline"
          >
            hello@finispect.co.uk
          </a>{" "}
          or WhatsApp{" "}
          <a href="tel:07XXXXXXXXX" className="text-blue-700 underline">
            07XXX XXXXXX
          </a>{" "}
          for a quick quote or to discuss your inspection.
        </p> */}
      </div>
      <form className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-white rounded-lg shadow p-6 flex flex-col gap-4 mx-auto">
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
  );
}

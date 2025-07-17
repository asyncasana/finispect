"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    propertyType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          propertyType: formData.propertyType,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", propertyType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

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
          className="w-full h-full"
        >
          <path fill="#eff6ff" d="M0,0 C480,60 960,0 1440,60 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      <h2
        className="relative z-10 text-3xl font-bold text-blue-900 mb-6 text-center"
        data-aos="fade-up"
      >
        Contact
      </h2>
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="text-center text-lg text-gray-700 mb-8">
          Email us on{" "}
          <a
            href="mailto:hello@finispect.co.uk"
            className="text-[#1347e5] underline"
          >
            hello@finispect.co.uk
          </a>{" "}
          {/* or WhatsApp{" "}
          <a href="tel:07XXXXXXXXX" className="text-blue-700 underline">
            07XXX XXXXXX
          </a>{" "} */}
          for a quick quote or to discuss your inspection.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-white rounded-lg shadow p-6 flex flex-col gap-4 mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
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
        {status === "sent" && <p className="text-green-600">Message sent!</p>}
        {status === "error" && (
          <p className="text-red-600">Something went wrong.</p>
        )}
      </form>
    </section>
  );
}

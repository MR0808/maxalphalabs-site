"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const message = data.get("message") as string;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-neutral-900">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            placeholder="Your company (optional)"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            placeholder="Tell us what you're building or exploring..."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto"
        >
          Send message
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-sm text-neutral-600">
          Your email client should open with your message. If it doesn&apos;t, email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-neutral-900 underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      )}

      <p className="mt-8 text-sm text-neutral-500">
        Or reach us directly at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-neutral-700 hover:text-neutral-900"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}

"use client";
import { useState, FormEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // We'll wire this to Supabase later.
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6">
      {/* Hero */}
      <section className="w-full max-w-3xl text-center pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Amazon Relay <span className="text-blue-600">Profit Analyzer</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Upload your <strong>Relay</strong> and <strong>fuel</strong> CSVs to
          see <em>net profit per load</em> and your most profitable lanes—no
          spreadsheets, no manual math.
        </p>

        {/* CTA scroll link */}
        <a
          href="#waitlist"
          className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Join the waitlist
        </a>
      </section>

      {/* Quick value props */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        {[
          ["1-Click Import", "Drop in Amazon Relay CSVs and fuel reports."],
          [
            "Real Profit",
            "Factor fuel, driver pay % and fees for true net numbers.",
          ],
          ["Lane Insights", "See which routes print money—and which don’t."],
        ].map(([title, body]) => (
          <div
            key={title}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{body}</p>
          </div>
        ))}
      </section>

      {/* Waitlist form */}
      <section
        id="waitlist"
        className="w-full max-w-xl bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-10 mb-16"
      >
        <h2 className="text-xl font-semibold text-gray-900 text-center">
          Get early access
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Notify me
            </button>
          </form>
        ) : (
          <p className="mt-4 text-green-600 text-center">
            You’re on the list. We’ll email you when the beta opens. 🚀
          </p>
        )}

        <p className="text-xs text-gray-400 mt-3 text-center">
          No spam. One-click unsubscribe anytime.
        </p>
      </section>

      <footer className="mb-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} Relay Profit. All rights reserved.
      </footer>
    </main>
  );
}


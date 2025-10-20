"use client";

import { useState, FormEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire to Supabase. For now, fake success:
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main>
      {/* Header */}
      <header className="container-px mx-auto flex h-16 items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">
          <span className="text-white">Relay</span>
          <span className="text-primary-orange">Profit</span>
        </div>
        <nav className="hidden sm:flex gap-3">
          <a className="btn-ghost" href="#features">Features</a>
          <a className="btn-ghost" href="#waitlist">Waitlist</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="container-px mx-auto max-w-5xl pt-16 pb-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            See <span className="text-primary-orange">real profit</span> on
            every Amazon Relay load.
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Upload your Relay and fuel CSVs. Get net profit per load, lane
            averages, and instant “take/skip” clarity. No spreadsheets.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#waitlist" className="btn-primary">Join the waitlist</a>
            <a href="#features" className="btn-ghost">How it works</a>
          </div>

          <div className="mt-8 text-sm text-secondary-green/80">
            ⚡ Early users get a founder discount.
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section id="features" className="container-px mx-auto max-w-5xl pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <h3 className="font-semibold">1-Click Import</h3>
            <p className="mt-1 text-white/70 text-sm">
              Drop in Amazon Relay & fuel CSVs. We normalize and match them.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">True Net Profit</h3>
            <p className="mt-1 text-white/70 text-sm">
              Fuel, driver pay %, and fees baked in. No more “gross RPM” lies.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Lane Insights</h3>
            <p className="mt-1 text-white/70 text-sm">
              Best/worst lanes, trends, and alerts. Color-coded: 
              <span className="text-secondary-green"> green</span> wins,
              <span className="text-secondary-red"> red</span> duds.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="container-px mx-auto max-w-xl pb-16">
        <div className="card">
          <h2 className="text-xl font-semibold text-primary-orange text-center">
            Get early access
          </h2>

          {!submitted ? (
            <form onSubmit={submit} className="mt-4 flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-xl border border-white/15 bg-black/30 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              />
              <button type="submit" className="btn-primary">Notify me</button>
            </form>
          ) : (
            <p className="mt-4 text-center text-secondary-green">
              You’re on the list. We’ll email when the beta opens. 🚚
            </p>
          )}

          <p className="mt-2 text-xs text-white/50 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-px mx-auto flex h-16 items-center justify-between border-t border-white/10">
        <span className="text-white/50 text-sm">
          © {new Date().getFullYear()} RelayProfit
        </span>
        <span className="text-accent-gold text-sm">Built for small carriers</span>
      </footer>
    </main>
  );
}



export default function HomePage() {
  return (
    <main>
      {/* Header */}
      <header className="container-px mx-auto flex h-16 items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">
          <span className="text-relay-primary">Relay</span>
          {/* Use Relay blue token, not Tailwind blue-700 */}
          <span className="text-white">Profit</span>
        </div>
        <nav className="hidden sm:flex gap-3">
          <a className="btn btn-ghost" href="#features">Features</a>
          <a className="btn btn-ghost" href="#waitlist">Waitlist</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="container-px mx-auto max-w-5xl pt-16 pb-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[var(--relay-text-strong)]">
            See <span className="text-[var(--relay-primary)]">the truth</span> on every Amazon Relay load.
          </h1>
          <p className="mt-4 text-[var(--relay-text)] text-lg max-w-2xl mx-auto">
            Upload your Relay and fuel CSVs. Get net profit per load, lane
            averages, and instant “take/skip” clarity. No spreadsheets.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#waitlist" className="btn btn-primary">Join the waitlist</a>
            <a href="#features" className="btn btn-ghost">How it works</a>
          </div>

          <div className="mt-8 text-sm" style={{ color: 'var(--relay-success)' }}>
            ⚡ Early users get a founder discount.
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section id="features" className="container-px mx-auto max-w-5xl pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <h3 className="font-semibold text-[var(--relay-text-strong)]">1-Click Import</h3>
            <p className="mt-1 text-[var(--relay-text)] text-sm">
              Drop in Amazon Relay & fuel CSVs. We normalize and match them.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-[var(--relay-text-strong)]">True Net Profit</h3>
            <p className="mt-1 text-[var(--relay-text)] text-sm">
              Fuel, driver pay %, and fees baked in. No more “gross RPM” lies.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-[var(--relay-text-strong)]">Lane Insights</h3>
            <p className="mt-1 text-[var(--relay-text)] text-sm">
              Best/worst lanes, trends, and alerts. <span style={{ color: 'var(--relay-success)' }}>Green</span> wins,
              <span style={{ color: 'var(--relay-danger)' }}> red</span> duds.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="container-px mx-auto max-w-xl pb-16">
        <div className="card">
          <h2 className="text-xl font-semibold text-[var(--relay-primary)] text-center">
            Get early access
          </h2>

          <form className="mt-4 flex gap-3">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-md border border-white/15 bg-black/30 px-4 py-3 placeholder-white/40
                         focus:outline-none focus:ring-2 focus:ring-[var(--relay-primary-ring)]"
            />
            <button type="submit" className="btn btn-primary">Notify me</button>
          </form>

          <p className="mt-2 text-xs text-[var(--relay-muted)] text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-px mx-auto flex h-16 items-center justify-between border-t border-white/10">
        <span className="text-[var(--relay-muted)] text-sm">
          © {new Date().getFullYear()} RelayProfit
        </span>
        <span className="text-[var(--relay-primary)] text-sm">Built for small carriers</span>
      </footer>
    </main>
  );
}

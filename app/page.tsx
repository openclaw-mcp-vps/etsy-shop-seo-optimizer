export default function Home() {
  const faqs = [
    {
      q: "How does the keyword optimizer work?",
      a: "We analyze your Etsy listing titles, tags, and descriptions against real search data, then suggest high-traffic, low-competition keywords tailored to your niche."
    },
    {
      q: "Can I track my competitors' listings?",
      a: "Yes. Add any Etsy shop URL and we'll monitor their top listings, keyword strategies, and ranking changes so you can stay one step ahead."
    },
    {
      q: "Is there a free trial?",
      a: "You get a 7-day free trial with full access. No credit card required until you decide to subscribe."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] text-[#58a6ff] border border-[#30363d]">
          Etsy SEO · Keyword Research · Competitor Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Optimize Etsy Listings for{" "}
          <span className="text-[#58a6ff]">Top Search Rankings</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze your listings, discover winning keywords, track ranking changes, and spy on competitor strategies — all from one clean dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">7-day free trial · No credit card required</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Listing Analyzer", "Keyword Suggestions", "Rank Tracker", "Competitor Monitor", "Tag Optimizer", "Auto Reports"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full text-sm bg-[#161b22] border border-[#30363d] text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold text-white">$13</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to dominate Etsy search</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited listing analysis",
              "AI keyword suggestions",
              "Daily rank tracking",
              "Competitor shop monitoring",
              "Tag & title optimizer",
              "Weekly email reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Etsy Shop SEO Optimizer. All rights reserved.
      </footer>
    </main>
  );
}

const items = [
  { n: "01", title: "ID-verified travelers", body: "Government ID checks before anyone joins our network." },
  { n: "02", title: "Escrow payments", body: "Funds are held safely until the recipient confirms delivery." },
  { n: "03", title: "PIN handover", body: "Each package has a one-time code to prove successful delivery." },
  { n: "04", title: "Package protection", body: "Compensation cover up to ₦500,000 on every shipment." },
  { n: "05", title: "Reputation system", body: "Real ratings & reviews after every completed trip." },
  { n: "06", title: "Restricted items", body: "Strict policy against illegal, dangerous, or fragile-only goods." },
];

export function Trust() {
  return (
    <section id="trust" className="border-t border-border">
      <div className="container-page py-32 md:py-48 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">[ 03 ] Trust & safety</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-balance">
            Built on the parts<br />
            <span className="italic font-light">that can't</span> be casual.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl">
            We borrowed the best ideas from marketplaces you already trust, and engineered them for
            cross-city delivery.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-border">
            {items.map((it, i) => (
              <div
                key={it.title}
                className={`py-10 lg:px-6 ${i % 3 !== 0 ? "lg:border-l" : ""} ${i >= 3 ? "lg:border-t" : ""} ${i % 2 !== 0 ? "sm:border-l lg:border-l" : ""} ${i >= 2 ? "sm:border-t" : ""} border-border`}
              >
                <div className="font-display text-sm font-medium tracking-widest text-muted-foreground">{it.n}</div>
                <h3 className="mt-6 font-display text-2xl md:text-3xl font-bold tracking-tight">{it.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


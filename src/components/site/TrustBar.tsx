export function TrustBar() {
  const items = [
    "2,500+ packages delivered",
    "★ 4.9 traveler rating",
    "Escrow on every transaction",
    "ID-verified network",
    "15 active cities",
    "Insured up to ₦500k",
  ];
  const loop = [...items, ...items, ...items];
  return (
    <section className="border-y border-border px-4 md:px-0 py-6 overflow-hidden">
      <div className="flex gap-16 whitespace-nowrap [animation:var(--animate-marquee)]">
        {loop.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-4xl font-semibold tracking-tight inline-flex items-center gap-16">
            {t}
            <span className="h-2 w-2 rounded-full bg-coral" />
          </span>
        ))}
      </div>
    </section>
  );
}


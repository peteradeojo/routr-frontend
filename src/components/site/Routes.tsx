const routes = [
  { from: "Lagos", to: "Abuja", travelers: 84, price: "₦5,500" },
  { from: "Abuja", to: "Port Harcourt", travelers: 42, price: "₦6,200" },
  { from: "London", to: "Lagos", travelers: 31, price: "₦55,000" },
  { from: "Accra", to: "Lagos", travelers: 28, price: "₦24,000" },
  { from: "Lagos", to: "Ibadan", travelers: 67, price: "₦3,200" },
  { from: "Kano", to: "Abuja", travelers: 19, price: "₦5,800" },
];

export function Routes() {
  return (
    <section id="routes" className="border-t border-border">
      <div className="container-page py-32 md:py-48 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">[ 04 ] Live routes</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-balance">
            Travelers on the<br />move right now.
          </h2>

          <div className="mt-16 border-t border-border">
            {routes.map((r) => (
              <a
                href="#send"
                key={`${r.from}-${r.to}`}
                className="group flex items-center justify-between gap-6 py-6 md:py-8 border-b border-border hover:bg-secondary/40 -mx-4 px-4 transition"
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="hidden md:flex h-2 w-2 rounded-full bg-coral animate-pulse" />
                  <span className="font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">
                    {r.from} <span className="text-muted-foreground">→</span> {r.to}
                  </span>
                </div>
                <div className="flex items-center gap-6 md:gap-12 shrink-0">
                  <span className="hidden sm:inline text-sm text-muted-foreground">{r.travelers} travelers</span>
                  <span className="font-display text-base md:text-xl font-semibold">from {r.price}</span>
                  <span className="font-display text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


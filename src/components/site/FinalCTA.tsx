export function FinalCTA() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-24 md:py-32">
        <h2
          aria-label="Send smarter"
          className="font-display font-black uppercase leading-[0.82] tracking-[-0.055em]"
          style={{ fontSize: "clamp(4rem, 18vw, 18rem)" }}
        >
          SEND<br />SMARTER<span className="text-coral">.</span>
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <p className="text-lg md:text-xl text-muted-foreground max-w-md">
            Two-sided. One simple promise: cheaper for senders, profitable for travelers.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#send" className="inline-flex h-13 items-center rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background hover:bg-foreground/90 transition">
              Send a package →
            </a>
            <a href="#earn" className="inline-flex h-13 items-center rounded-full border border-border px-7 py-4 text-sm font-medium hover:bg-secondary transition">
              Start earning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


import heroImg from "@/assets/hero-traveler.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Massive wordmark */}
      <div className="container-page pt-28 md:pt-32">
        <h1
          aria-label="Pasaro"
          className="font-display font-black uppercase leading-[0.82] tracking-[-0.055em] text-foreground select-none"
          style={{ fontSize: "clamp(5rem, 22vw, 22rem)" }}
        >
          PASARO
        </h1>
      </div>

      {/* Bottom row: tagline + scroll */}
      <div className="container-page mt-auto pb-12 md:pb-16 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-5 lg:col-span-4 flex items-end gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-coral animate-pulse" />
          <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition">
            ↓ Scroll down
          </a>
        </div>
        <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight text-balance">
            We connect senders with verified travelers already heading their way — turning
            unused luggage space into cheaper, faster, more human delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#send"
              className="inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-foreground/90 transition"
            >
              Send a package
            </a>
            <a
              href="#earn"
              className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-medium hover:bg-secondary transition"
            >
              Become a traveler
            </a>
          </div>
        </div>
      </div>

      {/* Wide image strip */}
      <div className="relative w-full aspect-[21/9] overflow-hidden bg-card border-t border-border">
        <img
          src={heroImg}
          alt="A traveler handing a package to a recipient at the airport"
          width={1920}
          height={820}
          className="h-full w-full object-cover grayscale-[15%]"
        />
      </div>
    </section>
  );
}


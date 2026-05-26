import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const stories = [
  { name: "Adaeze N.", route: "Lagos → London", earned: "₦185k", img: avatar1, quote: "Pasaro pays for half my flights now. The matching is genuinely fast." },
  { name: "Tunde O.", route: "Abuja → Port Harcourt", earned: "₦42k", img: avatar2, quote: "I run this route weekly. It's basically free money for an hour of meet-ups." },
  { name: "Chiamaka E.", route: "Lagos → Accra", earned: "₦96k", img: avatar3, quote: "The escrow flow makes me feel safe accepting from strangers." },
];

export function Earn() {
  return (
    <section id="earn" className="border-t border-border">
      <div className="container-page py-32 md:py-48 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">[ 06 ] Earn while travelling</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-balance">
            Turn your trip<br />into <span className="italic font-light">extra income.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl">
            Most travelers fly with luggage space they never use. Monetize it. Get paid for trips
            you're already making.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <a href="#send" className="inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-foreground/90 transition">
              Become a traveler
            </a>
            <a href="#how" className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-medium hover:bg-secondary transition">
              How payouts work
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border">
            {stories.map((s) => (
              <article key={s.name} className="bg-background p-8">
                <img src={s.img} alt={s.name} width={64} height={64} loading="lazy" className="h-16 w-16 rounded-full object-cover grayscale" />
                <p className="mt-6 font-display text-xl md:text-2xl font-semibold leading-snug tracking-tight text-balance">"{s.quote}"</p>
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium">{s.name}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">{s.route}</div>
                  </div>
                  <div className="font-display font-bold text-coral">+{s.earned}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { useMemo, useState } from "react";

const cities = ["Lagos", "Abuja", "Port Harcourt", "Accra", "London", "Ibadan", "Kano"];

export function Calculator() {
  const [from, setFrom] = useState("Lagos");
  const [to, setTo] = useState("London");
  const [weight, setWeight] = useState(2);

  const { dhl, pasaro, savings } = useMemo(() => {
    const intl = ["London"].includes(to) || ["London"].includes(from);
    const baseDhl = intl ? 60000 : 7500;
    const basePasaro = intl ? 22000 : 2000;
    const dhl = Math.round((baseDhl + weight * (intl ? 35000 : 4500)) / 100) * 100;
    const pasaro = Math.round((basePasaro + weight * (intl ? 12000 : 1500)) / 100) * 100;
    const savings = Math.round(((dhl - pasaro) / dhl) * 100);
    return { dhl, pasaro, savings };
  }, [from, to, weight]);

  const fmt = (n: number) => "₦" + n.toLocaleString();

  return (
    <section id="send" className="border-t border-border">
      <div className="container-page py-32 md:py-48 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">[ 02 ] Live savings</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-balance">
            See what<br />you'd save.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl">
            Compare a typical courier against a Pasaro match in real time. Most shipments save 40–70%.
          </p>

          <div className="mt-16 border-t border-border">
            <div className="grid grid-cols-2 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border-b border-border">
              <Field label="From">
                <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full bg-transparent font-display text-3xl md:text-4xl font-bold tracking-tight focus:outline-none">
                  {cities.map((c) => <option key={c} className="bg-background">{c}</option>)}
                </select>
              </Field>
              <Field label="To">
                <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full bg-transparent font-display text-3xl md:text-4xl font-bold tracking-tight focus:outline-none">
                  {cities.map((c) => <option key={c} className="bg-background">{c}</option>)}
                </select>
              </Field>
              <Field className="border border-red-500 col-span-full sm:col-span-1" label={`Weight — ${weight}kg`}>
                <input
                  type="range" min={1} max={20} value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full mt-4 accent-foreground"
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="py-10 sm:pr-10">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Traditional courier</div>
                <div className="mt-6 font-display text-5xl md:text-6xl font-black line-through decoration-2 text-muted-foreground tracking-tight">{fmt(dhl)}</div>
                <div className="mt-3 text-sm text-muted-foreground">DHL estimate · {weight}kg</div>
              </div>
              <div className="py-10 sm:pl-10">
                <div className="text-xs uppercase tracking-[0.2em] text-coral">With Pasaro</div>
                <div className="mt-6 font-display text-5xl md:text-6xl font-black tracking-tight">{fmt(pasaro)}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-coral" /> You save {savings}%
                </div>
              </div>
            </div>
          </div>

          <a href="#routes" className="mt-10 inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:bg-foreground/90 transition">
            Find travelers on this route →
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-3">{children}</div>
    </div>
  );
}


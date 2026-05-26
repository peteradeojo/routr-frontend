import { useState } from "react";

const sender = [
  { title: "Post your package", body: "Tell us what you're sending, where it's going, and when it needs to arrive." },
  { title: "Match a verified traveler", body: "Browse travelers heading your way. Read reviews. Pick who you trust." },
  { title: "Track & confirm", body: "Follow your package live. Recipient confirms with a one-time PIN." },
];

const traveler = [
  { title: "Publish your trip", body: "Add your route, dates, and the luggage space you have available." },
  { title: "Accept packages en route", body: "Choose what fits. Meet senders at convenient pickup points." },
  { title: "Get paid on delivery", body: "Funds release the moment the recipient confirms receipt." },
];

export function HowItWorks() {
  const [tab, setTab] = useState<"send" | "travel">("send");
  const steps = tab === "send" ? sender : traveler;
  return (
    <section id="how" className="container-page py-32 md:py-48">
      <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">[ 01 ] How it works</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-balance">
            Three steps.<br />
            <span className="text-muted-foreground">One trusted handover.</span>
          </h2>
        </div>
      </div>

      <div className="flex gap-2 mb-12">
        {(["send", "travel"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2.5 text-sm font-medium rounded-full border transition ${
              tab === t
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
            }`}
          >
            {t === "send" ? "I'm sending" : "I'm travelling"}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 border-t border-border">
        {steps.map((s, i) => (
          <div key={s.title} className={`py-10 md:py-14 ${i > 0 ? "md:border-l" : ""} border-border md:px-8 first:pl-0`}>
            <div className="font-display text-xs font-medium tracking-widest text-muted-foreground">0{i + 1} / 03</div>
            <h3 className="mt-8 font-display text-3xl md:text-4xl font-bold tracking-tight leading-tight">{s.title}</h3>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-xs">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


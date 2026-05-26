import { useState } from "react";

const faqs = [
  { q: "What items are allowed?", a: "Documents, electronics, fashion, gifts, and most personal items. Illegal goods, hazardous materials, perishables, and weapons are strictly prohibited." },
  { q: "What if a package gets lost?", a: "Every shipment is covered up to ₦500,000 by Pasaro Protection. We investigate within 48 hours and reimburse senders for verified losses." },
  { q: "How are travelers verified?", a: "Travelers complete government ID verification, a phone & email check, and pass a profile review before they can accept their first package." },
  { q: "How do payments work?", a: "Senders pay upfront. Funds sit in escrow until the recipient confirms delivery using a one-time PIN. Travelers are paid out within 24 hours." },
  { q: "What if delivery fails?", a: "If a traveler can't complete a delivery, the package is rerouted to another verified traveler — or you get a full refund." },
  { q: "Can I track my package?", a: "Yes. You'll see live updates from pickup to handover, and chat with your traveler in-app the whole way." },
  { q: "Is this legal?", a: "Absolutely. Pasaro operates under regulated peer-to-peer logistics frameworks and complies with customs requirements for cross-border deliveries." },
  { q: "What if customs stops the item?", a: "Senders are responsible for declaring goods accurately. We provide pre-flight customs guidance for international routes." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="border-t border-border">
      <div className="container-page py-32 md:py-48 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">[ 07 ] FAQ</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-balance">
            Answers before<br />you ask.
          </h2>

          <div className="mt-16 border-t border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button key={f.q} onClick={() => setOpen(isOpen ? -1 : i)} className="w-full text-left py-7 border-b border-border group">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight pr-4">{f.q}</h3>
                    <span className={`font-display text-2xl shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </div>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground max-w-2xl leading-relaxed text-base">{f.a}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


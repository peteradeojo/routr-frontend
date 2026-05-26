export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page py-12 grid md:grid-cols-4 gap-10 text-sm">
        <div className="md:col-span-1">
          <div className="font-display text-2xl font-black tracking-tight">PASARO</div>
          <p className="mt-3 text-muted-foreground max-w-xs">
            Community-powered deliveries. Cheaper, faster, more human.
          </p>
        </div>
        {[
          { t: "Platform", l: ["Send a package", "Become a traveler", "Pricing", "Trust & safety"] },
          { t: "Company", l: ["About", "Careers", "Press", "Contact"] },
          { t: "Legal", l: ["Terms", "Privacy", "Restricted items", "Insurance policy"] },
        ].map((col) => (
          <div key={col.t}>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{col.t}</div>
            <ul className="mt-4 space-y-2">
              {col.l.map((i) => <li key={i}><a href="#" className="hover:text-muted-foreground transition">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Pasaro</span>
          <span>Lagos · London · Accra</span>
        </div>
      </div>
    </footer>
  );
}


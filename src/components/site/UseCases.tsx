const cases = [
  { title: "Students", body: "Send forgotten essentials between campuses without paying courier prices." },
  { title: "Small businesses", body: "Move products between cities with delivery costs that don't eat your margin." },
  { title: "International travelers", body: "Carry documents or lightweight items and offset the cost of your trip." },
  { title: "Families", body: "Send packages to relatives affordably — and keep a human in the loop." },
  { title: "Expats", body: "Receive items from home through travelers heading your way each week." },
];

export function UseCases() {
  return (
    <section className="border-t border-border">
      <div className="container-page py-32 md:py-48 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">[ 05 ] Made for</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-balance">
            People sending<br />real things to<br />real people.
          </h2>

          <div className="mt-16 border-t border-border">
            {cases.map((c, i) => (
              <div key={c.title} className="grid md:grid-cols-12 gap-6 py-8 border-b border-border">
                <div className="md:col-span-1 font-display text-sm font-medium tracking-widest text-muted-foreground">0{i + 1}</div>
                <div className="md:col-span-5 font-display text-2xl md:text-4xl font-bold tracking-tight">{c.title}</div>
                <div className="md:col-span-6 text-base text-muted-foreground leading-relaxed">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-page md:flex h-20 items-center justify-between">
        <Link to="/" className="text-sm block font-medium tracking-tight py-4 md:py-0">
          Pasaro<span className="text-muted-foreground"> — Cheaper delivery, real travelers</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="#how" className="hover:text-muted-foreground transition-colors">How</a>
          <a href="#trust" className="hover:text-muted-foreground transition-colors">Trust</a>
          <a href="#routes" className="hover:text-muted-foreground transition-colors">Routes</a>
          <a href="#earn" className="hover:text-muted-foreground transition-colors">Earn</a>
          <a href="#send" className="hover:text-muted-foreground transition-colors">Send</a>
        </nav>
      </div>
    </header>
  );
}


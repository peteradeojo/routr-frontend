import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Calculator } from "@/components/site/Calculator";
import { Trust } from "@/components/site/Trust";
import { Routes as LiveRoutes } from "@/components/site/Routes";
import { UseCases } from "@/components/site/UseCases";
import { Earn } from "@/components/site/Earn";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pasaro — Send packages through trusted travelers" },
      { name: "description", content: "Cheaper, faster cross-city delivery powered by verified travelers already heading your way. Save up to 70% vs traditional couriers." },
      { property: "og:title", content: "Pasaro — Send packages through trusted travelers" },
      { property: "og:description", content: "Community-powered logistics. Verified travelers. Escrow-protected delivery." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Calculator />
        <Trust />
        <LiveRoutes />
        <UseCases />
        <Earn />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}


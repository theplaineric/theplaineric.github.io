import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Adventures } from "@/components/Adventures";
import { Building } from "@/components/Building";
import { Currently } from "@/components/Currently";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative selection:bg-accent selection:text-white bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Adventures />
      <Building />
      <Currently />
      <Footer />
    </main>
  );
}

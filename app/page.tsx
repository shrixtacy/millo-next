import { getProducts } from "@/lib/shopify";
import Hero from "@/components/Hero";
import MobileHome from "@/components/mobile/MobileHome";
import Features from "@/components/Features";
import BestSellers from "@/components/BestSellers";
import About from "@/components/About";
import MilloLabel from "@/components/MilloLabel";
import Newsletter from "@/components/Newsletter";

export default async function HomePage() {
  const products = await getProducts(8).catch(() => []);

  return (
    <>
      {/* Mobile layout — full shopping interface */}
      <MobileHome products={products} />

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <Hero />
        <Features />
        <BestSellers products={products} />
        <MilloLabel />
        <About />
        <Newsletter />
      </div>
    </>
  );
}

import { getProducts } from "@/lib/shopify";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BestSellers from "@/components/BestSellers";
import About from "@/components/About";
import TrustBar from "@/components/TrustBar";
import Newsletter from "@/components/Newsletter";

export default async function HomePage() {
  const products = await getProducts(8).catch(() => []);

  return (
    <>
      <Hero />
      <Features />
      <BestSellers products={products} />
      <TrustBar />
      <About />
      <Newsletter />
    </>
  );
}

import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import TheProblem from "@/components/about/TheProblem";
import TheOpportunity from "@/components/about/TheOpportunity";
import OurSolution from "@/components/about/OurSolution";
import WhyOdisha from "@/components/about/WhyOdisha";
import SocialImpact from "@/components/about/SocialImpact";
import CompanyFooter from "@/components/about/CompanyFooter";

export const metadata: Metadata = {
  title: "About Millo — Our Story, Mission & Team",
  description:
    "Millo by Nutriswift Foods transforms Odisha-grown millets into modern, healthy packaged foods. Learn about our mission, farmer impact, and team.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pt-16 overflow-x-hidden">
      <AboutHero />
      <TheProblem />
      <TheOpportunity />
      <OurSolution />
      <WhyOdisha />
      <SocialImpact />
      <CompanyFooter />
    </div>
  );
}

import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { Topbar } from "@/components/layout/Topbar";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { LoanSolutions } from "@/components/sections/LoanSolutions";
import { BankPartners } from "@/components/sections/BankPartners";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent-orange selection:text-white ">
      <Topbar />
      <div className="flex flex-col max-w-[1600px] mx-auto">
        <ScrollReveal><Navbar /></ScrollReveal>
        <ScrollReveal delay={0.2}><Hero /></ScrollReveal>
        <ScrollReveal><TrustMetrics /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><WhyChoose /></ScrollReveal>
        <ScrollReveal><LoanSolutions /></ScrollReveal>
        <ScrollReveal><BankPartners /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><Blog /></ScrollReveal>
        <ScrollReveal><Footer /></ScrollReveal>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <div className="w-full mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 bg-background">
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-6xl lg:text-[80px] font-bold leading-[0.95] tracking-tight text-foreground">
            <span className="block">Got an</span>
            <span className="block text-accent-orange">interesting</span>
            <span className="block text-accent-orange">problem?</span>
            <span className="block">Let's talk about</span>
            <span className="block">it.</span>
          </h2>
        </div>

        <div className="lg:w-1/3 flex flex-col justify-end">
          <p className="text-[15px] text-muted-text mb-8 leading-relaxed max-w-[400px]">
            I am always open to conversations about product, design, and technology - especially the kind that don't have an obvious answer yet. I read every message.
          </p>

          <button className="bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center w-fit mb-10">
            Get in touch <span className="ml-2 text-lg">→</span>
          </button>

          <div className="flex items-center space-x-6 text-[13px] font-medium">
            <Link href="#" className="border-b border-border pb-0.5 hover:border-foreground transition-colors inline-flex items-center">
              Email <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
            </Link>
            <Link href="#" className="border-b border-border pb-0.5 hover:border-foreground transition-colors inline-flex items-center">
              LinkedIn <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
            </Link>
            <Link href="#" className="border-b border-border pb-0.5 hover:border-foreground transition-colors inline-flex items-center">
              GitHub <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full mx-auto px-6 pb-12 bg-background">
        <div className="border-t border-border pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-4">
              © 2026 AANAND MADHAV
            </div>
            <p className="text-[13px] text-muted-text">
              Built in New Delhi. Product, design, and code.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-6">
              WORK
            </div>
            <ul className="space-y-3 text-[13.5px] text-foreground font-medium">
              <li><Link href="#" className="hover:opacity-70 transition-opacity">My Debt Plan</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Emirates Mars Mission</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Calypso</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-6">
              WRITING
            </div>
            <ul className="space-y-3 text-[13.5px] text-foreground font-medium">
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Design</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Development</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Management</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Philosophy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-6">
              MORE
            </div>
            <ul className="space-y-3 text-[13.5px] text-foreground font-medium">
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Find Me</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Books</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition-opacity">Events</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

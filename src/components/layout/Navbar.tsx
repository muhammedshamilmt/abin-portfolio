import Link from "next/link";
import { ChevronDown, ArrowRight, ShieldCheck, HeartPulse, Landmark, TrendingUp } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-1 w-full mx-auto border-b border-border bg-background relative z-50">
      {/* Left: Logo & Name */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded bg-foreground flex items-center justify-center overflow-hidden">
          <span className="text-sm font-bold text-background ">FC</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm tracking-wide leading-tight">SB Abin</span>
          <span className="text-[9px] text-muted-text uppercase tracking-widest font-mono">Advisory Services</span>
        </div>
      </div>

      {/* Middle: Links */}
      <div className="hidden lg:flex items-center space-x-8 text-[13px] font-medium">
        <Link href="#" className="relative text-foreground pb-1 border-b-2 border-accent-orange">
          Home
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors pb-1">
          About
        </Link>

        {/* Mega Menu Dropdown */}
        {/* <div className="group py-4"> */}
        <div className=" py-4">
          <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors pb-1 outline-none">
            Services <ChevronDown className="ml-1 w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
          </button>

          <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="max-w-[1600px] mx-auto p-8 flex">
              <div className="grid grid-cols-4 gap-8 w-3/4 pr-8 border-r border-border/50">

                {/* Loans */}
                <div>
                  <div className="flex items-center space-x-2 text-foreground font-semibold mb-4">
                    <Landmark className="w-4 h-4 text-accent-orange" />
                    <span>Loans</span>
                  </div>
                  <ul className="space-y-3 text-[13px] text-muted-foreground">
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Home Loan</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Personal Loan</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Business Loan</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Vehicle Loan</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Project Loan</Link></li>
                  </ul>
                </div>

                {/* Life Insurance */}
                <div>
                  <div className="flex items-center space-x-2 text-foreground font-semibold mb-4">
                    <ShieldCheck className="w-4 h-4 text-accent-orange" />
                    <span>Life Insurance</span>
                  </div>
                  <ul className="space-y-3 text-[13px] text-muted-foreground">
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Term Insurance</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Endowment Plans</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">ULIP</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Retirement Plans</Link></li>
                  </ul>
                </div>

                {/* Health Insurance */}
                <div>
                  <div className="flex items-center space-x-2 text-foreground font-semibold mb-4">
                    <HeartPulse className="w-4 h-4 text-accent-orange" />
                    <span>Health Insurance</span>
                  </div>
                  <ul className="space-y-3 text-[13px] text-muted-foreground">
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Family Plans</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Senior Citizen Plans</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Critical Illness</Link></li>
                  </ul>
                </div>

                {/* Mutual Funds */}
                <div>
                  <div className="flex items-center space-x-2 text-foreground font-semibold mb-4">
                    <TrendingUp className="w-4 h-4 text-accent-orange" />
                    <span>Mutual Funds</span>
                  </div>
                  <ul className="space-y-3 text-[13px] text-muted-foreground">
                    <li><Link href="#" className="hover:text-foreground transition-colors block">SIP Planning</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Lump Sum Investment</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Goal-Based Investing</Link></li>
                    <li><Link href="#" className="hover:text-foreground transition-colors block">Wealth Creation</Link></li>
                  </ul>
                </div>
              </div>

              {/* Right CTA Box */}
              <div className="w-1/4 pl-8 flex flex-col justify-center">
                <div className="bg-secondary/50 p-6 border border-border/50 rounded-sm">
                  <h4 className=" text-xl font-medium mb-2 text-foreground">Not sure where to start?</h4>
                  <p className="text-[13px] text-muted-text mb-4 leading-relaxed">
                    Let's analyze your financial health and pick the best strategy for your goals.
                  </p>
                  <Link href="#" className="text-sm font-medium border-b border-foreground pb-0.5 inline-flex items-center hover:text-accent-orange hover:border-accent-orange transition-colors">
                    Get Free Portfolio Review <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors pb-1">
          Blog
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors pb-1">
          Resources
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors pb-1">
          Testimonials
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors pb-1">
          Contact
        </Link>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center">
        <button className="bg-accent-orange text-white px-5 py-2.5 text-[13px] font-medium hover:bg-accent-orange/90 transition-colors flex items-center shadow-sm">
          Book Consultation <ArrowRight className="ml-1.5 w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}

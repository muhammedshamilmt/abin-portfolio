import { CheckCircle2 } from "lucide-react";

export function About() {
  const credentials = [
    "MBA in Finance",
    "Mutual Fund Distributor",
    "NISM Certified",
    "Insurance Advisor",
    "Financial Planning Expert",
    "10+ Years Experience"
  ];

  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32 border-t border-border/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left: Image with Overlay */}
        <div className="relative">
          {/* Decorative background element */}
          <div className="absolute inset-0 bg-secondary/50 -translate-x-4 -translate-y-4 rounded-sm"></div>

          <img
            src="/images/image-2.jpeg"
            alt="Consultant Portrait"
            className="w-full h-[600px] object-cover relative z-10  transition-all duration-700"
          />

          {/* Overlay Name Card */}
          <div className="absolute -bottom-8 -right-8 md:right-8 bg-background border border-border p-6 shadow-xl z-20 w-[280px]">
            <h3 className=" text-2xl font-bold mb-1">SB Abin</h3>
            <div className="text-[10px] text-accent-orange font-mono uppercase tracking-widest mb-4">Lead Financial Strategist</div>
            <p className="text-[12px] text-muted-text italic leading-relaxed">
              "My goal is simple: to help you build wealth, protect it, and pass it on with absolute clarity."
            </p>
          </div>
        </div>

        {/* Right: Content & Credentials */}
        <div className="flex flex-col justify-center mt-12 lg:mt-0">
          <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono flex space-x-6 mb-6">
            <span>02 / ABOUT THE ADVISOR</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold  text-foreground mb-8">
            Navigating the complexities of finance, <span className="text-accent-orange">simplified for you.</span>
          </h2>

          <div className="prose prose-sm text-muted-text mb-10 leading-relaxed">
            <p className="mb-4">
              With over a decade of experience in the financial sector, I've seen firsthand how overwhelming wealth management can be for individuals and families. The jargon, the hidden fees, and the sheer volume of options can paralyze decision-making.
            </p>
            <p>
              My mission is to bring transparency and strategy to your financial life. Whether we are structuring a loan for your dream home, setting up a robust health insurance safety net, or aggressive wealth creation through mutual funds—I sit on your side of the table.
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="bg-secondary/20 p-8 border border-border/50">
            <h4 className="text-[11px] uppercase tracking-widest font-mono text-foreground mb-6 border-b border-border/50 pb-3">
              Professional Credentials
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-accent-orange flex-shrink-0" />
                  <span className="text-[13px] text-foreground font-medium">{cred}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

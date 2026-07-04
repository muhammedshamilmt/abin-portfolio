import { ArrowRight, Building, Home, Briefcase, Car, Wallet } from "lucide-react";

export function LoanSolutions() {
  const loans = [
    {
      title: "Personal Loan",
      icon: <Wallet className="w-5 h-5 text-accent-orange" />,
      desc: "Quick access to funds for medical emergencies, travel, or weddings."
    },
    {
      title: "Business Loan",
      icon: <Briefcase className="w-5 h-5 text-accent-orange" />,
      desc: "Working capital and expansion loans tailored to your business scale."
    },
    {
      title: "Home Loan",
      icon: <Home className="w-5 h-5 text-accent-orange" />,
      desc: "Lowest interest rates for purchasing or constructing your dream house."
    },
    {
      title: "Vehicle Loan",
      icon: <Car className="w-5 h-5 text-accent-orange" />,
      desc: "Up to 100% financing options for your next car or two-wheeler."
    },
    {
      title: "Project Loan",
      icon: <Building className="w-5 h-5 text-accent-orange" />,
      desc: "Large-scale infrastructure and industrial project financing."
    }
  ];

  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32 border-t border-border/50 bg-secondary/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-6">
            04 / LOAN SOLUTIONS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold  text-foreground mb-6">
            Fuel your ambitions with the right capital.
          </h2>
          
          <p className="text-[15px] text-muted-text leading-relaxed mb-10 max-w-lg">
            Securing a loan shouldn't be a maze of paperwork and hidden charges. We analyze your credit profile, match you with the best banking partners, and negotiate the lowest possible rates on your behalf.
          </p>

          {/* Graphic placeholder */}
          <div className="relative w-full max-w-md h-64 bg-background border border-border/60 p-6 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-orange/10 via-background to-background"></div>
            <div className="text-center relative z-10">
              <div className="text-[40px]  text-accent-orange font-bold mb-2">98%</div>
              <div className="text-xs uppercase tracking-widest font-mono text-muted-text">Approval Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {loans.map((loan, idx) => (
              <div key={idx} className="bg-background border border-border/50 p-6 hover:border-accent-orange transition-all group cursor-pointer">
                <div className="flex items-center space-x-3 mb-4">
                  {loan.icon}
                  <h3 className="font-medium text-foreground text-lg">{loan.title}</h3>
                </div>
                <p className="text-[13px] text-muted-text leading-relaxed mb-6">
                  {loan.desc}
                </p>
                <div className="text-[11px] font-mono uppercase tracking-widest text-foreground group-hover:text-accent-orange transition-colors flex items-center">
                  Apply Now <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

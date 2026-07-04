import Link from "next/link";
import { Landmark, ShieldCheck, HeartPulse, TrendingUp, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Loans",
      icon: <Landmark className="w-8 h-8 mb-6 text-accent-orange" />,
      description: "Fast-track approvals for Home, Personal, Business, Vehicle, and Project loans with optimal interest rates.",
    },
    {
      title: "Life Insurance",
      icon: <ShieldCheck className="w-8 h-8 mb-6 text-accent-orange" />,
      description: "Secure your family's future with tailored Term Insurance, Endowment, ULIP, and Retirement planning.",
    },
    {
      title: "Health Insurance",
      icon: <HeartPulse className="w-8 h-8 mb-6 text-accent-orange" />,
      description: "Comprehensive coverage including Family Plans, Senior Citizen care, and Critical Illness protection.",
    },
    {
      title: "Mutual Funds",
      icon: <TrendingUp className="w-8 h-8 mb-6 text-accent-orange" />,
      description: "Strategic wealth creation through SIPs, Goal-Based Investing, and optimized Lump Sum placements.",
    }
  ];

  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32">
      <div className="mb-16">
        <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono flex space-x-6 mb-4">
          <span>01 / EXPERTISE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold  text-foreground max-w-2xl">
          Comprehensive financial solutions tailored for you.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border border-border/60 p-8 flex flex-col hover:border-accent-orange/50 transition-colors group cursor-pointer bg-background">
            {service.icon}
            <h3 className="text-xl font-medium text-foreground mb-4">{service.title}</h3>
            <p className="text-[13px] text-muted-text leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>
            <div className="flex items-center text-sm font-medium text-foreground group-hover:text-accent-orange transition-colors">
              Explore {service.title} <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

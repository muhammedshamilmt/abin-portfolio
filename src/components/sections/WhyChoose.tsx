import { Target, Users, Zap, Award } from "lucide-react";

export function WhyChoose() {
  const reasons = [
    {
      title: "Personalized Advice",
      description: "No cookie-cutter plans. Every strategy is built from scratch based on your specific income, goals, and risk appetite.",
      icon: <Target className="w-6 h-6 text-accent-orange" />
    },
    {
      title: "Transparent Guidance",
      description: "Complete clarity on fees, commissions, and risks. You will always know exactly where your money is going.",
      icon: <Users className="w-6 h-6 text-accent-orange" />
    },
    {
      title: "Fast Approval Support",
      description: "Leveraging strong banking partnerships to expedite your loan processing and minimize paperwork friction.",
      icon: <Zap className="w-6 h-6 text-accent-orange" />
    },
    {
      title: "Certified Expertise",
      description: "Backed by industry certifications and rigorous ongoing education to keep you ahead of market curves.",
      icon: <Award className="w-6 h-6 text-accent-orange" />
    }
  ];

  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32 border-t border-border/50">
      <div className="mb-16 md:text-center flex flex-col md:items-center">
        <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-4">
          03 / WHY CHOOSE ME
        </div>
        <h2 className="text-4xl md:text-5xl font-bold  text-foreground max-w-2xl">
          Built on trust, driven by results.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <div key={index} className="flex space-x-6 p-8 bg-secondary/10 border border-border/50 hover:border-accent-orange/30 transition-colors">
            <div className="mt-1 flex-shrink-0">
              {reason.icon}
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground mb-3">{reason.title}</h3>
              <p className="text-[14px] text-muted-text leading-relaxed">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

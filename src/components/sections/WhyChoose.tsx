export function WhyChoose() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Situation",
      description:
        "We take the time to understand your financial goals, income, commitments, existing policies, investments, and future plans.",
    },
    {
      number: "02",
      title: "Identify the Real Problem",
      description:
        "We don't simply focus on the product you ask for. We look deeper to understand the actual financial challenge or requirement behind it.",
    },
    {
      number: "03",
      title: "Find the Right Solution",
      description:
        "Based on your needs, financial capacity, and goals, we help you explore suitable financial solutions and options.",
    },
    {
      number: "04",
      title: "Explain Before You Decide",
      description:
        "We believe informed decisions are better decisions. We help you understand the key features, benefits, costs, terms, and limitations before you make a decision.",
    },
    {
      number: "05",
      title: "Support Beyond the Purchase",
      description:
        "Our relationship doesn't end once a product is purchased. We remain available to assist you with service requirements, renewals, documentation, and your evolving financial needs.",
    },
  ];

  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32 border-t border-border/50">
      {/* Header */}
      <div className="mb-16">
        <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-4">
          03 / WHY CHOOSE US
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            We Don't Start With Products.{" "}
            <span className="text-accent-orange">We Start With You.</span>
          </h2>
          <div className="flex flex-col justify-center">
            <p className="text-[14px] text-muted-text leading-relaxed mb-4">
              Every individual has a different financial situation, different
              responsibilities, different goals, and different challenges.
            </p>
            <p className="text-[14px] text-muted-text leading-relaxed">
              At SB Financial Services, we believe that financial solutions
              should never be one-size-fits-all. We first understand your
              situation, identify your actual financial needs, analyse the
              challenges you are facing, and then help you find the right
              solution.
            </p>
          </div>
        </div>
      </div>

      {/* Approach label */}
      <div className="flex items-center space-x-4 mb-10">
        <span className="text-[10px] uppercase tracking-widest text-muted-text font-mono">
          Our Approach
        </span>
        <div className="flex-1 border-t border-border/50" />
        <span className="text-[11px] text-accent-orange font-mono tracking-widest">
          Understand → Identify → Analyse → Recommend → Support
        </span>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex space-x-6 p-8 bg-secondary/10 border border-border/50 hover:border-accent-orange/30 transition-colors"
          >
            <div className="flex-shrink-0">
              <span className="text-[11px] font-mono text-accent-orange tracking-widest">
                {step.number}
              </span>
            </div>
            <div>
              <h3 className="text-[15px] font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-[13px] text-muted-text leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}

        {/* Philosophy card */}
        <div className="p-8 bg-accent-orange/5 border border-accent-orange/30 flex flex-col justify-between">
          <p className="text-[13px] text-muted-text leading-relaxed italic mb-6">
            "We don't believe in selling a product simply because it is
            available. We believe in finding the right solution because you
            actually need it."
          </p>
          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-accent-orange mb-1">
              Our Philosophy
            </p>
            <p className="text-[13px] font-medium text-foreground">
              Your Need. Your Goal. Your Solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

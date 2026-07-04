import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Or use text fallback

export function Lab() {
  const experiments = [
    {
      status: "WON WEBBY AWARD",
      statusColor: "text-accent-orange",
      dotColor: "bg-accent-orange",
      category: "AI EXPERIMENTAL",
      title: "My First Voice",
      description: "Use AI to give non-verbal children a personalised voice that sounds like them, preserving local accent and cultural identity.",
    },
    {
      status: "ACTIVE",
      statusColor: "text-accent-orange",
      dotColor: "bg-accent-orange",
      category: "AI CAMPAIGNS",
      title: "AI marketing activation systems",
      description: "Personalised video generation, custom graphics, WhatsApp-based flows. AI at production scale.",
    },
    {
      status: "COMPLETED",
      statusColor: "text-muted-text",
      dotColor: "bg-muted-text",
      category: "CONTENT AI",
      title: "AI UGC & content pipelines",
      description: "Created video ads with AI for a huge FMCG brand in India - from brief to final assets.",
    }
  ];

  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32 border-t border-border ">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-6 md:mb-8 flex space-x-6">
            <span>03 / LAB</span>
            <span>MEDIAMEN SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-[44px] font-medium tracking-tight text-foreground max-w-3xl leading-[1.15]">
            Where I build things that<br className="hidden md:block" /> don't have a brief yet.
          </h2>
        </div>
        <div className="shrink-0">
          <Link href="#" className="text-sm font-medium border-b border-foreground pb-1 inline-flex items-center hover:opacity-70 transition-opacity">
            View all experiments <span className="ml-1  text-lg leading-none">↗</span>
          </Link>
        </div>
      </div>

      {/* List */}
      <div className="border-t border-border">
        {experiments.map((item, index) => (
          <Link
            key={index}
            href="#"
            className="group flex flex-col md:flex-row md:items-start py-8 border-b border-border hover:bg-secondary/30 transition-colors"
          >
            {/* Status & Category Columns */}
            <div className="flex flex-row md:flex-col lg:flex-row md:w-1/3 lg:w-2/5 gap-4 md:gap-8 mb-4 md:mb-0">
              <div className={`w-32 lg:w-40 flex items-center space-x-2 text-[9px] uppercase tracking-widest font-mono ${item.statusColor}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`}></span>
                <span className="leading-tight max-w-[100px]">{item.status}</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mt-0.5">
                {item.category}
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 pr-8">
              <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-[15px] text-muted-text leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center self-stretch opacity-30 group-hover:opacity-100 transition-opacity pl-4">
              <span className=" text-xl">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer text */}
      <div className="mt-16 text-[15px] text-muted-text max-w-lg leading-relaxed">
        <p>Some experiments become client solutions. Some stay as internal tools.</p>
        <p>Some just teach me something useful.</p>
      </div>
    </section>
  );
}

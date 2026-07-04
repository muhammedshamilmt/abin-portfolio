import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Blog() {
  const articles = [
    {
      category: "MARKET INSIGHTS",
      readTime: "5 MIN READ",
      date: "OCT 2026",
      title: "Why SIPs are the Best Strategy During Market Volatility",
      description: "Understanding how rupee cost averaging works in your favor when the market takes a dip.",
      image: "https://aanandmadhav.com/_next/image?url=%2Fimages%2FLife%2FTravel%2Feurope%2Farticle-cover.png&w=3840&q=75"
    },
    {
      category: "PERSONAL FINANCE",
      readTime: "8 MIN READ",
      date: "SEP 2026",
      title: "Term Insurance vs. Endowment Plans: What You Should Know",
      description: "A deep dive into why keeping insurance and investment separate is usually the smartest financial move.",
      image: "https://aanandmadhav.com/_next/image?url=%2Fimages%2FLife%2FTravel%2Feurope%2Farticle-cover.png&w=3840&q=75"
    }
  ];

  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32">
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono flex space-x-6 mb-4">
            <span>06 / RESOURCES & BLOG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold  text-foreground">
            Financial Insights.
          </h2>
        </div>
        <Link href="#" className="text-sm font-medium border-b border-foreground pb-0.5 inline-flex items-center hover:text-accent-orange hover:border-accent-orange transition-colors">
          View all articles <ArrowRight className="ml-1 w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {articles.map((article, idx) => (
          <article key={idx} className="group cursor-pointer">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-secondary/30 mb-8 overflow-hidden relative">
              {/* <div className="absolute inset-0 bg-secondary flex items-center justify-center text-muted-foreground/30 font-mono text-[10px]">
                [Image Placeholder]
              </div> */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover  group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 relative z-10"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center space-x-4 text-[9px] uppercase tracking-widest text-muted-text font-mono mb-4">
              <span className="text-accent-orange">{article.category}</span>
              <span>{article.readTime}</span>
              <span>{article.date}</span>
            </div>

            {/* Title & Desc */}
            <h3 className="text-2xl  font-bold text-foreground mb-4 group-hover:text-accent-orange transition-colors">
              {article.title}
            </h3>
            <p className="text-[14px] text-muted-text leading-relaxed">
              {article.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

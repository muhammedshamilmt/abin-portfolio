import Link from "next/link";

export function Writing() {
  const articles = [
    {
      category: "DEVELOPMENT",
      readTime: "6 MIN READ",
      date: "JUL 2026",
      title: "How I Consolidated Judge.me Reviews Across 3,000+ Variants",
      description: "A Shopify migration note on consolidating 2,600+ scattered product reviews across 450+ style-code parents without relying on product groups.",
      tag: "SHOPIFY"
    },
    {
      category: "DEVELOPMENT",
      readTime: "7 MIN READ",
      date: "JUL 2026",
      title: "I Built a WordPress Plugin Without Touching the Code. Here's the Setup.",
      description: "How I used a local AI-agent workflow, WordPress Studio, WP-CLI, and a disposable sandbox to build Consentinel, a self-hosted cookie consent plugin.",
      tag: "WORDPRESS"
    }
  ];

  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32">
      {/* Section Header */}
      <div className="mb-12">
        <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono flex space-x-6">
          <span>04 / WRITING</span>
          <span>FROM THE ARCHIVE</span>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col">
            <div className="border-t border-border pt-4 mb-6 flex justify-between items-center text-[9px] uppercase tracking-widest text-muted-text font-mono">
              <span>{article.category} · {article.readTime}</span>
              <span>{article.date}</span>
            </div>
            
            <h3 className="text-3xl md:text-[34px]  text-foreground mb-4 leading-[1.2] tracking-tight">
              {article.title}
            </h3>
            
            <p className="text-[14px] text-muted-text mb-8 leading-relaxed max-w-lg font-light">
              {article.description}
            </p>
            
            <div className="mt-auto flex items-center space-x-4">
              <span className="text-[9px] uppercase tracking-widest text-muted-text font-mono">{article.tag}</span>
              <Link href="#" className="text-[13px] text-foreground border-b border-border pb-0.5 hover:border-foreground transition-colors inline-flex items-center">
                Read the piece <span className="ml-1 ">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Section Footer */}
      <div className="mt-16 md:mt-24 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono">
          8 ARTICLES · WORDPRESS, UX, PRODUCT, TOOLS
        </div>
        <Link href="#" className="text-[13px] font-medium text-foreground border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity inline-flex items-center">
          All writing <span className="ml-1  text-base leading-none">↗</span>
        </Link>
      </div>
    </section>
  );
}

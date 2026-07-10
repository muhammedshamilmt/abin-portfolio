import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      text: "The financial restructuring plan they created for me was nothing short of brilliant. My loans are consolidated and I finally see a clear path to being debt-free.",
      author: "Akhil",
      role: "USA",
      rating: 5
    },
    {
      text: "Extremely transparent and trustworthy. They guided me through mutual fund investments that perfectly aligned with my retirement goals. Highly recommended.",
      author: "Rajesh Kumar",
      role: "IT Professional",
      rating: 5
    },
    {
      text: "I was struggling to get a home loan approved due to a complex credit history. They stepped in, navigated the banking requirements, and got it done in two weeks.",
      author: "Sneha Patel",
      role: "Architect",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="w-full mx-auto px-6 py-24 lg:py-32 border-t border-border/50">
      <div className="mb-16 md:text-center flex flex-col md:items-center">
        <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-4">
          05 / CLIENT SUCCESS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold  text-foreground max-w-2xl">
          Don't just take my word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="bg-background border border-border/60 p-8 hover:border-accent-orange/50 transition-colors flex flex-col">
            <div className="flex space-x-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent-orange fill-accent-orange" />
              ))}
            </div>
            <p className="text-[15px] text-muted-text leading-relaxed  italic mb-8 flex-grow">
              "{review.text}"
            </p>
            <div>
              <div className="font-semibold text-foreground">{review.author}</div>
              <div className="text-[11px] uppercase tracking-widest font-mono text-muted-text">{review.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

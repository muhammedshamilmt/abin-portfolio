import Link from "next/link";

export function Life() {
  return (
    <section className="w-full mx-auto min-h-[80vh] px-6 py-24 lg:py-32 border-t border-border/50">
      <div className="mb-8">
        <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono flex space-x-6">
          <span>05 / LIFE</span>
          <span>OUTSIDE THE WORK</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left: Image with Badge */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] bg-secondary/50 border border-border flex flex-col justify-end overflow-hidden group">
          <img
            src="https://aanandmadhav.com/_next/image?url=%2Fimages%2FLife%2FTravel%2Feurope%2Farticle-cover.png&w=3840&q=75"
            alt="Life travel cover"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Badge */}
          <div className="relative z-10 m-4 bg-[#f4f0e6] px-4 py-2 inline-flex items-center space-x-3 w-fit text-[9px] uppercase tracking-widest text-muted-text font-mono border border-border/50">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange"></span>
            <span>PARIS · NOV 2025 · WEB SUMMIT</span>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="max-w-xl">
          <p className="text-2xl md:text-3xl lg:text-[34px]  text-foreground leading-[1.3] tracking-tight mb-8">
            The struggle made the approval sweeter. The uncertainty made the arrival meaningful. Going solo made me realize I don't need perfect conditions to begin.
          </p>

          <Link href="#" className="text-[13px] font-medium text-foreground border-b border-foreground pb-0.5 hover:opacity-70 transition-opacity inline-flex items-center">
            Read the full story <span className="ml-1  text-base leading-none">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

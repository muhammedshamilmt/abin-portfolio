export function TrustMetrics() {
  return (
    <section className="w-full bg-foreground text-background py-16 rounded-2xl">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-background/20">

          <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-bold mb-2  text-accent-orange">5+</div>
            <div className="text-[11px] uppercase tracking-widest font-mono text-background/70">Years Experience</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-bold mb-2  text-accent-orange">500+</div>
            <div className="text-[11px] uppercase tracking-widest font-mono text-background/70">Happy Clients</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-bold mb-2  text-accent-orange">₹50 Cr+</div>
            <div className="text-[11px] uppercase tracking-widest font-mono text-background/70">Assets Managed</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-0">
            <div className="text-4xl md:text-5xl font-bold mb-2  text-accent-orange">1000+</div>
            <div className="text-[11px] uppercase tracking-widest font-mono text-background/70">Financial Plans</div>
          </div>

        </div>
      </div>
    </section>
  );
}

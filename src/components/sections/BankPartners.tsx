export function BankPartners() {
  const row1 = [
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=SBI",
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=HDFC",
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=ICICI",
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=Axis+Bank",
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=Kotak"
  ];
  const row2 = [
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=IDFC+First",
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=Yes+Bank",
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=Federal+Bank",
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=CSB+Bank",
    "https://placehold.co/200x80/e6e0d4/1c1b1a?text=Canara+Bank"
  ];

  return (
    <section className="w-full mx-auto py-24 border-t border-border/50 overflow-hidden bg-background">
      <div className="text-center mb-12 flex justify-center px-6">
        <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono inline-flex items-center space-x-4 before:h-px before:w-12 before:bg-border/50 after:h-px after:w-12 after:bg-border/50">
          Trusted Banking Partners
        </div>
      </div>

      {/* Row 1: Marquee Left */}
      <div className="w-full inline-flex flex-nowrap mb-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center space-x-12 animate-marquee-left">
          {[...row1, ...row1, ...row1].map((logo, idx) => (
            <img key={idx} src={logo} alt="Bank Logo" className="w-[180px] h-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          ))}
        </div>
      </div>

      {/* Row 2: Marquee Right */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center space-x-12 animate-marquee-right">
          {[...row2, ...row2, ...row2].map((logo, idx) => (
            <img key={idx} src={logo} alt="Bank Logo" className="w-[180px] h-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function Hero() {
  return (
    <main className="w-full mx-auto px-6 min-h-[80vh] flex items-center border-b border-border pt-8 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative w-full">

        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-8 md:mb-12">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-orange border border-[#f4f0e6]"></span>
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-muted-text font-mono">
              Expert Financial Advisory Services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-[1.0] tracking-tighter mb-8 text-foreground">
            Helping <span className="text-accent-orange">Individuals</span> Make Better <span className="text-accent-orange">Financial</span> Decisions
          </h1>

          <p className="text-lg md:text-xl text-muted-text max-w-[500px] mb-10 leading-relaxed font-light flex items-center space-x-2">
            <span>Health Insurance</span>
            <span className="text-accent-orange font-bold">·</span>
            <span>Life Insurance</span>
            <span className="text-accent-orange font-bold">·</span>
            <span>Mutual Funds</span>
            <span className="text-accent-orange font-bold">·</span>
            <span>Loans</span>
          </p>

          <div className="flex items-center space-x-4">
            <Link href="/book" className="bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center w-fit shadow-lg">
              Book Consultation
            </Link>
            <button className="bg-transparent border border-border text-foreground px-8 py-4 text-sm font-medium hover:bg-border/50 transition-colors flex items-center w-fit">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Content - Image & Floating Card */}
        <div className="lg:col-span-5 relative flex flex-col justify-end mt-12 lg:mt-0 min-h-[500px]">

          {/* Main Professional Image (using placeholder for now) */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 bottom-0 h-32 mt-auto"></div> */}

          <div className="w-full h-full flex justify-center items-end relative z-0">
            {/* Soft gradient background for the image */}
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#f4f0e6] to-white/50 rounded-tl-full rounded-tr-full scale-90 -z-10"></div> */}

            <img
              src="https://aanandmadhav.com/_next/image?url=%2Fimages%2Faanand-avatar.webp&w=1920&q=75"
              alt="Financial Consultant Portrait"
              className="w-full max-w-[450px] h-auto object-contain filter drop-shadow-2xl relative z-0"
            />
          </div>

          {/* Floating Identity Card */}
          <div className="absolute bottom-20 -left-12 bg-background border border-border shadow-2xl p-5 w-64 z-20 hidden md:block">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-orange/10 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-accent-orange  font-bold text-xl">FC</span>
              </div>
              <div>
                <div className="font-semibold text-sm mb-0.5">Certified Advisor</div>
                <div className="text-[10px] text-muted-text font-mono uppercase tracking-widest mb-2">SEBI Registered</div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-text">Available for consulting</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

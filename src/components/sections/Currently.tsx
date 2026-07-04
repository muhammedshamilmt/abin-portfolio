export function Currently() {
  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32 border-t border-border/50">
      {/* Section Header */}
      <div className="mb-16">
        <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono flex space-x-6 mb-8">
          <span>01 / NOW</span>
          <span>CURRENTLY</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <p className="text-[15px] text-muted-text max-w-lg leading-relaxed">
            A live snapshot of what is moving right now: work, learning, coffee, fermentation, and the current book on the nightstand.
          </p>
          <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono shrink-0">
            UPDATED APR 2026
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-col gap-6">

        {/* Top Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Work Card */}
          <div className="border border-border/60 p-8 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="text-[9px] uppercase tracking-widest text-muted-text font-mono mb-4">WORK</div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Leading CRM architecture and D2C growth systems</h3>
            </div>
            <p className="text-[13px] text-muted-text leading-relaxed">
              Leading CRM architecture for the UK IVA industry and driving UX, funnel, and conversion work across D2C revenue environments.
            </p>
          </div>

          {/* Learning Card */}
          <div className="border border-border/60 p-8 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="text-[9px] uppercase tracking-widest text-muted-text font-mono mb-4">LEARNING</div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Mastering MCP for local agent workflows</h3>
            </div>
            <p className="text-[13px] text-muted-text leading-relaxed">
              Tightening local AI workflows around better context, better tools, and fewer handoffs between thought and execution.
            </p>
          </div>
        </div>

        {/* Bottom Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Coffee Card */}
          <div className="border border-border/60 p-8 flex flex-col relative overflow-hidden min-h-[480px]">
            <div className="text-[9px] uppercase tracking-widest text-muted-text font-mono mb-4">COFFEE</div>
            <h3 className="text-xl font-medium text-foreground mb-2">Vienna Roast</h3>
            <p className="text-[13px] text-muted-text">Third Wave Coffee · Blend</p>

            {/* Visual element centered in the bottom half */}
            <div className="mt-auto flex flex-col items-center justify-center pt-16 pb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-5 h-5 rounded-full bg-[#3d2314] shadow-sm"></div>
                <div className="w-5 h-5 rounded-full bg-[#2a170d] shadow-sm"></div>
                <div className="w-6 h-6 rounded-full border-2 border-[#e6e2d8] flex items-center justify-center text-[8px] font-mono text-muted-text"></div>
                <span className="text-[9px] font-mono text-muted-text uppercase tracking-widest ml-2">2 SHOTS TODAY</span>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-foreground mb-1">Vienna Roast</div>
                <div className="text-[8px] uppercase tracking-widest text-muted-text font-mono mb-3">THIRD WAVE COFFEE · BLEND</div>
                <div className="text-[8px] uppercase tracking-widest text-muted-text font-mono">ESPRESSO · MOKA POT ON SLOW DAYS</div>
              </div>
            </div>
          </div>

          {/* Kombucha Card */}
          <div className="border border-border/60 p-8 flex flex-col relative overflow-hidden min-h-[480px]">
            <div className="text-[9px] uppercase tracking-widest text-muted-text font-mono mb-4">KOMBUCHA</div>
            <h3 className="text-xl font-medium text-foreground mb-2">Batch #43</h3>
            <p className="text-[13px] text-muted-text">Falsa & Ginger Lemon</p>

            {/* Visual element */}
            <div className="mt-auto flex flex-col items-center justify-center pt-16 pb-8">
              <div className="text-[8px] uppercase tracking-widest text-muted-text font-mono mb-6">BATCH #43· FALSA & GINGER LEMON</div>

              {/* Jar Graphic */}
              <div className="relative w-20 h-28 mb-6">
                <div className="absolute top-0 inset-x-0 mx-auto w-12 h-3 bg-[#e6e2d8] rounded-t-sm z-10"></div>
                <div className="absolute top-3 inset-x-0 mx-auto w-14 h-2 bg-[#d4cfc1] z-10 rounded-sm"></div>
                <div className="absolute top-5 inset-0 border-2 border-[#e6e2d8] rounded-[10px] overflow-hidden bg-transparent">
                  {/* Liquid */}
                  <div className="absolute bottom-0 inset-x-0 h-[75%] bg-[#e8be55] opacity-90"></div>
                  {/* Bubbles */}
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="absolute bottom-8 right-6 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <div className="absolute bottom-12 left-8 w-1 h-1 bg-white/40 rounded-full"></div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-[9px] uppercase tracking-widest text-accent-orange font-mono mb-2">DAY 9 · READY</div>
                <div className="text-[11px] text-muted-text mb-4">Second ferment starting</div>
                <div className="flex space-x-1.5 justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
                  <div className="w-4 h-1.5 rounded-full bg-accent-orange"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Books Card */}
          <div className="border border-border/60 p-8 flex flex-col relative overflow-hidden min-h-[480px]">
            <div>
              <div className="text-[9px] uppercase tracking-widest text-muted-text font-mono mb-4">BOOKS</div>
              <div className="text-[9px] uppercase tracking-widest text-muted-text font-mono mb-3">OM SWAMI</div>
              <h3 className="text-xl font-medium text-foreground mb-4">If Truth Be Told: A Monk's Memoir</h3>
              <p className="text-[13px] text-muted-text leading-relaxed">
                An honest and unexpectedly gripping account of the path to monkhood. Less about religion, more about what it takes to commit to something completely. The kind of book that makes you sit with uncomfortable questions.
              </p>
            </div>

            {/* Visual element */}
            <div className="mt-auto flex flex-col items-center justify-center pt-8">
              {/* Book Graphic */}
              <div className="relative w-28 h-40 bg-gradient-to-br from-[#4a2b16] to-[#2a1205] shadow-lg mb-6 border border-[#5a3b26] flex flex-col p-4 justify-between">
                <div className="text-[6px] uppercase tracking-widest text-white/50 font-mono border-b border-white/20 pb-1">Nightstand</div>
                <div>
                  <div className="text-[10px]  text-[#e6e2d8] leading-tight mb-2">If Truth Be Told:<br />A Monk's Memoir</div>
                  <div className="text-[5px] uppercase tracking-widest text-white/50 font-mono">OM SWAMI</div>
                </div>
                {/* Book shadow/pages effect */}
                <div className="absolute -right-2 top-2 bottom-2 w-2 bg-[#e6e2d8] rounded-r border-y border-r border-[#d4cfc1] z-[-1]"></div>
              </div>

              <div className="text-[9px] uppercase tracking-widest text-muted-text font-mono">CURRENT READ</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

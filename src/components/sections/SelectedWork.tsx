import Link from "next/link";

export function SelectedWork() {
  return (
    <section className="w-full mx-auto px-6 py-24 lg:py-32 border-t border-border/50">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-6 md:mb-8 flex space-x-6">
            <span>02 / WORK</span>
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-4xl md:text-[44px] font-medium tracking-tight text-foreground max-w-3xl leading-[1.15]">
            Nine years of making software people actually use. <span className="text-muted-text">Three that say the most.</span>
          </h2>
        </div>
        <div className="shrink-0">
          <Link href="#" className="text-sm font-medium border-b border-foreground pb-1 inline-flex items-center hover:opacity-70 transition-opacity">
            View all work <span className="ml-1  text-lg leading-none">↗</span>
          </Link>
        </div>
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        
        {/* Project 1 */}
        <div className="group cursor-pointer">
          <div className="w-full aspect-[1.3] bg-[#E5DFD3] mb-5 overflow-hidden flex items-center justify-center">
            {/* Using a placeholder styled div as image isn't available, but keeping img structure ready */}
            <div className="w-11/12 h-5/6 bg-white shadow-sm border border-black/5 rounded-t-lg relative flex flex-col">
               <div className="h-6 border-b border-black/5 flex items-center px-3 space-x-1.5 bg-[#f6f6f6] rounded-t-lg">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
               </div>
               <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                 <h4 className="text-xl font-bold text-blue-900 mb-2">Write off up to<br/>70% of your debt</h4>
                 <div className="w-32 h-20 bg-gray-100 rounded mt-4"></div>
               </div>
            </div>
          </div>
          
          <div className="flex justify-between items-start text-[10px] uppercase tracking-widest text-muted-text font-mono mb-4">
            <span>01 - MY DEBT PLAN</span>
            <span>2024</span>
          </div>
          
          <h3 className="text-[22px] font-semibold text-foreground mb-3 leading-snug">
            Full tech and design stack for a UK debt management platform
          </h3>
          
          <p className="text-[15px] text-muted-text mb-6 leading-relaxed">
            Full ownership - decision engine routing 1,000+ leads/day across 100+ integrations, a large-scale CRM in active build, and day-to-day UX execution across the whole operation.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="border border-border/80 px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-muted-text font-mono rounded-sm">PRODUCT OWNERSHIP</span>
            <span className="border border-border/80 px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-muted-text font-mono rounded-sm">UX</span>
            <span className="border border-border/80 px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-muted-text font-mono rounded-sm">SYSTEMS</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group cursor-pointer">
          <div className="w-full aspect-[1.3] bg-[#F3D5B5] mb-5 overflow-hidden flex items-center justify-center relative">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
             <div className="w-2/3 h-2/3 bg-orange-800 rounded-full blur-sm absolute right-4 top-4"></div>
             <div className="w-1/2 h-1/2 bg-yellow-500 transform rotate-12 absolute left-8 bottom-8 shadow-xl"></div>
          </div>
          
          <div className="flex justify-between items-start text-[10px] uppercase tracking-widest text-muted-text font-mono mb-4">
            <span className="max-w-[180px]">02 - MOHAMMED BIN RASHID SPACE CENTRE</span>
            <span className="text-right">MAY 2020 - JUL 2020</span>
          </div>
          
          <h3 className="text-[22px] font-semibold text-foreground mb-3 leading-snug">
            The official platform for the UAE's first Mars mission
          </h3>
          
          <p className="text-[15px] text-muted-text mb-6 leading-relaxed">
            45 days. Website, iOS app, Android app, and a satellite tracker global media used as their reference. 200,000 concurrent users on launch night. Zero major issues.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="border border-border/80 px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-muted-text font-mono rounded-sm">FRONTEND DEV</span>
            <span className="border border-border/80 px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-muted-text font-mono rounded-sm">PROJECT MGMT</span>
            <span className="border border-border/80 px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-muted-text font-mono rounded-sm">0-1</span>
          </div>
        </div>

        {/* Project 3 */}
        <div className="group cursor-pointer">
          <div className="w-full aspect-[1.3] bg-[#E37941] mb-5 overflow-hidden flex items-center justify-center pt-8 px-6">
             <div className="w-full h-full bg-white rounded-t-lg shadow-lg border border-black/5 p-4 flex gap-4">
                <div className="w-1/3 bg-gray-50 h-full rounded border border-gray-100 flex flex-col gap-2 p-2">
                   <div className="w-full h-1/2 bg-blue-100 rounded"></div>
                   <div className="w-full h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="w-2/3 h-full flex flex-col gap-4">
                   <div className="w-full h-8 bg-orange-50 rounded-full"></div>
                   <div className="w-full h-2/3 bg-green-50 rounded-lg"></div>
                </div>
             </div>
          </div>
          
          <div className="flex justify-between items-start text-[10px] uppercase tracking-widest text-muted-text font-mono mb-4">
            <span>03 - SKILLTRAINER</span>
            <span>JUN 2021</span>
          </div>
          
          <h3 className="text-[22px] font-semibold text-foreground mb-3 leading-snug">
            Scaling an ed-tech platform from 300k to 1.5 million learners
          </h3>
          
          <p className="text-[15px] text-muted-text mb-6 leading-relaxed">
            Led UX and technology work supporting a 5x user growth without the platform breaking. Infrastructure decisions, design systems, stability under pressure.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="border border-border/80 px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-muted-text font-mono rounded-sm">UX</span>
            <span className="border border-border/80 px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-muted-text font-mono rounded-sm">SCALE</span>
            <span className="border border-border/80 px-2.5 py-1.5 text-[9px] uppercase tracking-widest text-muted-text font-mono rounded-sm">ED-TECH</span>
          </div>
        </div>

      </div>
    </section>
  );
}

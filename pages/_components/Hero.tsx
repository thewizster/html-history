interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div class="relative h-screen min-h-[600px] overflow-hidden mb-0 flex items-center justify-center">
      {/* Animated background elements */}
      <div class="hero-background absolute inset-0">
        <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 0s;">&lt;html&gt;</div>
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 0.5s;">&lt;head&gt;</div>
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 1s;">&lt;title&gt;</div>
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 1.5s;">&lt;body&gt;</div>
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 2s;">&lt;div&gt;</div>
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 2.5s;">&lt;section&gt;</div>
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 3s;">&lt;article&gt;</div>
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 3.5s;">&lt;header&gt;</div>
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 4s;">&lt;nav&gt;</div>
          <div class="code-line absolute text-green-400 font-mono text-sm whitespace-nowrap" style="animation-delay: 4.5s;">&lt;main&gt;</div>
        </div>
        
        {/* Floating HTML elements */}
        <div class="absolute inset-0 pointer-events-none">
          <div class="html-tag tag-1 absolute bg-blue-500/10 border-2 border-blue-500/30 rounded-lg px-3 py-2 font-mono text-sm text-white/80 backdrop-blur-md">&lt;/&gt;</div>
          <div class="html-tag tag-2 absolute bg-blue-500/10 border-2 border-blue-500/30 rounded-lg px-3 py-2 font-mono text-lg font-bold text-white/80 backdrop-blur-md">HTML5</div>
          <div class="html-tag tag-3 absolute bg-blue-500/10 border-2 border-blue-500/30 rounded-lg px-3 py-2 font-mono text-sm text-white/80 backdrop-blur-md">&lt;canvas&gt;</div>
          <div class="html-tag tag-4 absolute bg-blue-500/10 border-2 border-blue-500/30 rounded-lg px-3 py-2 font-mono text-sm text-white/80 backdrop-blur-md">&lt;video&gt;</div>
          <div class="html-tag tag-5 absolute bg-blue-500/10 border-2 border-blue-500/30 rounded-lg px-3 py-2 font-mono text-sm text-white/80 backdrop-blur-md">&lt;audio&gt;</div>
          <div class="html-tag tag-6 absolute bg-blue-500/10 border-2 border-blue-500/30 rounded-lg px-3 py-2 font-mono text-sm text-white/80 backdrop-blur-md">&lt;svg&gt;</div>
        </div>
        
        {/* Gradient mesh background */}
        <div class="gradient-mesh absolute inset-0"></div>
      </div>
      
      {/* Main content */}
      <div class="relative z-10 text-center px-8 max-w-4xl">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-md mb-8 animate-[slideUp_1s_ease-out]">
          <span class="badge-icon text-xl">🚀</span>
          <span class="text-white/90 font-medium text-sm">From 1989 to Present</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight animate-[slideUp_1s_ease-out_0.2s_both]">
          <span class="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">The</span>
          <span class="title-line-2 block">History</span>
          <span class="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">of HTML</span>
          <span class="sr-only">{title}</span>
        </h1>
        
        {subtitle && (
          <p class="text-xl text-white/80 font-light mb-12 animate-[slideUp_1s_ease-out_0.4s_both]">
            <span class="border-r-2 border-transparent">{subtitle}</span>
            <span class="cursor text-blue-400">|</span>
          </p>
        )}
        
        <div class="flex items-center justify-center gap-8 mb-12 animate-[slideUp_1s_ease-out_0.6s_both]">
          <div class="text-center">
            <div class="text-4xl font-bold text-white leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">32+</div>
            <div class="text-sm text-white/70 font-light uppercase tracking-wider mt-2">Years</div>
          </div>
          <div class="stat-divider w-px h-10"></div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">8</div>
            <div class="text-sm text-white/70 font-light uppercase tracking-wider mt-2">Major Versions</div>
          </div>
          <div class="stat-divider w-px h-10"></div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">∞</div>
            <div class="text-sm text-white/70 font-light uppercase tracking-wider mt-2">Possibilities</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <div class="w-5 h-5 border-r-2 border-b-2 border-current rotate-45"></div>
        <span class="text-xs font-light uppercase tracking-wider">Explore Timeline</span>
      </div>
    </div>
  );
}
interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div class="hero">
      {/* Animated background elements */}
      <div class="hero-background">
        <div class="code-rain">
          <div class="code-line" style="animation-delay: 0s;">&lt;html&gt;</div>
          <div class="code-line" style="animation-delay: 0.5s;">&lt;head&gt;</div>
          <div class="code-line" style="animation-delay: 1s;">&lt;title&gt;</div>
          <div class="code-line" style="animation-delay: 1.5s;">&lt;body&gt;</div>
          <div class="code-line" style="animation-delay: 2s;">&lt;div&gt;</div>
          <div class="code-line" style="animation-delay: 2.5s;">&lt;section&gt;</div>
          <div class="code-line" style="animation-delay: 3s;">&lt;article&gt;</div>
          <div class="code-line" style="animation-delay: 3.5s;">&lt;header&gt;</div>
          <div class="code-line" style="animation-delay: 4s;">&lt;nav&gt;</div>
          <div class="code-line" style="animation-delay: 4.5s;">&lt;main&gt;</div>
        </div>
        
        {/* Floating HTML elements */}
        <div class="floating-elements">
          <div class="html-tag tag-1">&lt;/&gt;</div>
          <div class="html-tag tag-2">HTML5</div>
          <div class="html-tag tag-3">&lt;canvas&gt;</div>
          <div class="html-tag tag-4">&lt;video&gt;</div>
          <div class="html-tag tag-5">&lt;audio&gt;</div>
          <div class="html-tag tag-6">&lt;svg&gt;</div>
        </div>
        
        {/* Gradient mesh background */}
        <div class="gradient-mesh"></div>
      </div>
      
      {/* Main content */}
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-icon">🚀</span>
          <span class="badge-text">From 1989 to Present</span>
        </div>
        
        <h1 class="hero-title">
          <span class="title-line-1">The</span>
          <span class="title-line-2 gradient-text">History</span>
          <span class="title-line-3">of HTML</span>
          <span class="sr-only">{title}</span>
        </h1>
        
        {subtitle && (
          <p class="hero-subtitle">
            <span class="typing-text">{subtitle}</span>
            <span class="cursor">|</span>
          </p>
        )}
        
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">32+</div>
            <div class="stat-label">Years</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">8</div>
            <div class="stat-label">Major Versions</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">∞</div>
            <div class="stat-label">Possibilities</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
        <span class="scroll-text">Explore Timeline</span>
      </div>
    </div>
  );
}
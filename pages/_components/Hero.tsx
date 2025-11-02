interface HeroProps {
  title: string;
  subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">{title}</h1>
          {subtitle && <p class="hero-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
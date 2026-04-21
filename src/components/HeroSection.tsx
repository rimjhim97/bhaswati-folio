import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import bhaswatiPhoto from '@/assets/bhaswati-photo.jpg';

export function HeroSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center relative px-6 pt-20" id="hero">
      <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <div className="scroll-child flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-foreground" />
            <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: 'oklch(1 0 0 / 30%)' }}>
              Business Analyst · Product Enthusiast · MBA · SCMHRD
            </span>
          </div>

          <h1 className="scroll-child mb-0">
            <span className="block text-[clamp(48px,6vw,80px)] font-normal text-foreground" style={{ fontFamily: 'var(--font-family-display)' }}>
              Bhaswati
            </span>
            <span className="block text-[clamp(48px,6vw,80px)] italic" style={{ fontFamily: 'var(--font-family-display)', color: 'oklch(1 0 0 / 40%)' }}>
              Chakraborty
            </span>
          </h1>

          <p className="scroll-child text-[18px] font-light mt-4" style={{ fontFamily: 'var(--font-family-body)', color: 'oklch(1 0 0 / 50%)' }}>
            Building products where AI meets real human behaviour
          </p>

          <p className="scroll-child text-[15px] mt-6 max-w-[480px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 35%)' }}>
            3.5 years bridging engineering depth and product ownership. From Salesforce, Java microservices to shipped products. Now solving real problems at the intersection of tech and people.
          </p>

          <div className="scroll-child flex items-center gap-6 mt-8">
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-full bg-foreground text-background text-[13px] font-bold transition-all duration-300 hover:opacity-90"
              data-hover
            >
              View my work
            </button>
          </div>
        </div>

        {/* Right column — Circular photo */}
        <div className="scroll-child flex justify-center relative">
          <div
            className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden"
            style={{
              border: '2px solid oklch(1 0 0 / 12%)',
              boxShadow: '0 0 60px oklch(0.8 0 0 / 8%), 0 0 120px oklch(0.7 0 0 / 4%)',
            }}
          >
            <img
              src={bhaswatiPhoto}
              alt="Bhaswati Chakraborty"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 flex items-center gap-3" style={{ color: 'oklch(1 0 0 / 20%)' }}>
        <div className="w-8 h-[1px] bg-current animate-bounce-x" />
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function HeroSection() {
  const sectionRef = useScrollAnimation();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / window.innerWidth) * 20;
      const rotateX = ((e.clientY - centerY) / window.innerHeight) * -20;
      cardRef.current.style.transform = `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

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
            <a
              href="#"
              className="text-[13px] transition-all duration-300 hover:opacity-80"
              style={{ color: 'oklch(1 0 0 / 40%)' }}
              data-hover
            >
              Download CV ↗
            </a>
          </div>
        </div>

        {/* Right column — 3D card */}
        <div className="scroll-child flex justify-center relative">
          <div
            ref={cardRef}
            className="w-[340px] h-[420px] rounded-3xl relative overflow-hidden"
            style={{
              background: '#141414',
              border: '1px solid oklch(1 0 0 / 8%)',
              transition: 'transform 0.1s ease-out',
              backgroundImage: `
                linear-gradient(oklch(1 0 0 / 3%) 1px, transparent 1px),
                linear-gradient(90deg, oklch(1 0 0 / 3%) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="w-[180px] h-[180px] rounded-full flex items-center justify-center"
                style={{ background: '#1e1e1e', border: '2px solid oklch(1 0 0 / 12%)' }}
              >
                <span className="text-[52px] italic text-foreground" style={{ fontFamily: 'var(--font-family-display)' }}>
                  BC
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-[10px] tracking-[0.15em]" style={{ fontFamily: 'monospace', color: 'oklch(1 0 0 / 20%)' }}>
                SCMHRD · PUNE · 2026
              </span>
            </div>
          </div>

          {/* Floating chips */}
          <div className="hidden md:block">
            <div className="absolute -top-2 right-4 px-3 py-1.5 rounded-full text-[11px] text-foreground"
              style={{ border: '1px solid oklch(1 0 0 / 15%)', background: 'oklch(0.07 0 0 / 90%)', backdropFilter: 'blur(8px)' }}>
              AI PM
            </div>
            <div className="absolute bottom-16 -right-4 px-3 py-1.5 rounded-full text-[11px] text-foreground"
              style={{ border: '1px solid oklch(1 0 0 / 15%)', background: 'oklch(0.07 0 0 / 90%)', backdropFilter: 'blur(8px)' }}>
              Salesforce AI Associate
            </div>
            <div className="absolute top-1/2 -left-8 px-3 py-1.5 rounded-full text-[11px] text-foreground"
              style={{ border: '1px solid oklch(1 0 0 / 15%)', background: 'oklch(0.07 0 0 / 90%)', backdropFilter: 'blur(8px)' }}>
              CSPO Certified
            </div>
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

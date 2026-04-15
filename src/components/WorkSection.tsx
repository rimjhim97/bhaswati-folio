import { Link } from '@tanstack/react-router';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function WorkCard({
  tag,
  title,
  description,
  pills,
  linkText,
  linkHref,
  isExternal = false,
  preview,
}: {
  tag: string;
  title: string;
  description: string;
  pills: string[];
  linkText: string;
  linkHref: string;
  isExternal?: boolean;
  preview?: React.ReactNode;
}) {
  const inner = (
    <div
      className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group relative h-full"
      style={{ background: '#111', border: '1px solid oklch(1 0 0 / 8%)' }}
    >
      <div className="absolute top-5 right-5 text-foreground opacity-30 group-hover:opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </div>
      <span className="text-[10px] tracking-[0.15em] uppercase block mb-3" style={{ color: 'oklch(1 0 0 / 25%)' }}>
        {tag}
      </span>
      <h3 className="text-xl mb-3 text-foreground" style={{ fontFamily: 'var(--font-family-display)' }}>{title}</h3>
      <p className="text-[14px] leading-relaxed mb-4" style={{ color: 'oklch(1 0 0 / 40%)' }}>{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {pills.map((p) => (
          <span key={p} className="text-[11px] px-3 py-1 rounded-full" style={{ border: '1px solid oklch(1 0 0 / 10%)', color: 'oklch(1 0 0 / 50%)' }}>
            {p}
          </span>
        ))}
      </div>
      {preview && <div className="mt-4">{preview}</div>}
      <span className="text-[12px] mt-2 inline-block" style={{ color: 'oklch(1 0 0 / 40%)' }}>
        {linkText}
      </span>
    </div>
  );

  if (isExternal) {
    return <a href={linkHref} target="_blank" rel="noopener noreferrer" data-hover className="block h-full">{inner}</a>;
  }

  return <Link to={linkHref as any} data-hover className="block h-full">{inner}</Link>;
}

function PreviewBox({ children, gradient }: { children: React.ReactNode; gradient: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden flex items-center justify-center relative"
      style={{
        border: '1px solid oklch(1 0 0 / 8%)',
        background: gradient,
        minHeight: '140px',
      }}
    >
      {children}
    </div>
  );
}

export function WorkSection() {
  const ref = useScrollAnimation();

  return (
    <section id="work" ref={ref} className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="scroll-child flex items-center gap-4 mb-12">
          <span className="text-[11px] tracking-[0.2em] uppercase shrink-0" style={{ color: 'oklch(1 0 0 / 25%)' }}>
            Selected Work
          </span>
          <div className="flex-1 h-[1px]" style={{ background: 'oklch(1 0 0 / 8%)' }} />
        </div>

        {/* Featured — CampusTribe */}
        <div className="scroll-child mb-[2px]">
          <Link to="/work/campustribe" data-hover className="block">
            <div
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group grid md:grid-cols-2 gap-8 relative"
              style={{ background: '#111', border: '1px solid oklch(1 0 0 / 8%)' }}
            >
              <div className="absolute top-6 right-6 text-foreground opacity-30 group-hover:opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </div>
              <div>
                <span className="text-[10px] tracking-[0.15em] uppercase block mb-3" style={{ color: 'oklch(1 0 0 / 25%)' }}>
                  AI · Social Tech · Prototype
                </span>
                <h3 className="text-4xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-family-display)' }}>CampusTribe</h3>
                <p className="text-[14px] leading-relaxed mb-6" style={{ color: 'oklch(1 0 0 / 40%)' }}>
                  A closed, college-email-verified social network for MBA students. AI matches people using semantic profile vectors, not keyword tags. Group hangouts enforced at 3+ people, with a post-meetup feedback loop that trains future matches.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['RAG Matching', 'Agentic Feedback Loop', 'Session Memory', 'Tool Use (NL Scheduling)'].map((p) => (
                    <span key={p} className="text-[11px] px-3 py-1 rounded-full" style={{ border: '1px solid oklch(1 0 0 / 10%)', color: 'oklch(1 0 0 / 50%)' }}>
                      {p}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-[12px]" style={{ color: 'oklch(1 0 0 / 40%)' }}>
                  <span>View prototype →</span>
                  <a href="https://github.com/rimjhim97" target="_blank" rel="noopener noreferrer" data-hover>GitHub ↗</a>
                </div>
              </div>
              <PreviewBox gradient="linear-gradient(135deg, #0a1628 0%, #162038 50%, #0d1a2e 100%)">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, oklch(0.5 0.15 250), oklch(0.4 0.12 280))', boxShadow: '0 0 30px oklch(0.5 0.15 250 / 30%)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <p className="text-[13px] font-medium text-foreground">CampusTribe</p>
                  <p className="text-[10px] mt-1" style={{ color: 'oklch(1 0 0 / 30%)' }}>AI-Powered Social Matching</p>
                </div>
              </PreviewBox>
            </div>
          </Link>
        </div>

        {/* Row 2 — Three equal cards */}
        <div className="grid md:grid-cols-3 gap-[2px] mt-[2px]">
          <div className="scroll-child">
            <WorkCard
              tag="AI · Productivity · Live"
              title="FocusAI"
              description="Pomodoro timer with embedded Claude AI coach. Designed full prompt architecture for session pattern analysis — API integration built, proxy pending."
              pills={['Claude API', 'Live on Vercel', 'Prompt Engineering']}
              linkText="View project →"
              linkHref="/work/focusstack"
              preview={
                <PreviewBox gradient="linear-gradient(135deg, #0f1922 0%, #1a2a3a 50%, #0f1922 100%)">
                  <div className="text-center p-4">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, oklch(0.55 0.12 200), oklch(0.45 0.1 220))', boxShadow: '0 0 25px oklch(0.55 0.12 200 / 25%)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <p className="text-[12px] font-medium text-foreground">FocusStack</p>
                    <p className="text-[9px] mt-1" style={{ color: 'oklch(1 0 0 / 30%)' }}>AI Pomodoro Coach</p>
                  </div>
                </PreviewBox>
              }
            />
          </div>
          <div className="scroll-child">
            <WorkCard
              tag="PM Teardown · Q-Commerce"
              title="Swiggy Instamart Retention"
              description="Why Instamart users don't reorder — and how an AI smart basket with predictive reorder nudges closes the frequency gap vs Blinkit."
              pills={['A/B Test Design', 'Cohort Analysis', 'AI Smart Basket']}
              linkText="Read teardown →"
              linkHref="#teardown"
              isExternal={false}
            />
          </div>
          <div className="scroll-child">
            <WorkCard
              tag="Strategy · Product Deck"
              title="Sample Product Deck"
              description="A polished product strategy deck showcasing structured thinking, market analysis, and go-to-market planning."
              pills={['Product Strategy', 'Market Analysis', 'GTM Planning']}
              linkText="View Deck ↗"
              linkHref="https://canva.link/rub7uma94jo6b7m"
              isExternal={true}
              preview={
                <PreviewBox gradient="linear-gradient(135deg, #1a1520 0%, #251d30 50%, #1a1520 100%)">
                  <div className="text-center p-4">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, oklch(0.5 0.1 320), oklch(0.4 0.08 340))', boxShadow: '0 0 25px oklch(0.5 0.1 320 / 25%)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
                    </div>
                    <p className="text-[12px] font-medium text-foreground">Product Deck</p>
                    <p className="text-[9px] mt-1" style={{ color: 'oklch(1 0 0 / 30%)' }}>Strategy & GTM</p>
                  </div>
                </PreviewBox>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

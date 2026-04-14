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
      className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group relative"
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
    return <a href={linkHref} target="_blank" rel="noopener noreferrer" data-hover className="block">{inner}</a>;
  }

  return <Link to={linkHref as any} data-hover className="block">{inner}</Link>;
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
              <div className="rounded-xl flex items-center justify-center" style={{ background: '#161616', border: '1px solid oklch(1 0 0 / 6%)' }}>
                <div className="text-center" style={{ color: 'oklch(1 0 0 / 15%)' }}>
                  <div className="text-6xl mb-2" style={{ fontFamily: 'var(--font-family-display)' }}>CT</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase">Campus Tribe</div>
                </div>
              </div>
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
                <div className="rounded-xl h-24 flex items-center justify-center" style={{ background: '#161616', border: '1px solid oklch(1 0 0 / 6%)' }}>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-14 rounded" style={{
                        background: '#1a1a1a',
                        border: '1px solid oklch(1 0 0 / 8%)',
                        transform: `rotate(${(i - 2) * 5}deg)`,
                      }} />
                    ))}
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function CampusTribePage() {
  const ref = useScrollAnimation();

  return (
    <div className="bg-background text-foreground min-h-screen" style={{ cursor: 'none' }}>
      <div className="max-w-[800px] mx-auto px-6 py-24" ref={ref}>
        <a href="/" className="scroll-child text-[13px] mb-12 inline-block transition-all duration-300 hover:opacity-80" style={{ color: 'oklch(1 0 0 / 40%)' }} data-hover>
          ← Back
        </a>

        <div className="scroll-child flex items-center gap-3 mb-6">
          <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'oklch(1 0 0 / 25%)' }}>AI · Social Tech · Prototype</span>
        </div>

        <h1 className="scroll-child text-[clamp(36px,5vw,56px)] mb-6 text-foreground" style={{ fontFamily: 'var(--font-family-display)' }}>CampusTribe</h1>

        <p className="scroll-child text-[16px] leading-relaxed mb-8" style={{ color: 'oklch(1 0 0 / 50%)' }}>
          A closed, college-email-verified social network for MBA students. AI matches people using semantic profile vectors, not keyword tags. Group hangouts enforced at 3+ people, with a post-meetup feedback loop that trains future matches.
        </p>

        <div className="scroll-child mb-12">
          <a href="https://campus-tribe-mate.lovable.app" target="_blank" rel="noopener noreferrer" data-hover className="inline-block px-6 py-3 rounded-full bg-foreground text-background text-[13px] font-bold transition-all duration-300 hover:opacity-90">
            View Live Prototype ↗
          </a>
        </div>

        <div className="scroll-child space-y-10">
          <div>
            <h3 className="text-[18px] text-foreground font-medium mb-3" style={{ fontFamily: 'var(--font-family-display)' }}>The Problem</h3>
            <p className="text-[14px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 40%)' }}>
              MBA students struggle to form genuine connections outside their immediate sections. Existing social platforms are noisy, unverified, and don't understand campus context. Students end up in echo chambers with their section-mates rather than meeting diverse cohort members.
            </p>
          </div>

          <div>
            <h3 className="text-[18px] text-foreground font-medium mb-3" style={{ fontFamily: 'var(--font-family-display)' }}>Key Features</h3>
            <div className="space-y-4">
              {[
                { title: 'Institute-Verified Access', desc: 'College email verification ensures a safe, closed community. No outsiders, no spam.' },
                { title: 'AI Semantic Matching', desc: 'RAG-powered matching using semantic profile vectors — goes beyond keyword tags to understand personality, interests, and communication style.' },
                { title: 'Group Hangouts (3+ people)', desc: 'Enforced group meetups to reduce social anxiety and create organic, low-pressure connections.' },
                { title: 'Agentic Feedback Loop', desc: 'Post-meetup feedback trains future match quality. The system learns what "good chemistry" means for each user.' },
                { title: 'Natural Language Scheduling', desc: 'Tool-use AI agent handles scheduling through natural language — "Let\'s grab coffee Thursday after class" becomes a calendar event.' },
              ].map((f) => (
                <div key={f.title} className="p-4 rounded-xl" style={{ background: '#111', border: '1px solid oklch(1 0 0 / 8%)' }}>
                  <h4 className="text-[14px] text-foreground font-medium mb-1">{f.title}</h4>
                  <p className="text-[13px]" style={{ color: 'oklch(1 0 0 / 35%)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] text-foreground font-medium mb-3" style={{ fontFamily: 'var(--font-family-display)' }}>AI Architecture</h3>
            <div className="flex flex-wrap gap-2">
              {['RAG Matching', 'Agentic Feedback Loop', 'Session Memory', 'Tool Use (NL Scheduling)', 'Semantic Embeddings', 'Contextual Re-ranking'].map((p) => (
                <span key={p} className="text-[11px] px-3 py-1.5 rounded-full" style={{ border: '1px solid oklch(1 0 0 / 15%)', color: 'oklch(1 0 0 / 50%)' }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] text-foreground font-medium mb-3" style={{ fontFamily: 'var(--font-family-display)' }}>Product Thinking</h3>
            <p className="text-[14px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 40%)' }}>
              The core insight is that meaningful connections need structure. By enforcing group meetups, removing the pressure of one-on-one matching, and using AI to continuously improve match quality through feedback, CampusTribe creates an environment where authentic relationships form naturally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
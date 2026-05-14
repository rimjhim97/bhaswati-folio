import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function FocusStackPage() {
  const ref = useScrollAnimation();

  return (
    <div className="bg-background text-foreground min-h-screen" style={{ cursor: 'none' }}>
      <div className="max-w-[800px] mx-auto px-6 py-24" ref={ref}>
        <a href="/" className="scroll-child text-[13px] mb-12 inline-block transition-all duration-300 hover:opacity-80" style={{ color: 'oklch(1 0 0 / 40%)' }} data-hover>
          ← Back
        </a>

        <div className="scroll-child flex items-center gap-3 mb-6">
          <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'oklch(1 0 0 / 25%)' }}>AI · Productivity · Live</span>
        </div>

        <h1 className="scroll-child text-[clamp(36px,5vw,56px)] mb-6 text-foreground" style={{ fontFamily: 'var(--font-family-display)' }}>FocusStack</h1>

        <p className="scroll-child text-[16px] leading-relaxed mb-8" style={{ color: 'oklch(1 0 0 / 50%)' }}>
          A Pomodoro timer with an embedded Claude AI coach. Designed full prompt architecture for session pattern analysis — helping users understand their focus patterns and improve productivity over time.
        </p>

        <div className="scroll-child flex gap-4 mb-12">
          <a href="https://mind-stack-calm.vercel.app/" target="_blank" rel="noopener noreferrer" data-hover className="inline-block px-6 py-3 rounded-full bg-foreground text-background text-[13px] font-bold transition-all duration-300 hover:opacity-90">
            Try it Live ↗
          </a>
        </div>

        <div className="scroll-child space-y-10">
          <div>
            <h3 className="text-[18px] text-foreground font-medium mb-3" style={{ fontFamily: 'var(--font-family-display)' }}>The Problem</h3>
            <p className="text-[14px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 40%)' }}>
              Productivity tools are either too simple or too complex. Students and professionals need a tool that not only tracks focus time but actively helps them understand and improve their work patterns.
            </p>
          </div>

          <div>
            <h3 className="text-[18px] text-foreground font-medium mb-3" style={{ fontFamily: 'var(--font-family-display)' }}>Key Features</h3>
            <div className="space-y-4">
              {[
                { title: 'Pomodoro Timer', desc: 'Clean, distraction-free timer with customizable work and break intervals.' },
                { title: 'AI Focus Coach', desc: 'Claude-powered coach that analyzes session patterns and provides personalized productivity insights.' },
                { title: 'Streak Tracking', desc: 'Gamified consistency tracking to build and maintain focus habits.' },
                { title: 'Break Reminders', desc: 'Intelligent break suggestions based on cognitive load and session history.' },
                { title: 'Minimal UI', desc: 'Focus-first design that eliminates distractions — the tool gets out of your way.' },
              ].map((f) => (
                <div key={f.title} className="p-4 rounded-xl" style={{ background: '#111', border: '1px solid oklch(1 0 0 / 8%)' }}>
                  <h4 className="text-[14px] text-foreground font-medium mb-1">{f.title}</h4>
                  <p className="text-[13px]" style={{ color: 'oklch(1 0 0 / 35%)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] text-foreground font-medium mb-3" style={{ fontFamily: 'var(--font-family-display)' }}>Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Claude API', 'Prompt Engineering', 'React', 'Vercel', 'TypeScript'].map((p) => (
                <span key={p} className="text-[11px] px-3 py-1.5 rounded-full" style={{ border: '1px solid oklch(1 0 0 / 15%)', color: 'oklch(1 0 0 / 50%)' }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] text-foreground font-medium mb-3" style={{ fontFamily: 'var(--font-family-display)' }}>Product Thinking</h3>
            <p className="text-[14px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 40%)' }}>
              Simplicity is the core design principle. Every feature was evaluated against whether it helps the user focus more, creating a habit loop of timer, streak, insight, and improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
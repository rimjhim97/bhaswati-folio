import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const insights = [
  { emoji: '📉', kicker: 'Core metric problem', text: 'Blinkit processes 30% more daily orders at similar GMV' },
  { emoji: '🧠', kicker: 'Root cause', text: "Users don't have a default reorder habit. Instamart only wins on strong intent" },
  { emoji: '🔁', kicker: 'The habit gap', text: "Zepto Pass = subscription lock-in. Instamart doesn't activate Swiggy One for q-commerce specifically" },
  { emoji: '🤖', kicker: 'AI opportunity', text: 'Order history + time-of-day + location = predict what a user needs before they do' },
];

export function TeardownSection() {
  const ref = useScrollAnimation();

  return (
    <section id="teardown" ref={ref} className="py-24 px-6" style={{ background: '#060606' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="scroll-child flex items-center gap-4 mb-12">
          <span className="text-[11px] tracking-[0.2em] uppercase shrink-0" style={{ color: 'oklch(1 0 0 / 25%)' }}>PM Teardown</span>
          <div className="flex-1 h-[1px]" style={{ background: 'oklch(1 0 0 / 8%)' }} />
        </div>

        <div className="scroll-child rounded-2xl p-6 mb-10" style={{ background: '#0f0f0f', border: '1px solid oklch(1 0 0 / 8%)' }}>
          <p className="text-[14px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 50%)' }}>
            <strong className="text-foreground">Why this matters for Swiggy:</strong> Instamart holds 27% market share vs Blinkit's 45%, losing ~₹12/order. The gap isn't delivery time — it's repeat purchase frequency. AI can close it.
          </p>
        </div>

        <div className="max-w-[680px]">
          <h3 className="scroll-child text-[32px] mb-8 text-foreground leading-tight" style={{ fontFamily: 'var(--font-family-display)' }}>
            Why Swiggy Instamart users don't reorder — and how AI fixes the retention funnel
          </h3>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {insights.map((ins) => (
              <div key={ins.kicker} className="scroll-child p-5 rounded-2xl" style={{ background: '#111', border: '1px solid oklch(1 0 0 / 8%)' }}>
                <div className="text-2xl mb-2">{ins.emoji}</div>
                <span className="text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: 'oklch(1 0 0 / 25%)' }}>{ins.kicker}</span>
                <p className="text-[14px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 50%)' }}>{ins.text}</p>
              </div>
            ))}
          </div>

          <div className="scroll-child space-y-6">
            <div>
              <h4 className="text-[16px] text-foreground font-medium mb-3">The Solution: AI Smart Basket</h4>
              <p className="text-[14px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 40%)' }}>
                A predictive reorder system that learns from purchase history, time-of-day patterns, and location context. Instead of asking "What do you need?", the app says "Here's your usual order — confirm in one tap." This transforms passive browsing into habitual ordering.
              </p>
            </div>
            <div>
              <h4 className="text-[16px] text-foreground font-medium mb-3">A/B Test Design</h4>
              <p className="text-[14px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 40%)' }}>
                Control: current Instamart home screen. Variant: AI Smart Basket as the primary entry point with a pre-filled cart based on predicted needs. Primary metric: 7-day reorder rate. Secondary metrics: cart conversion rate, items per order, time to checkout. Run for 4 weeks across Tier-1 cities with 50/50 split.
              </p>
            </div>
            <div>
              <h4 className="text-[16px] text-foreground font-medium mb-3">Risks</h4>
              <p className="text-[14px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 40%)' }}>
                Cold start problem for new users with no order history — mitigate with cohort-based recommendations. Over-personalization fatigue — add a "Surprise me" option. Privacy concerns around location tracking — clear opt-in with transparent data usage policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

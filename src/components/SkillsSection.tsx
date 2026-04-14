import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const aiSkills = ['Claude API', 'LLM Product Design', 'Prompt Engineering', 'RAG Architecture', 'Agentic AI', 'Tool Use'];
const productSkills = ['BRD/PRD', 'User Research', 'Roadmap', 'Feature Prioritization', 'A/B Testing', 'Cohort Analysis', 'Funnel Analytics', 'Stakeholder Management'];
const techSkills = ['SQL', 'Python', 'Java', 'RESTful APIs', 'Salesforce', 'Microservices', 'Power BI', 'Jira', 'Agile/Scrum'];

const certs = [
  { name: 'Salesforce AI Associate', issuer: 'Salesforce' },
  { name: 'CSPO', issuer: 'Scrum Alliance' },
  { name: 'Azure AZ-900', issuer: 'Microsoft' },
];

function Pill({ label, bright = false }: { label: string; bright?: boolean }) {
  return (
    <span
      className="text-[11px] px-3 py-1.5 rounded-full transition-all duration-300 hover:text-[oklch(1_0_0_/_80%)] hover:border-[oklch(1_0_0_/_30%)]"
      style={{
        border: `1px solid oklch(1 0 0 / ${bright ? '25' : '10'}%)`,
        color: 'oklch(1 0 0 / 50%)',
      }}
      data-hover
    >
      {label}
    </span>
  );
}

export function SkillsSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <div className="scroll-child flex items-center gap-4 mb-8">
            <span className="text-[11px] tracking-[0.2em] uppercase shrink-0" style={{ color: 'oklch(1 0 0 / 25%)' }}>Skills</span>
            <div className="flex-1 h-[1px]" style={{ background: 'oklch(1 0 0 / 8%)' }} />
          </div>
          <div className="scroll-child mb-6">
            <p className="text-[12px] mb-3 uppercase tracking-[0.1em]" style={{ color: 'oklch(1 0 0 / 30%)' }}>AI & ML</p>
            <div className="flex flex-wrap gap-2">{aiSkills.map((s) => <Pill key={s} label={s} bright />)}</div>
          </div>
          <div className="scroll-child mb-6">
            <p className="text-[12px] mb-3 uppercase tracking-[0.1em]" style={{ color: 'oklch(1 0 0 / 30%)' }}>Product</p>
            <div className="flex flex-wrap gap-2">{productSkills.map((s) => <Pill key={s} label={s} />)}</div>
          </div>
          <div className="scroll-child">
            <p className="text-[12px] mb-3 uppercase tracking-[0.1em]" style={{ color: 'oklch(1 0 0 / 30%)' }}>Technical</p>
            <div className="flex flex-wrap gap-2">{techSkills.map((s) => <Pill key={s} label={s} />)}</div>
          </div>
        </div>

        <div>
          <div className="scroll-child flex items-center gap-4 mb-8">
            <span className="text-[11px] tracking-[0.2em] uppercase shrink-0" style={{ color: 'oklch(1 0 0 / 25%)' }}>Certifications</span>
            <div className="flex-1 h-[1px]" style={{ background: 'oklch(1 0 0 / 8%)' }} />
          </div>
          <div className="space-y-3">
            {certs.map((c) => (
              <div key={c.name} className="scroll-child p-5 rounded-2xl" style={{ background: '#111', border: '1px solid oklch(1 0 0 / 8%)' }}>
                <div className="flex items-center gap-3">
                  <span className="text-sm" style={{ color: 'oklch(0.7 0.15 145)' }}>✓</span>
                  <div>
                    <p className="text-[14px] text-foreground">{c.name}</p>
                    <p className="text-[12px]" style={{ color: 'oklch(1 0 0 / 40%)' }}>{c.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    date: 'Apr – Jun 2025',
    role: 'CX Business Analyst Intern (PPO)',
    company: 'Capgemini Technology Services · Pune',
    bullets: [
      'Led AI-assisted workflow research, presented to senior leadership',
      '15× reduction in manual effort through feature prioritization',
    ],
    badge: 'PPO',
  },
  {
    date: 'Jan 2021 – May 2024',
    role: 'Associate Consultant',
    company: 'Infosys Limited · Bengaluru',
    bullets: [
      '5+ multi-million dollar Salesforce RFPs',
      'Backlog owner for 10+ microservices Agile team',
      '8M+ records SQL transformation',
    ],
    badge: '3.5 yrs',
  },
  {
    date: '2024 – 2026',
    role: 'MBA',
    company: 'SCMHRD, Symbiosis International · Pune · 7.00 CGPA',
    bullets: [
      'National Finalist — CASEino, Grant Thornton 2025',
      'Semi-Finalist — GSK E³ and TATA Imagination Challenge 2025',
    ],
    badge: 'Current',
  },
  {
    date: '2016 – 2020',
    role: 'B.Tech',
    company: 'Haldia Institute of Technology, MAKAUT · 8.79 CGPA',
    bullets: [],
    badge: '8.79',
  },
];

export function ExperienceSection() {
  const ref = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-24 px-6" style={{ background: '#060606' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="scroll-child flex items-center gap-4 mb-12">
          <span className="text-[11px] tracking-[0.2em] uppercase shrink-0" style={{ color: 'oklch(1 0 0 / 25%)' }}>
            Experience
          </span>
          <div className="flex-1 h-[1px]" style={{ background: 'oklch(1 0 0 / 8%)' }} />
        </div>

        <div>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="scroll-child grid md:grid-cols-[180px_1fr_120px] gap-4 py-6 transition-all duration-300 hover:bg-[oklch(1_0_0_/_2%)]"
              style={{ borderBottom: '1px solid oklch(1 0 0 / 6%)' }}
            >
              <span className="hidden md:block text-[12px] shrink-0" style={{ fontFamily: 'monospace', color: 'oklch(1 0 0 / 30%)' }}>
                {exp.date}
              </span>
              <div>
                <h4 className="text-[16px] font-medium text-foreground mb-1">{exp.role}</h4>
                <p className="text-[13px] mb-2" style={{ color: 'oklch(1 0 0 / 40%)' }}>{exp.company}</p>
                {exp.bullets.map((b, j) => (
                  <p key={j} className="text-[13px] leading-relaxed" style={{ color: 'oklch(1 0 0 / 30%)' }}>• {b}</p>
                ))}
              </div>
              <div className="flex md:justify-end items-start">
                <span className="text-[11px] px-3 py-1 rounded-full" style={{ border: '1px solid oklch(1 0 0 / 15%)', color: 'oklch(1 0 0 / 50%)' }}>
                  {exp.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

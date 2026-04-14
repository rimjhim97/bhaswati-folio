import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const contacts = [
  { label: 'Email', value: 'bhaswatichakraborty638@gmail.com', href: 'mailto:bhaswatichakraborty638@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/bhaswatic97', href: 'https://www.linkedin.com/in/bhaswatic97/' },
  { label: 'GitHub', value: 'github.com/rimjhim97', href: 'https://github.com/rimjhim97' },
];

export function ContactSection() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="py-24 px-6" style={{ background: '#050505' }}>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="scroll-child">
          <h2 style={{ fontFamily: 'var(--font-family-display)' }}>
            <span className="block text-[clamp(40px,5vw,60px)] text-foreground">Let's build</span>
            <span className="block text-[clamp(40px,5vw,60px)] italic" style={{ color: 'oklch(1 0 0 / 30%)' }}>something</span>
            <span className="block text-[clamp(40px,5vw,60px)] text-foreground">real.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="scroll-child block rounded-xl p-5 transition-all duration-300 group hover:bg-[oklch(1_0_0_/_3%)]"
              style={{ border: '1px solid oklch(1 0 0 / 8%)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[13px] block mb-1" style={{ color: 'oklch(1 0 0 / 40%)' }}>{c.label}</span>
                  <span className="text-[14px] text-foreground">{c.value}</span>
                </div>
                <span className="text-foreground opacity-30 group-hover:opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { WorkSection } from '@/components/WorkSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { useCustomCursor } from '@/hooks/useCustomCursor';

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [
      { title: 'Bhaswati Chakraborty — AI Product Manager' },
      { name: 'description', content: 'MBA candidate at SCMHRD building AI products. 3.5 years enterprise tech. Available for PM roles.' },
      { property: 'og:title', content: 'Bhaswati Chakraborty — AI Product Manager' },
      { property: 'og:description', content: 'MBA candidate at SCMHRD building AI products. 3.5 years enterprise tech.' },
    ],
  }),
});

function Index() {
  useCustomCursor();

  return (
    <div className="bg-background text-foreground min-h-screen neon-bg" style={{ cursor: 'none' }}>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

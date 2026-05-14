import { ContactSection } from '@/components/ContactSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { SkillsSection } from '@/components/SkillsSection';
import { TeardownSection } from '@/components/TeardownSection';
import { WorkSection } from '@/components/WorkSection';
import { useCustomCursor } from '@/hooks/useCustomCursor';
import { CampusTribePage } from '@/pages/CampusTribePage';
import { FocusStackPage } from '@/pages/FocusStackPage';

function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-screen neon-bg" style={{ cursor: 'none' }}>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <TeardownSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-background text-foreground">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold" style={{ fontFamily: 'var(--font-family-display)' }}>404</h1>
        <p className="mt-4 text-sm" style={{ color: 'oklch(1 0 0 / 50%)' }}>
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <a href="/" className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-white text-black transition-all hover:opacity-90">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  useCustomCursor();

  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  if (pathname === '/') return <HomePage />;
  if (pathname === '/work/campustribe') return <CampusTribePage />;
  if (pathname === '/work/focusstack') return <FocusStackPage />;

  return <NotFoundPage />;
}
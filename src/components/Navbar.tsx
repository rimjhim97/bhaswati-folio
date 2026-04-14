import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'oklch(0.07 0 0 / 90%)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(1 0 0 / 8%)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-family-display)' }}>
            BC
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {['work', 'about', 'teardown', 'contact'].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-[13px] capitalize transition-all duration-300 relative group"
                style={{ color: 'oklch(1 0 0 / 50%)' }}
                data-hover
              >
                {s}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="mailto:bhaswatichakraborty638@gmail.com"
              className="text-[13px] px-5 py-2 rounded-full border transition-all duration-300 hover:bg-foreground hover:text-background"
              style={{ borderColor: 'oklch(1 0 0 / 30%)', color: 'oklch(1 0 0 / 70%)' }}
              data-hover
            >
              Hire me →
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8">
          {['work', 'about', 'teardown', 'contact'].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-[32px] capitalize text-foreground"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

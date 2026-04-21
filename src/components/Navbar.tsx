import { useState } from 'react';
import { Link } from '@tanstack/react-router';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: 'oklch(0.07 0 0 / 85%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid oklch(1 0 0 / 8%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl text-foreground transition-transform duration-300 hover:scale-110" aria-label="Home" data-hover>
            ☕
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {['work', 'about', 'contact'].map((s) => (
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
          {['work', 'about', 'contact'].map((s) => (
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

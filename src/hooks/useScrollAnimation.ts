import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.scroll-child');
            if (children.length > 0) {
              children.forEach((child, i) => {
                (child as HTMLElement).style.animationDelay = `${i * 80}ms`;
                child.classList.add('animate-fade-up');
              });
            } else {
              entry.target.classList.add('animate-fade-up');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

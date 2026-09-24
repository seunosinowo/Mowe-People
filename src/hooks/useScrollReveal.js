import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current || document;
    const els = root.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return ref;
}

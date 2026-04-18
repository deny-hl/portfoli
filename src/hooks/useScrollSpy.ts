import { useEffect, useState } from 'react';

export function useScrollSpy(ids: readonly string[], initial = ids[0] ?? '') {
  const [active, setActive] = useState<string>(initial);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px' },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, [ids]);

  return active;
}

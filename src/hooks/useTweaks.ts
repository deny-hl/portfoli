import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_TWEAKS, type Tweaks } from '../types/tweaks';

const KEY = 'tweaks';

function readInitial(): Tweaks {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_TWEAKS;
    const parsed = JSON.parse(raw) as Partial<Tweaks>;
    return { ...DEFAULT_TWEAKS, ...parsed };
  } catch {
    return DEFAULT_TWEAKS;
  }
}

export function useTweaks() {
  const [tweaks, setTweaks] = useState<Tweaks>(readInitial);

  // Persist on change
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(tweaks)); } catch { /* noop */ }
  }, [tweaks]);

  // Mirror accentHue into CSS var for instant visual feedback
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-h', String(tweaks.accentHue));
  }, [tweaks.accentHue]);

  const setTweak = useCallback(<K extends keyof Tweaks>(k: K, v: Tweaks[K]) => {
    setTweaks((prev) => ({ ...prev, [k]: v }));
  }, []);

  const resetTweaks = useCallback(() => setTweaks(DEFAULT_TWEAKS), []);

  return { tweaks, setTweak, resetTweaks };
}

import { useCallback, useEffect, useState } from 'react';
import type { Theme } from '../types/tweaks';

const KEY = 'theme';

function readInitial(fallback: Theme): Theme {
  try {
    const v = localStorage.getItem(KEY);
    if (v === 'dark' || v === 'light') return v;
  } catch { /* noop */ }
  return fallback;
}

export function useTheme(fallback: Theme = 'dark') {
  const [theme, setThemeState] = useState<Theme>(() => readInitial(fallback));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(KEY, theme); } catch { /* noop */ }
  }, [theme]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(() => setThemeState((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return { theme, setTheme, toggleTheme };
}

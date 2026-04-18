import { useEffect } from 'react';

type Options = {
  key: string;
  ctrlOrMeta?: boolean;
  onFire: () => void;
  preventDefault?: boolean;
};

/**
 * Binds a single hotkey. Ctrl+<key> on Win/Linux, Cmd+<key> on macOS when ctrlOrMeta is true.
 * Ignores key presses while the user is typing in an input, textarea, or contenteditable.
 */
export function useHotkey({ key, ctrlOrMeta = false, onFire, preventDefault = true }: Options) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== key) return;
      if (ctrlOrMeta && !(e.ctrlKey || e.metaKey)) return;

      const target = e.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable) return;
      }

      if (preventDefault) e.preventDefault();
      onFire();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [key, ctrlOrMeta, onFire, preventDefault]);
}

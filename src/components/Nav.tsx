import type { CSSProperties } from 'react';
import type { Theme } from '../types/tweaks';
import { useWarsawTime } from '../hooks/useWarsawTime';

type Props = {
  theme: Theme;
  onToggleTheme: () => void;
  active: string;
};

const sections = [
  { id: 'about', n: '01' },
  { id: 'projects', n: '02' },
  { id: 'skills', n: '03' },
  { id: 'contact', n: '04' },
] as const;

const headerStyle: CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 20,
  backdropFilter: 'blur(12px) saturate(1.2)',
  WebkitBackdropFilter: 'blur(12px) saturate(1.2)',
  background: 'color-mix(in oklab, var(--bg) 78%, transparent)',
  borderBottom: '1px solid var(--line)',
};

const innerStyle: CSSProperties = {
  maxWidth: 'var(--max-w)',
  margin: '0 auto',
  padding: '14px var(--gutter)',
};

const logoDotStyle: CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: 2,
  background: 'var(--accent)',
  boxShadow: '0 0 12px var(--accent-line)',
};

const logoTextStyle: CSSProperties = {
  fontSize: 12,
  letterSpacing: '0.04em',
};

const toggleBtnStyle: CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: 6,
  border: '1px solid var(--line)',
  background: 'transparent',
  cursor: 'pointer',
  display: 'grid',
  placeItems: 'center',
};

function navLinkStyle(activeId: string, id: string): CSSProperties {
  const isActive = activeId === id;
  return {
    fontSize: 11,
    letterSpacing: '0.08em',
    padding: '8px 12px',
    color: isActive ? 'var(--fg)' : 'var(--fg-mute)',
    borderBottom: `1px solid ${isActive ? 'var(--accent-line)' : 'transparent'}`,
    transition: 'color 0.15s, border-color 0.15s',
    textTransform: 'uppercase',
  };
}

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === 'dark') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function Nav({ theme, onToggleTheme, active }: Props) {
  const time = useWarsawTime();

  return (
    <header style={headerStyle}>
      <div style={innerStyle} className="nav-wrap">
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={logoDotStyle} aria-hidden="true" />
          <span className="mono" style={logoTextStyle}>
            DENYS · <span style={{ color: 'var(--fg-mute)' }}>PORTFOLIO / v1.0</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="mono"
              style={navLinkStyle(active, s.id)}
            >
              <span style={{ color: 'var(--fg-mute)', marginRight: 6 }}>§{s.n}</span>
              {s.id}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--fg-mute)' }}>
            WAW · {time}
          </span>
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={toggleBtnStyle}
            type="button"
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
      </div>
    </header>
  );
}

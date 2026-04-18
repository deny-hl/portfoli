import type { CSSProperties } from 'react';
import { ME } from '../data/me';

const footerStyle: CSSProperties = {
  padding: '40px var(--gutter)',
  borderTop: '1px solid var(--line)',
  background: 'var(--bg)',
};

const innerStyle: CSSProperties = {
  maxWidth: 'var(--max-w)',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 16,
};

const textStyle: CSSProperties = {
  fontSize: 11,
  color: 'var(--fg-mute)',
  letterSpacing: '0.08em',
};

export function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <div className="mono" style={textStyle}>
          © 2026 DENYS · WARSAW · {ME.coords}
        </div>
        <div className="mono" style={textStyle}>
          Built with HTML, a terminal, and eight years of watch-keeping.
        </div>
      </div>
    </footer>
  );
}

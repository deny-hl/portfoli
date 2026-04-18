import type { CSSProperties } from 'react';
import { ME } from '../../data/me';
import { LogRow } from './LogRow';

const cardStyle: CSSProperties = {
  border: '1px solid var(--line)',
  borderRadius: 10,
  padding: 22,
  background: 'color-mix(in oklab, var(--bg-elev) 85%, transparent)',
};

const kickerStyle: CSSProperties = {
  fontSize: 11,
  color: 'var(--fg-mute)',
  letterSpacing: '0.08em',
  marginBottom: 14,
};

export function SideCard() {
  return (
    <div style={cardStyle}>
      <div className="mono" style={kickerStyle}>WATCH LOG — CURRENT</div>
      <div style={{ fontSize: 15, lineHeight: 1.55, marginBottom: 20 }}>{ME.now}</div>
      <div style={{ display: 'grid', gap: 10, fontSize: 13 }}>
        <LogRow k="STATUS" v="Employed · OBRIO" dot />
        <LogRow k="OPEN" v="CS · QA · Support" />
        <LogRow k="STACK" v="Python, JS, Claude" />
        <LogRow k="NEXT" v="Full-stack · → Paris" />
      </div>
    </div>
  );
}

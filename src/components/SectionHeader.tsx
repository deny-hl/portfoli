import type { CSSProperties } from 'react';

type Props = {
  n: string;
  kicker: string;
  title: string;
  subtitle?: string;
  showNumbering: boolean;
};

const grid: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'var(--label-col) 1fr',
  columnGap: 'var(--label-gap)',
  rowGap: 24,
  alignItems: 'start',
  marginBottom: 64,
};

const kickerStyle: CSSProperties = {
  fontSize: 11,
  color: 'var(--fg-mute)',
  letterSpacing: '0.12em',
  paddingTop: 12,
  textTransform: 'uppercase',
  borderTop: '1px solid var(--line-hi)',
};

const titleStyle: CSSProperties = {
  margin: 0,
  fontSize: 'clamp(32px, 4vw, 48px)',
  fontWeight: 500,
  letterSpacing: '-0.025em',
  lineHeight: 1.05,
};

const subtitleStyle: CSSProperties = {
  marginTop: 16,
  color: 'var(--fg-dim)',
  fontSize: 16,
  maxWidth: 640,
  textWrap: 'pretty',
};

export function SectionHeader({ n, kicker, title, subtitle, showNumbering }: Props) {
  return (
    <div style={grid}>
      <div className="mono" style={kickerStyle}>
        {showNumbering && <span style={{ color: 'var(--accent)', marginRight: 8 }}>§{n}</span>}
        {kicker}
      </div>
      <div>
        <h2 style={titleStyle}>{title}</h2>
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
      </div>
    </div>
  );
}

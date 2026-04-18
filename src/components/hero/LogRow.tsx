import type { CSSProperties } from 'react';

type Props = {
  k: string;
  v: string;
  dot?: boolean;
};

const rowStyle: CSSProperties = {
  display: 'flex',
  gap: 16,
  alignItems: 'baseline',
  borderBottom: '1px dashed var(--line)',
  paddingBottom: 8,
};

const keyStyle: CSSProperties = {
  fontSize: 10,
  color: 'var(--fg-mute)',
  letterSpacing: '0.1em',
  minWidth: 56,
};

const dotStyle: CSSProperties = {
  display: 'inline-block',
  width: 6,
  height: 6,
  borderRadius: 3,
  background: 'var(--accent)',
  marginRight: 8,
  verticalAlign: 'middle',
};

export function LogRow({ k, v, dot = false }: Props) {
  return (
    <div style={rowStyle}>
      <span className="mono" style={keyStyle}>{k}</span>
      <span style={{ flex: 1 }}>
        {dot && <span style={dotStyle} aria-hidden="true" />}
        {v}
      </span>
    </div>
  );
}

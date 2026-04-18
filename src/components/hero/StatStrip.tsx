import type { CSSProperties } from 'react';
import type { Stat } from '../../types/content';
import type { StatStripVariant } from '../../types/tweaks';

type Props = {
  stats: readonly Stat[];
  variant: StatStripVariant;
};

const tickerWrap: CSSProperties = {
  marginTop: 96,
  border: '1px solid var(--line)',
  borderRadius: 10,
  background: 'color-mix(in oklab, var(--bg-elev) 60%, transparent)',
};

const minimalWrap: CSSProperties = {
  marginTop: 96,
  paddingTop: 24,
  borderTop: '1px solid var(--line)',
  display: 'flex',
  gap: 48,
  flexWrap: 'wrap',
};

export function StatStrip({ stats, variant }: Props) {
  if (variant === 'minimal') {
    return (
      <div style={minimalWrap}>
        {stats.map((s, i) => (
          <div key={`${s.l}-${i}`}>
            <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em' }}>{s.v}</span>
            <span
              className="mono"
              style={{ fontSize: 11, color: 'var(--fg-mute)', marginLeft: 8, textTransform: 'uppercase' }}
            >
              {s.u} · {s.l}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const cssVars = { '--stats-count': stats.length } as CSSProperties;

  return (
    <div className="stats-ticker" style={{ ...tickerWrap, ...cssVars }}>
      {stats.map((s, i) => (
        <div
          key={`${s.l}-${i}`}
          style={{
            padding: '22px 24px',
            borderRight: i < stats.length - 1 ? '1px solid var(--line)' : 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <div
            className="mono"
            style={{ fontSize: 10, color: 'var(--fg-mute)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            {s.l}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em' }}>{s.v}</span>
            <span className="mono" style={{ fontSize: 12, color: 'var(--fg-mute)' }}>{s.u}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

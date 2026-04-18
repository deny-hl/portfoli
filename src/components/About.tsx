import type { CSSProperties } from 'react';
import { ME } from '../data/me';
import type { Tweaks } from '../types/tweaks';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

type Props = { tweaks: Tweaks };

const sectionStyle: CSSProperties = {
  padding: '112px var(--gutter)',
  borderTop: '1px solid var(--line)',
};

const paraStyle: CSSProperties = {
  margin: 0,
  fontSize: 17,
  lineHeight: 1.65,
  color: 'var(--fg-dim)',
  textWrap: 'pretty',
};

const maritimeBoxStyle: CSSProperties = {
  marginTop: 16,
  padding: 20,
  border: '1px solid var(--line)',
  borderRadius: 8,
  borderLeft: '2px solid var(--accent)',
};

const maritimeKickerStyle: CSSProperties = {
  fontSize: 10,
  color: 'var(--fg-mute)',
  letterSpacing: '0.12em',
  marginBottom: 8,
};

const maritimePillStyle: CSSProperties = {
  fontSize: 12,
  padding: '4px 10px',
  border: '1px solid var(--line-hi)',
  borderRadius: 4,
  color: 'var(--fg-dim)',
};

const factsCardStyle: CSSProperties = {
  border: '1px solid var(--line)',
  borderRadius: 10,
  background: 'color-mix(in oklab, var(--bg-elev) 70%, transparent)',
  overflow: 'hidden',
};

const factsHeaderStyle: CSSProperties = {
  padding: '16px 22px',
  borderBottom: '1px solid var(--line)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const factRowStyle: CSSProperties = {
  padding: '14px 22px',
  borderBottom: '1px solid var(--line)',
  display: 'grid',
  gridTemplateColumns: '110px 1fr',
  gap: 16,
  alignItems: 'baseline',
};

const nowPanelStyle: CSSProperties = {
  padding: '18px 22px',
  background: 'color-mix(in oklab, var(--accent) 6%, transparent)',
};

const maritimeTraits = [
  'Ownership',
  'Calm under alarm',
  'Cross-cultural teams',
  'Systems thinking',
  'Incident response',
  'Shift reliability',
];

export function About({ tweaks }: Props) {
  return (
    <section id="about" style={sectionStyle}>
      <div className="container">
        <Reveal>
          <SectionHeader
            n="01"
            kicker="About"
            title="A pivot, not a reset."
            subtitle="Eight years of operating critical systems under pressure, pointed at a new industry."
            showNumbering={tweaks.sectionNumbering}
          />
        </Reveal>

        <div className="section-indent">
          <div className="about-grid">
            <Reveal delay={100}>
              <div style={{ display: 'grid', gap: 24 }}>
                {ME.bio.map((p, i) => (
                  <p key={i} style={paraStyle}>{p}</p>
                ))}
                <div style={maritimeBoxStyle}>
                  <div className="mono" style={maritimeKickerStyle}>
                    WHAT MARITIME TAUGHT ME
                  </div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    {maritimeTraits.map((x) => (
                      <span key={x} className="mono" style={maritimePillStyle}>{x}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div style={factsCardStyle}>
                <div style={factsHeaderStyle}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: 'var(--fg-mute)' }}>
                    FACTS
                  </span>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: '0.08em', color: 'var(--fg-mute)' }}>
                    v1.0 — APR 2026
                  </span>
                </div>
                {ME.facts.map(([k, v]) => (
                  <div key={k} style={factRowStyle}>
                    <span className="mono" style={{ fontSize: 10, color: 'var(--fg-mute)', letterSpacing: '0.1em' }}>{k}</span>
                    <span style={{ fontSize: 14, color: 'var(--fg)' }}>{v}</span>
                  </div>
                ))}
                {tweaks.showNowPlaying && (
                  <div style={nowPanelStyle}>
                    <div
                      className="mono"
                      style={{ fontSize: 10, letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}
                    >
                      ◉ NOW — updated monthly
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--fg)' }}>{ME.now}</div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

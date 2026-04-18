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

const cardStyle: CSSProperties = {
  border: '1px solid var(--line)',
  borderRadius: 10,
  padding: 24,
  minHeight: 260,
  background: 'color-mix(in oklab, var(--bg-elev) 60%, transparent)',
  display: 'flex',
  flexDirection: 'column',
};

const chipStyle: CSSProperties = {
  fontSize: 12,
  padding: '5px 10px',
  borderRadius: 4,
  border: '1px solid var(--line-hi)',
  background: 'var(--bg)',
};

export function Skills({ tweaks }: Props) {
  const total = ME.skills.length;

  return (
    <section id="skills" style={sectionStyle}>
      <div className="container">
        <Reveal>
          <SectionHeader
            n="03"
            kicker="Skills"
            title="Grouped, not a tag cloud."
            subtitle="What I actually use, sorted by where it came from."
            showNumbering={tweaks.sectionNumbering}
          />
        </Reveal>

        <div className="section-indent">
          <div className="skills-grid">
            {ME.skills.map((g, i) => (
              <Reveal key={g.group} delay={i * 100}>
                <div style={cardStyle}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: 6,
                    }}
                  >
                    <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>{g.group}</div>
                    <div
                      className="mono"
                      style={{ fontSize: 10, color: 'var(--fg-mute)', letterSpacing: '0.1em' }}
                    >
                      {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--fg-mute)', marginBottom: 18 }}>{g.note}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                    {g.items.map((it) => (
                      <span key={it} className="mono" style={chipStyle}>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

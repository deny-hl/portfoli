import type { CSSProperties } from 'react';
import { ME } from '../data/me';
import type { Tweaks } from '../types/tweaks';
import { Reveal } from './Reveal';
import { Btn } from './primitives/Btn';
import { InstrumentGrid } from './hero/InstrumentGrid';
import { SideCard } from './hero/SideCard';
import { StatStrip } from './hero/StatStrip';

type Props = { tweaks: Tweaks };

const sectionStyle: CSSProperties = {
  position: 'relative',
  paddingTop: 96,
  paddingBottom: 112,
};

const containerStyle: CSSProperties = {
  maxWidth: 'var(--max-w)',
  margin: '0 auto',
  padding: '0 var(--gutter)',
  position: 'relative',
};

const coordBarStyle: CSSProperties = {
  fontSize: 11,
  color: 'var(--fg-mute)',
  letterSpacing: '0.06em',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingBottom: 48,
};

const headlineStyle: CSSProperties = {
  fontSize: 'clamp(44px, 7vw, 96px)',
  lineHeight: 1.02,
  letterSpacing: '-0.035em',
  fontWeight: 500,
  margin: 0,
  textWrap: 'pretty',
};

const subheadStyle: CSSProperties = {
  marginTop: 40,
  maxWidth: 620,
  fontSize: 17,
  lineHeight: 1.6,
  color: 'var(--fg-dim)',
  textWrap: 'pretty',
};

export function Hero({ tweaks }: Props) {
  const headline = ME.headlines[tweaks.headlineVariant] ?? ME.headlines.a;

  return (
    <section id="top" style={sectionStyle}>
      <InstrumentGrid />

      <div style={containerStyle}>
        {tweaks.coordBadge && (
          <Reveal>
            <div className="mono" style={coordBarStyle}>
              <span>
                <span style={{ color: 'var(--accent)' }} aria-hidden="true">●</span> ACTIVE · WARSAW
              </span>
              <span>{ME.coords}</span>
              <span>BEARING · TECH / EU</span>
              <span>ETA · OPEN</span>
            </div>
          </Reveal>
        )}

        <div className="hero-grid" data-layout={tweaks.heroLayout}>
          <div>
            <Reveal delay={50}>
              <h1 style={headlineStyle}>
                <span style={{ color: 'var(--fg-dim)' }}>{headline[0]}</span>
                <br />
                <span>{headline[1]}</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p style={subheadStyle}>{ME.subhead}</p>
            </Reveal>

            <Reveal delay={230}>
              <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Btn href="#projects" primary>See projects →</Btn>
                <Btn href={ME.cv} download>Download CV</Btn>
              </div>
            </Reveal>
          </div>

          {tweaks.heroLayout === 'asymmetric' && (
            <Reveal delay={300}>
              <SideCard />
            </Reveal>
          )}
        </div>

        <Reveal delay={400}>
          <StatStrip stats={ME.stats} variant={tweaks.statStrip} />
        </Reveal>
      </div>
    </section>
  );
}

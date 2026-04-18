import { useState, type CSSProperties } from 'react';
import { ME } from '../data/me';
import type { Tweaks } from '../types/tweaks';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

type Props = { tweaks: Tweaks };

const sectionStyle: CSSProperties = {
  padding: '112px var(--gutter)',
  borderTop: '1px solid var(--line)',
};

const leadStyle: CSSProperties = {
  margin: 0,
  fontSize: 22,
  lineHeight: 1.4,
  maxWidth: 720,
  fontWeight: 400,
  letterSpacing: '-0.01em',
  color: 'var(--fg)',
};

const accentSpan: CSSProperties = { color: 'var(--accent)' };

export function Contact({ tweaks }: Props) {
  return (
    <section id="contact" style={sectionStyle}>
      <div className="container">
        <Reveal>
          <SectionHeader
            n="04"
            kicker="Contact"
            title="Direct channel. No forms."
            subtitle="Recruiters and hiring managers prefer email. So do I."
            showNumbering={tweaks.sectionNumbering}
          />
        </Reveal>

        <div className="section-indent" style={{ display: 'grid', gap: 40 }}>
          <Reveal delay={100}>
            <p style={leadStyle}>
              Hiring for <span style={accentSpan}>Customer Success</span>,{' '}
              <span style={accentSpan}>QA Manual</span>, or <span style={accentSpan}>Tech Support</span> in
              Warsaw? I'd like to hear about the role.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="contact-grid" style={{ maxWidth: 900 }}>
              <ContactCard kicker="EMAIL" value={ME.email} href={`mailto:${ME.email}`} primary />
              <ContactCard kicker="GITHUB" value="github.com/deny-hl" href={ME.github} external />
              <ContactCard kicker="LINKEDIN" value="linkedin.com/in/deny-hl" href={ME.linkedin} external />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  kicker: string;
  value: string;
  href: string;
  primary?: boolean;
  external?: boolean;
};

function ContactCard({ kicker, value, href, primary = false, external = false }: CardProps) {
  const [hover, setHover] = useState(false);

  const style: CSSProperties = {
    display: 'block',
    padding: '24px 22px',
    border: `1px solid ${hover || primary ? 'var(--accent-line)' : 'var(--line)'}`,
    borderRadius: 10,
    background: hover
      ? 'color-mix(in oklab, var(--accent) 6%, var(--bg-elev))'
      : 'color-mix(in oklab, var(--bg-elev) 60%, transparent)',
    transition: 'all 0.18s ease',
  };

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={style}
    >
      <div
        className="mono"
        style={{ fontSize: 10, color: 'var(--fg-mute)', letterSpacing: '0.14em', marginBottom: 10 }}
      >
        {kicker}
      </div>
      <div
        style={{
          fontSize: 15,
          color: 'var(--fg)',
          wordBreak: 'break-all',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span>{value}</span>
        <span
          style={{
            color: hover ? 'var(--accent)' : 'var(--fg-mute)',
            transition: 'color 0.15s',
          }}
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </a>
  );
}

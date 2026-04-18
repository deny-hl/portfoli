import { useState, type CSSProperties, type MouseEvent } from 'react';
import { ME } from '../data/me';
import type { Project } from '../types/content';
import type { Tweaks } from '../types/tweaks';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

type Props = { tweaks: Tweaks };

const sectionStyle: CSSProperties = {
  padding: '112px var(--gutter)',
  borderTop: '1px solid var(--line)',
};

export function Projects({ tweaks }: Props) {
  return (
    <section id="projects" style={sectionStyle}>
      <div className="container">
        <Reveal>
          <SectionHeader
            n="02"
            kicker="Projects"
            title="Things I built to solve my own problems."
            subtitle="Small, real, shipped. Each one scratched an itch I had as a pivoter working across four languages and one timezone."
            showNumbering={tweaks.sectionNumbering}
          />
        </Reveal>

        <div className="section-indent" style={{ display: 'grid', gap: 16 }}>
          {ME.projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectRow p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ p }: { p: Project }) {
  const [hover, setHover] = useState(false);
  const wip = p.status === 'wip';

  const rowStyle: CSSProperties = {
    padding: 28,
    border: `1px solid ${hover && !wip ? 'var(--accent-line)' : 'var(--line)'}`,
    borderRadius: 10,
    background:
      hover && !wip
        ? 'color-mix(in oklab, var(--accent) 4%, var(--bg-elev))'
        : 'color-mix(in oklab, var(--bg-elev) 60%, transparent)',
    opacity: wip ? 0.55 : 1,
    transition: 'all 0.2s ease',
    cursor: wip ? 'default' : 'pointer',
  };

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (wip) e.preventDefault();
  };

  return (
    <a
      href={p.repo ?? '#'}
      target={p.repo ? '_blank' : undefined}
      rel={p.repo ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={onClick}
      style={rowStyle}
      className="project-row-grid"
      aria-disabled={wip}
    >
      <div
        className="mono"
        style={{ fontSize: 12, color: 'var(--fg-mute)', letterSpacing: '0.08em', paddingTop: 2 }}
      >
        #{p.id}
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: '-0.01em' }}>{p.title}</h3>
          {wip ? (
            <span
              className="mono"
              style={{
                fontSize: 9,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '2px 8px',
                borderRadius: 3,
                border: '1px dashed var(--line-hi)',
                color: 'var(--fg-mute)',
              }}
            >
              WIP
            </span>
          ) : (
            <span
              className="mono"
              style={{
                fontSize: 9,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '2px 8px',
                borderRadius: 3,
                background: 'var(--accent-dim)',
                color: 'var(--accent)',
                border: '1px solid var(--accent-line)',
              }}
            >
              LIVE
            </span>
          )}
        </div>
        <div
          className="mono"
          style={{ fontSize: 11, color: 'var(--fg-mute)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          {p.kind}
        </div>
      </div>

      <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-dim)' }}>
        {p.problem && (
          <div style={{ marginBottom: p.solution ? 10 : 0 }}>
            <span
              className="mono"
              style={{ fontSize: 10, color: 'var(--fg-mute)', letterSpacing: '0.12em', marginRight: 8 }}
            >
              PROB
            </span>
            {p.problem}
          </div>
        )}
        {p.solution && (
          <div>
            <span
              className="mono"
              style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em', marginRight: 8 }}
            >
              SOLN
            </span>
            {p.solution}
          </div>
        )}
      </div>

      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
          {p.stack.map((s) => (
            <span
              key={s}
              className="mono"
              style={{
                fontSize: 11,
                padding: '3px 8px',
                borderRadius: 3,
                border: '1px solid var(--line-hi)',
                color: 'var(--fg-dim)',
              }}
            >
              {s}
            </span>
          ))}
        </div>
        {p.repo && (
          <span
            className="mono"
            style={{
              fontSize: 11,
              color: hover ? 'var(--accent)' : 'var(--fg-mute)',
              letterSpacing: '0.06em',
              transition: 'color 0.15s',
            }}
          >
            GITHUB ↗
          </span>
        )}
      </div>
    </a>
  );
}

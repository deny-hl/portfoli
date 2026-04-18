import type { CSSProperties, ReactNode } from 'react';
import type { Tweaks } from '../types/tweaks';
import { Seg } from './primitives/Seg';
import { Toggle } from './primitives/Toggle';

type Props = {
  tweaks: Tweaks;
  setTweak: <K extends keyof Tweaks>(k: K, v: Tweaks[K]) => void;
  resetTweaks: () => void;
  open: boolean;
  onClose: () => void;
};

const panelStyle: CSSProperties = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  zIndex: 100,
  width: 320,
  maxWidth: 'calc(100vw - 40px)',
  padding: 20,
  border: '1px solid var(--line-hi)',
  borderRadius: 12,
  background: 'color-mix(in oklab, var(--bg-elev) 95%, transparent)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  boxShadow: '0 20px 60px -20px rgba(0, 0, 0, 0.6)',
  fontFamily: 'Inter, system-ui, sans-serif',
};

const headerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16,
};

const closeBtnStyle: CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: 'var(--fg-mute)',
  cursor: 'pointer',
  fontSize: 18,
  lineHeight: 1,
  padding: 4,
};

const resetBtnStyle: CSSProperties = {
  background: 'transparent',
  border: '1px solid var(--line)',
  color: 'var(--fg-mute)',
  cursor: 'pointer',
  fontSize: 10,
  letterSpacing: '0.12em',
  padding: '4px 8px',
  borderRadius: 4,
  textTransform: 'uppercase',
};

function TweakRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div
        className="mono"
        style={{
          fontSize: 10,
          color: 'var(--fg-mute)',
          letterSpacing: '0.1em',
          marginBottom: 6,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

export function TweaksPanel({ tweaks, setTweak, resetTweaks, open, onClose }: Props) {
  if (!open) return null;

  return (
    <div style={panelStyle} role="dialog" aria-label="Design tweaks">
      <div style={headerStyle}>
        <div
          className="mono"
          style={{ fontSize: 11, letterSpacing: '0.12em', color: 'var(--fg-mute)' }}
        >
          TWEAKS
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button type="button" onClick={resetTweaks} style={resetBtnStyle}>
            Reset
          </button>
          <button
            type="button"
            onClick={onClose}
            style={closeBtnStyle}
            aria-label="Close tweaks panel"
          >
            ×
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        <TweakRow label="Headline">
          <Seg
            value={tweaks.headlineVariant}
            onChange={(v) => setTweak('headlineVariant', v)}
            opts={[
              ['a', 'Eight years'],
              ['b', 'Bridge'],
              ['c', 'Vessel'],
            ]}
            label="Headline variant"
          />
        </TweakRow>

        <TweakRow label="Hero layout">
          <Seg
            value={tweaks.heroLayout}
            onChange={(v) => setTweak('heroLayout', v)}
            opts={[
              ['asymmetric', 'Asymmetric'],
              ['centered', 'Single'],
            ]}
            label="Hero layout"
          />
        </TweakRow>

        <TweakRow label="Stat strip">
          <Seg
            value={tweaks.statStrip}
            onChange={(v) => setTweak('statStrip', v)}
            opts={[
              ['ticker', 'Ticker'],
              ['minimal', 'Minimal'],
            ]}
            label="Stat strip variant"
          />
        </TweakRow>

        <TweakRow label="Accent hue">
          <input
            type="range"
            min={140}
            max={260}
            value={tweaks.accentHue}
            onChange={(e) => setTweak('accentHue', Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent)' }}
            aria-label="Accent hue"
          />
          <div
            className="mono"
            style={{ fontSize: 10, color: 'var(--fg-mute)', textAlign: 'right' }}
          >
            H {tweaks.accentHue}° · teal → cyan → blue
          </div>
        </TweakRow>

        <TweakRow label="Coord bar">
          <Toggle
            on={tweaks.coordBadge}
            onChange={(v) => setTweak('coordBadge', v)}
            label="Show coord bar"
          />
        </TweakRow>

        <TweakRow label="Section §">
          <Toggle
            on={tweaks.sectionNumbering}
            onChange={(v) => setTweak('sectionNumbering', v)}
            label="Section numbering"
          />
        </TweakRow>

        <TweakRow label="Now panel">
          <Toggle
            on={tweaks.showNowPlaying}
            onChange={(v) => setTweak('showNowPlaying', v)}
            label="Show now panel"
          />
        </TweakRow>
      </div>

      <div
        className="mono"
        style={{
          marginTop: 18,
          paddingTop: 12,
          borderTop: '1px solid var(--line)',
          fontSize: 10,
          color: 'var(--fg-mute)',
          letterSpacing: '0.08em',
          textAlign: 'center',
        }}
      >
        Ctrl/⌘ + , to toggle
      </div>
    </div>
  );
}

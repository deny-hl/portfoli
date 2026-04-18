import type { CSSProperties } from 'react';

type Props = {
  on: boolean;
  onChange: (v: boolean) => void;
  label?: string;
};

export function Toggle({ on, onChange, label }: Props) {
  const wrapStyle: CSSProperties = {
    width: 40,
    height: 22,
    borderRadius: 11,
    background: on ? 'var(--accent)' : 'var(--line-hi)',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    transition: 'background 0.15s',
    padding: 0,
  };

  const knobStyle: CSSProperties = {
    position: 'absolute',
    top: 2,
    left: on ? 20 : 2,
    width: 18,
    height: 18,
    borderRadius: 9,
    background: '#fff',
    transition: 'left 0.15s',
  };

  return (
    <button
      type="button"
      onClick={() => onChange(!on)}
      style={wrapStyle}
      role="switch"
      aria-checked={on}
      aria-label={label}
    >
      <span style={knobStyle} aria-hidden="true" />
    </button>
  );
}

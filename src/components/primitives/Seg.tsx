import type { CSSProperties } from 'react';

type Opt<V extends string> = readonly [V, string];

type Props<V extends string> = {
  value: V;
  onChange: (v: V) => void;
  opts: readonly Opt<V>[];
  label?: string;
};

const wrapStyle: CSSProperties = {
  display: 'flex',
  border: '1px solid var(--line)',
  borderRadius: 6,
  overflow: 'hidden',
};

export function Seg<V extends string>({ value, onChange, opts, label }: Props<V>) {
  return (
    <div style={wrapStyle} role="radiogroup" aria-label={label}>
      {opts.map(([v, lbl], i) => {
        const selected = value === v;
        const style: CSSProperties = {
          flex: 1,
          padding: '6px 8px',
          fontSize: 11,
          background: selected ? 'var(--accent-dim)' : 'transparent',
          color: selected ? 'var(--fg)' : 'var(--fg-dim)',
          border: 'none',
          cursor: 'pointer',
          borderRight: i < opts.length - 1 ? '1px solid var(--line)' : 'none',
        };
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            style={style}
            role="radio"
            aria-checked={selected}
          >
            {lbl}
          </button>
        );
      })}
    </div>
  );
}

import type { CSSProperties } from 'react';

const wrapStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
  zIndex: 0,
  maskImage: 'radial-gradient(ellipse at 80% 0%, black 0%, transparent 70%)',
  WebkitMaskImage: 'radial-gradient(ellipse at 80% 0%, black 0%, transparent 70%)',
  opacity: 0.45,
};

export function InstrumentGrid() {
  return (
    <div aria-hidden="true" style={wrapStyle}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--line)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

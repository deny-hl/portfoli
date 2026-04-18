import { useState, type CSSProperties, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href: string;
  primary?: boolean;
  external?: boolean;
  download?: boolean | string;
};

export function Btn({ children, href, primary = false, external = false, download }: Props) {
  const [hover, setHover] = useState(false);

  const borderColor = primary || hover ? 'var(--accent-line)' : 'var(--line-hi)';
  const color = primary || hover ? 'var(--fg)' : 'var(--fg-dim)';
  const background = primary
    ? 'var(--accent-dim)'
    : hover
      ? 'var(--bg-elev)'
      : 'transparent';

  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 14,
    fontWeight: 500,
    padding: '12px 18px',
    borderRadius: 8,
    border: `1px solid ${borderColor}`,
    background,
    color,
    transition: 'all 0.18s ease',
    cursor: 'pointer',
  };

  const downloadAttr = download === true ? '' : download;

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...(download !== undefined ? { download: downloadAttr } : {})}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      {children}
    </a>
  );
}

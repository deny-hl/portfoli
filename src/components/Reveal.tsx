import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLElement>, 'style' | 'className' | 'children'>;

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style, ...rest }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const combinedStyle: CSSProperties = { ...style, transitionDelay: `${delay}ms` };
  return (
    <Tag
      {...rest}
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={combinedStyle}
    >
      {children}
    </Tag>
  );
}

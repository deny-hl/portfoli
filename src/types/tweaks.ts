import type { HeadlineKey } from './content';

export type Theme = 'dark' | 'light';
export type Density = 'comfortable' | 'compact';
export type HeroLayout = 'asymmetric' | 'centered';
export type StatStripVariant = 'ticker' | 'minimal';

export type Tweaks = {
  theme: Theme;
  accentHue: number;
  density: Density;
  heroLayout: HeroLayout;
  headlineVariant: HeadlineKey;
  statStrip: StatStripVariant;
  sectionNumbering: boolean;
  coordBadge: boolean;
  showNowPlaying: boolean;
};

export const DEFAULT_TWEAKS: Tweaks = {
  theme: 'dark',
  accentHue: 200,
  density: 'comfortable',
  heroLayout: 'asymmetric',
  headlineVariant: 'a',
  statStrip: 'ticker',
  sectionNumbering: true,
  coordBadge: true,
  showNowPlaying: true,
};
